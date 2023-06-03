import React from 'react';
import sunrise from './sunrise.png'
import sunset from './sunset.png'
import humidity from './humidity.png'
import wind from './wind.png'
import pressure from './pressure.png'

const WeatherData = (props) => {

  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };



  return (
    <div className='weatherData'>
      <div className='currtemp'>
        <div className='tempAndLogo'>
        <div>
            <img src={`assets/${props.weather.icon}.svg`} width={200} alt='icon'/>
        </div>
        <div>
            {Math.round(props.weatherData.temp)}&deg;C
            <p>{props.weather.description}</p>
        </div>
        </div>
        <div className='windData'>
            <p>Wind: <span>{props.windData.speed}&nbsp;mph</span></p>
            <p>Min Temp: <span>{Math.round(props.weatherData.temp_min)}&deg;C</span></p>
            <p>Max Temp: <span>{Math.round(props.weatherData.temp_max)}&deg;C</span></p>
        </div>
      </div>
      <div id='scrolledItem' className='forcastdata'>
        <div>
            <p>SUNRISE</p>
            <img src={sunrise} width={100} alt='icon'/>
            <p>{getTime(props.city.sunrise)}</p>
        </div>
        <div>
            <p>HUMIDITY</p>
            <img src={humidity} width={100} alt='icon'/>
            <p>{props.weatherData.humidity}&nbsp;mm</p>
        </div>
        <div>
            <p>WIND</p>
            <img src={wind} width={100} alt='icon'/>
            <p>{props.windData.speed}&nbsp;mph</p>
        </div>
        <div>
            <p>PRESSURE</p>
            <img src={pressure} width={100} alt='icon'/>
            <p>{props.weatherData.pressure}&nbsp;mb</p>
        </div>

        <div>
            <p>SUNSET</p>
            <img src={sunset} width={100} alt='icon'/>
            <p>{getTime(props.city.sunset)}</p>
        </div>
      </div>
      
    </div>
  )
}

export default WeatherData;
