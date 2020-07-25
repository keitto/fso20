import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const VoteButton = ({selected, votes, fun}) => {
  const increment = () => {
    const newArr = [...votes]
    newArr[selected] = newArr[selected] + 1
    fun(newArr)
  }
  return (<button onClick={increment}>vote</button>)
}

const Votes = ({selected, votes}) => {
  const thisvotes = votes[selected] || '0'
  return (<p>(has {thisvotes} votes)</p>)
}

const NextButton = ({setsel}) => {
  const newVal = () => Math.floor(Math.random() * anecdotes.length)
  return (<button onClick={() => setsel(newVal)}>get another</button>)
}

const TopAnecdote = ({votes}) => {
  const max = votes.reduce((accu, i) => i>=accu? accu = i:accu)
  if(max === 0)
    return (<></>)
  let ret = [];
  anecdotes.forEach((v,k) => {
    if(votes[k] === max && max > 0) {
      //console.log(votes[k], k,v)
      ret.push(anecdotes[k]) 
    }
  })

  return (
    <div>
      <h1>Top anecdote(s) with {max} votes:</h1>
      {ret.map((anecdote,i) => (<p key={i}>{anecdote}</p>))}
    </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  return (
    <div>
      <NextButton setsel={setSelected} />
      <VoteButton selected={selected} votes={votes} fun={setVotes}/>
      <p>{props.anecdotes[selected]}</p>
      <Votes selected={selected} votes={votes}/>
      <TopAnecdote votes={votes}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)