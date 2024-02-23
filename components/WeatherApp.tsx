export default function WeatherApp () {
  return (
    <section className="h-[550px] w-[420px] bg-gradient-to-b from-[#4B14D3] to-[#353C91] shadow-xl rounded-xl px-10 py-10 flex flex-col items-center justify-between">
      
      <div className="flex">
        <input type="text" /> <button>S</button>
      </div>
      
      <img src="/cloudy.png" alt="weatherSvg" className="h-[150px]" />
      // to fix weather svg size
      <h1>temperature</h1>

      <h3>City, Country</h3>
      
      <div className="flex">
        <p>humidity %</p> <p>wind speed km/h</p>
      </div>
    </section>
  )
}