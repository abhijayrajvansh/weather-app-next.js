'use client'

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { FaWind, FaWater } from "react-icons/fa6";
import { useState, useEffect } from 'react';

export default function WeatherApp () {

  const [searchQuery, setSearchQuery] = useState('London')
  
  // warning: init api key using backend and fetch data from server without showing api key on client side
  // const weatherAPI_KEY = process.env.API_KEY
  // let weather_API_URL = `https://api.weatherapi.com/v1/current.json?key=${weatherAPI_KEY}&q=${searchQuery}&aqi=no`
  
  const weather_API_URL = `https://api.weatherapi.com/v1/current.json?key=3d3dd43aa77149eaa8d15206232512&q=${searchQuery}&aqi=no`

  const [fulfilledData, setFulfilledData  ] = useState([]);
  console.log(fulfilledData)

  function handleClick () {
    console.log(`fetching weather_API_URL using ${searchQuery}`)
  }

  useEffect(() => {
    fetch(weather_API_URL).then(res => res.json()).then(e => setFulfilledData(e))

  }, []);

  const DEBUG = true
  if(DEBUG) {
    return <div>
      <h1>Debug Mode</h1>


    </div>
  }
  
  return (
    <section className="h-[550px] w-[390px] bg-gradient-to-b from-[#4B14D3] to-[#353C91] shadow-2xl rounded-xl px-10 py-10 flex flex-col items-center justify-between">
      <div className="flex space-x-5 w-full">
        
        <input type="text" onChange={queryValue => setSearchQuery(queryValue.target.value)} value={searchQuery} className='w-full rounded-xl text-black px-3 font-medium'/> 
        
        <button>
          <MagnifyingGlassIcon onClick={handleClick} className='text-black h-10 p-2 bg-white rounded-[50%] hover:bg-gray-200'/>
        </button>
        
      </div>
      
      <img src="/cloudy.png" alt="weatherSvg" className="h-[150px] aspect-square" />
      
      <h1 className='text-7xl font-medium'>24°C</h1>
      
      <h3 className='text-4xl'>London, UK</h3>
        
        <div className="flex justify-between w-full">      
         
         <div className="flex items-center justify-center space-x-3">
            <FaWater className='size-[35px]'/>
            <div>
              <p className='text-2xl'>64%</p>
              <p>Humidity</p>
            </div>
          
          </div>
          <div className="flex items-center justify-center space-x-3">
            <FaWind className='size-[35px]'/>
            <div>
              <p className='text-2xl'>18 km/h</p>
              <p>Wind Speed</p>
            </div>
          </div>
        
        </div>
    </section>
  )
}