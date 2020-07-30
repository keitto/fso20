import React, {useState} from 'react';
import Contacts from './components/Contacts'
import Filter from './components/Filter'
import Newform from './components/Newform'

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
