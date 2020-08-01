import React, { useState, useEffect } from 'react';
import Axios from 'axios';


const Filter = ({value, onChange}) => {
  return (
    <input value={value} onChange={onChange} />
  )
}

const CountryList = ({countries, setDetailsCountry}) => {
  if(countries.length > 10)
    return <div>Too many hits (10+)</div>
  return (<ul>
    {countries.map(i => <FilteredListRow key={i.name} country={i} setDetailsCountry={setDetailsCountry}/>)}
  </ul>)
}

const FilteredListRow = ({country, setDetailsCountry}) => (
  <li>
    <button onClick={() => setDetailsCountry(country)}>i</button> 
    {country.name}
  </li>
)

const SingleCountry = ({country, setDetailsCountry}) => {
  if(country.name) {
    return (  
      <div>
        <h2>
          <button onClick={() => setDetailsCountry({})}>x</button>
          {country.name}
        </h2>
        <p>capital: {country.capital}</p>
        <p>pop: {country.population}</p>
        <h3>languages:</h3>
        <ul>
          {country.languages.map(l => <li key={l.name}>{l.name}</li>)}
        </ul>
        <img alt={`flag of ${country.name}`} src={country.flag} width="100"/>
      </div>
    )
  }    
}

const App = () => {
  const [filter, setFilter] = useState('')
  const [filtered, setFiltered] = useState([]) 
  const [countries, setCountries] = useState([])
  const [detailsCountry, setDetailsCountry] = useState({})

  useEffect(() => {
    Axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((result) => {
        setCountries(result.data)
      })
  }, [])

  useEffect(() => {
    console.log('filter or countries set')
    setDetailsCountry({})
    setFiltered(countries.filter(i => i.name.toLowerCase().includes(filter.toLowerCase())))
  },[filter,countries])

  const filterOnCh = (e) => setFilter(e.target.value)

  return (
    <div>
      <h1>Countries</h1>
      Filter countries 
      <Filter value={filter} onChange={filterOnCh}/>
      {filter !== '' ? <CountryList countries={filtered} setDetailsCountry={setDetailsCountry}/>:''}
      {
        detailsCountry.name
          ? <SingleCountry country={detailsCountry} setDetailsCountry={setDetailsCountry}/>
          : filtered.length === 1
            ? <SingleCountry country={filtered[0]} setDetailsCountry={setDetailsCountry} />
            : ''
      }
    </div>
  );
}

export default App;
