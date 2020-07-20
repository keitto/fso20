import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => (
  <h1>{props.header}</h1>
)

const Content = (props) => (
  <div>
    <Part name={props.part1} num={props.ex1}/>
    <Part name={props.part2} num={props.ex2}/>
    <Part name={props.part3} num={props.ex3}/>
  </div>
)

const Part = (props) => (
  <p>{props.name} - {props.num}</p>
)

const Total = (props) => (
  <p>Number of exercises {props.ex1 + props.ex2 + props.ex3}</p>
)

const App = () => {
  const course = 'Half Stack application Development'
  const part1 = 'Fundamentals of React'
  const ex1 = 10 // # of exercises
  const part2 = 'Using props to pass data'
  const ex2 = 7
  const part3 = 'State of a component'
  const ex3 = 14

  return (
    <div>
      <Header header={course} />
      <Content 
        part1={part1} ex1={ex1}        
        part2={part2} ex2={ex2}
        part3={part3} ex3={ex3}
      />
      <Total ex1={ex1} ex2={ex2} ex3={ex3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
