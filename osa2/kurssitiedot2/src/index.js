import React from 'react';
import ReactDOM from 'react-dom';

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

const Courses = ({courses}) =>
  <div>{courses.map((course) =>
    <Course key={course.id} course={course}/>
  )}</div>

const Course = ({course}) =>
  <div>
    <Header course={course} />
    <Content course={course} />
    <Total course={course} />
  </div>

const App = () => {
  const courses = 
  [  
    {
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
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  return <Courses courses={courses} />
}

ReactDOM.render(<App />, document.getElementById('root'))
