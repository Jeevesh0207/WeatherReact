import React, { useEffect } from 'react'
import temp from '../img/thermometer.png'
import loca from '../img/location.png'


function TodayWeather({ dataApi, Location }) {
    let stat, statLog
    if (Location.name) {
        stat = dataApi.condition.text
        if (stat === 'Sunny') {
            statLog = (require('../Image/1.png'))
        }
        else if (stat === 'Partly sunny') {
            statLog = (require('../Image/2.png'))
        }
        else if (stat === 'Partly cloudy') {
            statLog = (require('../Image/3.png'))
        }
        else if (stat === 'Sun and rain') {
            statLog = (require('../Image/4.png'))
        }
        else if (stat === 'Rain') {
            statLog = (require('../Image/5.png'))
        }
        else if (stat === 'Thunderstrom') {
            statLog = (require('../Image/6.png'))
        }
        else if (stat === 'Snow') {
            statLog = (require('../Image/7.png'))
        }
        else if (stat === 'Cloudy' || stat === 'Overcast') {
            statLog = (require('../Image/8.png'))
        }
        else if (stat === 'Windy') {
            statLog = (require('../Image/9.png'))
        }
        else if (stat === 'Rainbow') {
            statLog = (require('../Image/10.png'))
        }
        else if (stat === 'Tornados') {
            statLog = (require('../Image/11.png'))
        }
        else if (stat === 'Clear') {
            statLog = (require('../Image/12.png'))
        }
        else if (stat === 'Mist') {
            statLog = (require('../Image/13.png'))
        }
        else {
            statLog = (require('../Image/12.png'))
        }
    }
    return (
        <div className='TodayWeather'>

            <div className='location'>
                <h3>
                    <img src={loca} />
                    {Location.name}</h3>
            </div>
            <div className='item1'>
                <p><img src={temp} />{dataApi.temp_c}&deg;</p>
                {/* <p>max.22&deg; , min.15&deg;</p> */}
            </div>
            <div className='item2'>
                <img src={statLog} />
            </div>
            <div className='item3'>
                <p>{stat}</p>
                <p>
                    <i className="fa-solid fa-droplet"></i>
                    {dataApi.humidity}
                </p>
                <p>
                    <i className="fa-solid fa-wind"></i>
                    {dataApi.wind_kph} km/h
                </p>
                <p>
                    <i className="fa-solid fa-compass"></i>
                    {dataApi.wind_dir}
                </p>
            </div>
        </div>
    )

}

export default TodayWeather