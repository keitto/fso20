import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({text, whatFun, amount}) => {
  return (
  <button onClick={() => whatFun(amount)}>{text}</button>
  )
}

const Stats = ({good,avg,bad}) => {
  return (
    <div>
      <h1>Stats:</h1>
      <p>good: {good}</p>
      <p>average: {avg}</p>
      <p>bad: {bad}</p>
    </div>  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [avg, setAvg] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
  <h1>Did you like maksakastike?</h1>
  <Button text='good'     whatFun={setGood} amount={good + 1} />
  <Button text='average'  whatFun={setAvg}  amount={avg + 1} />
  <Button text='bad'      whatFun={setBad}  amount={bad + 1} />
  <Stats good={good} avg={avg} bad={bad} />

    </div>
  )
}

ReactDOM.render(<App />,  document.getElementById('root'));
