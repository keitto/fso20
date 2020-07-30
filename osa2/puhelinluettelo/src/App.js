import React, {useState} from 'react';

const Contacts = ({persons}) => {
  return (
    <table>
      <tbody>
      {persons.map((person) => 
        <tr key={person.name}>
          <td>{person.name}</td>
          <td>{person.number || ''}</td>
        </tr>)}
      </tbody>
    </table>
  )    
}

const Newform = ({nameInput, nameInputChange, 
  numberInput, numberInputChange, addButtonClick}) => {
  return (
    <form>
      <div>
        Add new contact: 
        <input value={nameInput} onChange={nameInputChange}/>
        <input value={numberInput} onChange={numberInputChange}/>
      </div>
      <div>
        <button type="submit" onClick={addButtonClick}>add</button>
      </div>
    </form>
  )
}

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '0401234567' },
    { name: 'Tero Nuppi', number:'0500987654'}
  ]) 
  const [nameInput, setNameInput] = useState('')
  const [numberInput, setNumberInput] = useState('')

  const nameInputChange = (e) => setNameInput(e.target.value)

  const numberInputChange = (e) => setNumberInput(e.target.value)

  const addButtonClick = (e) => {
    e.preventDefault()
    if(persons.map((i) => i.name).includes(nameInput)) {
      alert(`Name ${nameInput} exists`)
      return false
    }
    setPersons(persons.concat({name: nameInput, number: numberInput}))
    setNameInput('')
    setNumberInput('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Newform nameInput={nameInput}
        nameInputChange={nameInputChange}
        numberInput={numberInput}
        numberInputChange={numberInputChange}
        addButtonClick={addButtonClick}
      />
      <h2>Contacts</h2>
      <Contacts persons={persons}/>
    </div>
  )

}
export default App;
