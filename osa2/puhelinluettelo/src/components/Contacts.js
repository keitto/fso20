import React from 'react'

const Contact = ({person, deleteFun}) => 
    (
        <tr>
            <td>{person.name}</td>
            <td>{person.number}</td>
            <td><button onClick={deleteFun}>del</button></td>
        </tr>
    )

const Contacts = ({persons,filterInput, deleteFun}) =>
  (
    <table>
        <tbody>
        {persons
            .filter((p)=>p.name.toLowerCase().includes(filterInput.toLowerCase()))
            .map((person) => <Contact key={person.name} person={person} deleteFun={() => deleteFun(person.id)}/>)
        }
        </tbody>
    </table>
  )    

export default Contacts