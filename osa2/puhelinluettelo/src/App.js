import React, {useState, useEffect} from 'react'
import Contacts from './components/Contacts'
import Filter from './components/Filter'
import Newform from './components/Newform'
import personService from './services/personService'

const App = () => {
  useEffect(() => {
    personService.getAll()
      .then((pers) => {
          console.log(pers)
          setPersons(pers)
      })
  }, [])
  console.log('app')

  // const [ persons, setPersons] = useState([
  //   { name: 'Arto Hellas', number: '0401234567' },
  //   { name: 'Tero Nuppi', number:'0500987654'},
  //   { name: 'Arto Paasilinna', number: '0404040404'},
  //   { name: 'json server', number: 'is not running'},
  //   { name: 'do it now', number: 'npm run server'},    
  // ]) 
  const [ persons, setPersons] = useState([]) 

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
      if(!window.confirm(`Name ${nameInput} exists, update number?`)) return
      const id = persons.filter(p => p.name === nameInput)[0].id
      const updatedPerson = {name: nameInput, number: numberInput, id: id}
      personService.updateOne(id, updatedPerson)
        .then(resultingPerson => {
          setPersons(persons.map(p => p.id !== resultingPerson.id ? p : resultingPerson))
        })
    } else { // name does not exist
      personService.addOne({name: nameInput, number: numberInput})
      .then((pers) => {
        setPersons(persons.concat(pers))
      })
    }
    setNameInput('')
    setNumberInput('')
  }

  const deleteContact = id => {
    if(!window.confirm(`Delete contact ${persons.filter(p => p.id === id)[0].name}?`)) return
    personService.removeOne(id).then(result => {
      if(result === 200) {
        setPersons(persons.filter(p => p.id !== id))
      } else if (result === 404) {
        console.log('serverside missing, remove clientside anyways',result)
        setPersons(persons.filter(p => p.id !== id))
      } else {
        alert(`Something broke, find help!\n(or run the json server)`)
      }
    })
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
      <Contacts persons={persons} filterInput={filterInput} deleteFun={deleteContact}/>
    </div>
  )

}
export default App;
