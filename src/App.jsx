import { useState, useRef } from 'react'

const App = () => {
  const nameRef = useRef(null)
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
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
    nameRef.current.focus()

  }

  return (
    <div>
      <h2>Phonebook</h2>

      <div style={{ marginBottom: "20px" }}>Filter shown with
        <input type="text" value={searchText} onChange={handleSearchTextChange} />
      </div>


      <form onSubmit={handleSubmit}>
        <div>
          name: <input ref={nameRef} value={newName} onChange={handleNameInputChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberInputChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.filter((person) => person.name.toLowerCase().includes(searchText.toLowerCase())).map((person, i) => <h3 key={i}>{person.name} {person.number}</h3>)}

    </div>
  )
}

export default App