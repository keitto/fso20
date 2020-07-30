import React, {useState} from 'react';

const Contacts = ({persons,filterInput}) =>
  (
    <table>
      <tbody>
      {persons
      .filter((p)=>p.name.toLowerCase().includes(filterInput.toLowerCase()))
      .map((person) => 
        <tr key={person.name}>
          <td>{person.name}</td>
          <td>{person.number || ''}</td>
        </tr>)}
      </tbody>
    </table>
  )    

const Newform = ({nameInput, nameInputChange, 
  numberInput, numberInputChange, addButtonClick}) => 
  (
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

const Filter = ({filterInput,filterInputChange}) =>
  (
    <div>
      <input value={filterInput} onChange={filterInputChange}/>
    </div>
  )

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '0401234567' },
    { name: 'Tero Nuppi', number:'0500987654'},
    { name: 'Arto Paasilinna', number: '0404040404'}
  ]) 
  const [nameInput, setNameInput] = useState('')
  const [numberInput, setNumberInput] = useState('')
  const [filterInput, setFilterInput] = useState('')

  const nameInputChange = (e) => setNameInput(e.target.value)

  const numberInputChange = (e) => setNumberInput(e.target.value)

  const filterInputChange = (e) => setFilterInput(e.target.value)

  const addButtonClick = (e) => {
    e.preventDefault()
    if(nameInput.trim() === '') return false // no invisible names
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
      <h1>Phonebook</h1>
      <h2>Add new</h2>
      <Newform nameInput={nameInput}
        nameInputChange={nameInputChange}
        numberInput={numberInput}
        numberInputChange={numberInputChange}
        addButtonClick={addButtonClick}
      />
      <h2>Filter</h2>
      <Filter filterInput={filterInput} filterInputChange={filterInputChange}/>
      <h2>Contacts{filterInput.length>0?'*':''}</h2>
      <Contacts persons={persons} filterInput={filterInput}/>
    </div>
  )

}
export default App;
