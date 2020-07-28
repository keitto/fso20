import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => (
  <h1>{props.course.name}</h1>
)

const Content = (props) => (
  <table>
    <tbody>
    {props.course.parts.map((part,i) => (
      <tr key={i}>
        <td>{part.name}</td><td>{part.exercises}</td>
      </tr>
    ))}
    </tbody>
  </table>
)

const Total = (props) => (
  <p>{props.course.parts.reduce((accu, part) => accu + part.exercises,0)}</p>
)

const Course = ({course}) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application Development',
    id: 1,
    parts: [
      {
        name:       'Fundamentals of React',
        exercises:  10,
        id:         1
      },
      {
        name:       'Using props to pass data',
        exercises:  7,
        id:         2
      },
      {
        name:       'State of a component',
        exercises:  14,
        id:         3
      }  
    ]  
  }
  return <Course course={course} />
}

ReactDOM.render(<App />, document.getElementById('root'))
