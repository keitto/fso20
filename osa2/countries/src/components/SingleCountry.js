import React from 'react'
import WeatherAt from './WeatherAt'

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
          <WeatherAt query={country.capital}/>
        </div>
      )
    }    
  }

  export default SingleCountry