import React, { useState, useEffect } from 'react';
import Axios from 'axios';


const Filter = ({value, onChange}) => {
  return (
    <input value={value} onChange={onChange} />
  )
}

const FilteredList = ({filter,list}) => {
  const filtered = list.filter(i => i.name.toLowerCase().includes(filter.toLowerCase()))
  if(filter === '')
    return (<></>)
  else if (filtered.length > 10)
    return (<p>too many results (10+)</p>)
  else if (filtered.length === 1)
    return (
      <SingleCountry country={filtered[0]} />
      )
  else
    return (<ul>
              {filtered.map(i => <li key={i.name}>{i.name}</li>)}
            </ul>)
}

const SingleCountry = ({country}) => (
  <div>
    <h2>{country.name}</h2>
    <p>capital: {country.capital}</p>
    <p>pop: {country.population}</p>
    <h3>languages:</h3>
    <ul>
      {country.languages.map(l => <li key={l.name}>{l.name}</li>)}
    </ul>
    <img alt={`flag of ${country.name}`} src={country.flag} width="100"/>
  </div>
)

const App = () => {
  const [filter, setFilter] = useState('') 
  const [countries, setCountries] = useState([])

  useEffect(() => {
    Axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((result) => {
        //result.data.forEach(r => {console.log(r.name)})
        setCountries(result.data)
      })
    console.log("effe")
  }, [])

  const filterOnCh = (e) => setFilter(e.target.value)

  return (
    <div>
      Filter countries 
      <Filter value={filter} onChange={filterOnCh} />
      <FilteredList filter={filter} list={countries}/>
    </div>
  );
}

export default App;
