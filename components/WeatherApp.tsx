'use client'

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { FaWind, FaWater } from "react-icons/fa6";

export default function WeatherApp () {

  const detailClassName = "flex items-center justify-center space-x-3"
  const weatherAPI = process.env.API_KEY
  console.log(weatherAPI)

  // https://api.weatherapi.com/v1/current.json?key=3d3dd43aa77149eaa8d15206232512&q=London&aqi=no
  
  return (
    <section className="h-[550px] w-[420px] bg-gradient-to-b from-[#4B14D3] to-[#353C91] shadow-2xl rounded-xl px-10 py-10 flex flex-col items-center justify-between">
      <div className="flex space-x-5 w-full">
        <input type="text" placeholder='Enter city or country...' className='w-full rounded-xl text-black px-3 font-medium'/> 
        <button>
          <MagnifyingGlassIcon className='text-black h-10 p-2 bg-white rounded-[50%] hover:bg-gray-200'/>
        </button>
      </div>
      <img src="/cloudy.png" alt="weatherSvg" className="h-[150px] aspect-square" />
      <h1 className='text-7xl font-medium'>24°C</h1>
      <h3 className='text-4xl'>London, UK</h3>
        <div className="flex justify-between w-full">      
         <div className={detailClassName}>
            <FaWater className='size-[35px]'/>
            <div>
              <p className='text-2xl'>64%</p>
              <p>Humidity</p>
            </div>
          </div>4
          <div className={detailClassName}>
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