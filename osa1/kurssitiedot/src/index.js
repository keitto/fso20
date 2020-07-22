import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => (
  <h1>{props.course.name}</h1>
)

const Content = (props) => (
  <div>
    {props.course.parts.map(part => {
      return (<li>{part.name} - {part.exercises}</li>)
    })}
  </div>
)

const Part = (props) => (
  <p>{props.name} - {props.num}</p>
)

const Total = (props) => (
  <p>{props.course.parts.reduce((accu, part) => accu + part.exercises,0)}</p>
)

const App = () => {
  const course = {
    name: 'Half Stack application Development',
    parts: [
      {
        name:       'Fundamentals of React',
        exercises:  10
      },
      {
        name:       'Using props to pass data',
        exercises:  7
      },
      {
        name:       'State of a component',
        exercises:  14
      }  
    ]  
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
