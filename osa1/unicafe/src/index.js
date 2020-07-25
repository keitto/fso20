import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({text, whatFun, amount}) => {
  return (
  <button onClick={() => whatFun(amount)}>{text}</button>
  )
}

const Stats = ({good,neutral,bad}) => {
  const total = good+neutral+bad
  const positivePct = 100*(good / total) || 0
  const avg = (good-bad)/total || 0
  let statsContent = (<div>No feedback given</div>)

  if(total > 0) {
    statsContent = (
      <div>
        <p>good: {good}</p>
        <p>neutral: {neutral}</p>
        <p>bad: {bad}</p>
        <p>total: {total} - positive: {positivePct.toFixed(1)}% - avg: {avg.toFixed(2)}</p>
      </div>
    )
  }
  
  return (
    <div>
      <h1>Stats:</h1>
      {statsContent}
    </div>  
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
  <h1>Did you like maksakastike?</h1>
  <Button text='good'     whatFun={setGood} amount={good + 1} />
  <Button text='neutral'  whatFun={setNeutral}  amount={neutral + 1} />
  <Button text='bad'      whatFun={setBad}  amount={bad + 1} />
  <Stats good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

ReactDOM.render(<App />,  document.getElementById('root'));
