import { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'
import axios from 'axios'

const App = () => {
  // useEffect(() => {

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    // { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    // { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    // { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchText, setSearchText] = useState('')

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
      alert(`${nameToSet.name} is already added to phone book`) :
      setPersons(persons.concat(nameToSet))
    setNewName('')
    setNewNumber('')

  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter searchText={searchText} handleSearchTextChange={handleSearchTextChange} />


      <PersonForm handleSubmit={handleSubmit} newName={newName} newNumber={newNumber} handleNameInputChange={handleNameInputChange} handleNumberInputChange={handleNumberInputChange} />

      <h2>Numbers</h2>
      <Persons persons={persons} searchText={searchText} />

    </div>
  )
}

export default App