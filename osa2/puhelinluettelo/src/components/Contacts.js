import React from 'react'

const Contact = ({person}) => 
    (
        <tr>
            <td>{person.name}</td>
            <td>{person.number}</td>
        </tr>
    )

const Contacts = ({persons,filterInput}) =>
  (
    <table>
        <tbody>
        {persons
            .filter((p)=>p.name.toLowerCase().includes(filterInput.toLowerCase()))
            .map((person) => <Contact key={person.name} person={person}/>)
        }
        </tbody>
    </table>
  )    

export default Contacts