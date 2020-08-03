import React from 'react'

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
  
export default CountryList