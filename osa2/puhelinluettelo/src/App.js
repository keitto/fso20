import React, {useState} from 'react';

const Contacts = ({persons}) => {
  return (
    <ul>
      {persons.map((person) => <li key={person.name}>{person.name}</li>)}
    </ul>
  )    
}


const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [nameInput, setNameInput] = useState('name?')


  const nameInputChange = (e) => {
    setNameInput(e.target.value)
  }

  const addButtonClick = (e) => {
    e.preventDefault()
    setPersons(persons.concat({name: nameInput}))
    setNameInput('')
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={nameInput} onChange={nameInputChange}/>
        </div>
        <div>
          <button type="submit" onClick={addButtonClick}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Contacts persons={persons}/>
    </div>
  )

}
export default App;
