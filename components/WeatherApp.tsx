import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

export default function WeatherApp () {

  return (
    <section className="h-[550px] w-[420px] bg-gradient-to-b from-[#4B14D3] to-[#353C91] shadow-xl rounded-xl px-10 py-10 flex flex-col items-center justify-between">
      
      <div className="flex space-x-5 w-full">
        <input type="text" className='w-full rounded-xl text-black px-3 font-medium'/> 
        <button>
          <MagnifyingGlassIcon className='text-black h-10 p-2 bg-white rounded-[50%] hover:bg-gray-200'/>
        </button>
      </div>
      
      <img src="/cloudy.png" alt="weatherSvg" className="h-[150px] aspect-square" />

      <h1 className='text-7xl font-medium'>24°C</h1>

      <h3 className='text-4xl'>City, Country</h3>
      
      <div className="flex justify-between w-full">
        <div>
          <p>64%</p>
          <p>Humidity</p>
        </div>

        <div>
          <p>18km/h</p>
          <p>Wind Speed</p>
        </div>
        
      </div>
    </section>
  )
}