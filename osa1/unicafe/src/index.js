import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({text, whatFun, amount}) => {
  return (
  <button onClick={() => whatFun(amount)}>{text}</button>
  )
}

const StatsLine = ({text,value}) => (
  <tr><td>{text}</td><td>{value}</td></tr>
)


const Stats = ({good,neutral,bad}) => {
  const total = good+neutral+bad
  const positivePct = 100*(good / total) || 0
  const avg = (good-bad)/total || 0
  let statsContent = (<div>No feedback given</div>)

  if(total > 0) {
    statsContent = (
      <div>
        <table>
          <tbody>
            <StatsLine text='good' value={good} />
            <StatsLine text='neutral' value={neutral} />
            <StatsLine text='bad' value={bad} />

            <StatsLine text='total' value={total} />
            <StatsLine text='positive' value={positivePct.toFixed(1)+'%'} />
            <StatsLine text='average' value={avg.toFixed(2)} />
          </tbody>
        </table>
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
