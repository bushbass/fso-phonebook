import { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'
import personsService from './services/personsService'
import Notification from './components/Notification'
import Error from './components/Error'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    // { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    // { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    // { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchText, setSearchText] = useState('')
  const [message, setMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    personsService.getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [errorMessage])

  const handleNameInputChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberInputChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nameToSet = { name: newName, number: newNumber }
    persons.some(person => person.name == nameToSet.name) ?
      updatePerson(nameToSet) :
      createPerson(nameToSet)

    setTimeout(() => {
      setMessage(null)
      setErrorMessage(null)
    }, 5000)
    setNewName('')
    setNewNumber('')

  }

  const createPerson = (person) => {
    personsService.create(person)
      .then(response => {
        setPersons(persons.concat(response.data))
        setMessage(
          `${person.name} was created`
        )
      })
  }

  const deletePerson = (id) => {
    if (window.confirm("are you sure you want to delete?")) {
      personsService.deletePerson(id)
        .then(setPersons(persons.filter(person => id !== person.id)))
    }
  }

  const updatePerson = (nameToSet) => {
    let updatedPerson = persons.find(person => nameToSet.name == person.name)
    if (window.confirm("This person already exists.  Replace the old number with a new one?")) {
      updatedPerson.number = newNumber
      personsService.update(updatedPerson.id, updatedPerson)
        .then(response => {
          console.log('response in update', response)
          setMessage(
            `${updatedPerson.name} was updated`
          )
        })
        .catch(error => {
          console.log({ error })
          setErrorMessage(
            `${error.response.status} ${updatedPerson.name} was already deleted from the server`
          )
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Error errorMessage={errorMessage} />
      <Notification message={message} />
      <Filter
        searchText={searchText}
        handleSearchTextChange={handleSearchTextChange} />


      <PersonForm
        handleSubmit={handleSubmit}
        newName={newName}
        newNumber={newNumber}
        handleNameInputChange={handleNameInputChange}
        handleNumberInputChange={handleNumberInputChange} />

      <h2>Numbers</h2>
      <Persons
        persons={persons}
        searchText={searchText}
        deletePerson={deletePerson} />

    </div>
  )
}

export default App