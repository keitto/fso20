import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import SingleCountry from './components/SingleCountry'
import CountryList from './components/CountryList'

const Filter = ({value, onChange}) => {
  return (
    <input value={value} onChange={onChange} />
  )
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
