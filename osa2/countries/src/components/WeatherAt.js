import React, {useState, useEffect} from 'react'
import Axios from 'axios'

const WeatherAt = ({query}) => {
      // process.env.REACT_APP_WEATHERSTACK_API
      //http://api.weatherstack.com/current?access_key=apikey&query=Helsinki
      const [weather,setWeather] = useState({})
      useEffect(() => {
        Axios
          .get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHERSTACK_API}&query=${query}`)
          .then((result) => {
            setWeather(result.data)
          })
      },[query])
    
      return weather.current === undefined
        ? (<div>Getting weather in {query}, please wait...</div>)
        : (<div>
          <h2>Weather in {weather.location.name}</h2>
          <p>temp: {weather.current.temperature}°C</p>
          <img alt={weather.current.description} src={weather.current.weather_icons} />
          <p>wind: {weather.current.wind_speed}m/s to {weather.current.wind_dir}</p>
          </div>)
    }
    
export default WeatherAt