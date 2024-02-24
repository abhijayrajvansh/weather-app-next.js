'use client'

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { FaWind, FaWater } from "react-icons/fa6";
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Location {
  name: string;
  country: string;
}

interface Condition {
  icon: string;
}

interface Current {
  temp_c: number;
  humidity: number;
  wind_kph: number;
  condition: Condition;
}

interface WeatherDataProps {
  location: Location;
  current: Current;
}

export default function WeatherApp () {

  const API_KEY = '3d3dd43aa77149eaa8d15206232512'
  // warning: init api key using backend and fetch data from server without showing api key on client side
  // const weatherAPI_KEY = process.env.API_KEY
  // let weather_API_URL = `https://api.weatherapi.com/v1/current.json?key=${weatherAPI_KEY}&q=${searchQuery}&aqi=no`
  
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [weatherData, setWeatherData  ] = useState<WeatherDataProps | null>(null);

  
  const getWeatherData = async (cityName: string) => {
    try {
      const res = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}&aqi=no`)
      setWeatherData(res.data)
    }
    catch (error) {
      console.log('oops, caught an error or bad request!')
    } 
  }

  // get executed once, on mount
  useEffect (() => {
    getWeatherData('London')
  }, [])

  function handleClick () {
    getWeatherData(searchQuery)
  }

  return (
    <section className="h-[550px] w-[390px] bg-gradient-to-b from-[#4B14D3] to-[#353C91] shadow-2xl rounded-xl px-10 py-10 flex flex-col items-center justify-between">
      <div className="flex space-x-5 w-full">
        <input type="text" placeholder='Enter city or country...' onChange={queryValue => setSearchQuery(queryValue.target.value)} value={searchQuery} className='w-full rounded-xl text-gray-800 px-3 font-medium bg-white bg-opacity-[100%]'/> 
        <button>
          <MagnifyingGlassIcon onClick={handleClick} className='text-black h-10 p-2 bg-white rounded-[50%] hover:bg-gray-200'/>
        </button>
      </div>

      { weatherData ? (
        <>
            <img src={weatherData.current.condition.icon} alt="weatherSvg" className="h-[150px]" />
            <h1 className='text-6xl font-medium'>{weatherData.current.temp_c}°C</h1>
            <h3 className='text-3xl text-center'>{weatherData.location.name}, {weatherData.location.country}</h3>
            <div className="flex justify-between w-full">
              <div className="flex items-center justify-center space-x-3">
                <FaWater className='size-[35px]'/>
                <div>
                  <p className='text-2xl'>{weatherData.current.humidity}%</p>
                  <p>Humidity</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <FaWind className='size-[35px]'/>
                <div>
                  <p className='text-2xl'>{weatherData.current.wind_kph} km/h</p>
                  <p>Wind Speed</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <h1 className='text-3xl font-medium h-full flex items-center'>Loading...</h1>
        )
      }
    </section>
  )
}