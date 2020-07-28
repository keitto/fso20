import React from 'react'

const Header = (props) => (
    <h1>{props.course.name}</h1>
  )
  
const Content = ({course}) =>
    <table>
      <tbody>
      {course.parts.map((part) => (
        <tr key={part.id}>
          <td>{part.name}</td><td>{part.exercises}</td>
        </tr>
      ))}
      </tbody>
    </table>
  
const Total = ({course}) => 
    <p>{course.parts.reduce((accu, part) => accu + part.exercises,0)}</p>
  
const Course = ({course}) =>
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  
export default Course