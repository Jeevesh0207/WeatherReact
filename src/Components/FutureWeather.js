import React from 'react'

function FutureWeather({ Future }) {
    const Logo = (stat) => {
        // console.log(stat)
        if (Future[0]) {
            if (stat === 'Sunny' || stat === 'sunny') {
                return (require('../Image/1.png'))
            }
            else if (stat === 'Partly sunny' || stat === 'partly sunny') {
                return (require('../Image/2.png'))
            }
            else if (stat === 'Partly cloudy' || stat === 'partly cloudy') {
                return (require('../Image/3.png'))
            }
            else if (stat === 'Sun and rain') {
                return (require('../Image/4.png'))
            }
            else if (stat === 'Rain' || stat.includes('rain') || stat === 'showers') {
                return (require('../Image/5.png'))
            }
            else if (stat === 'Thunderstrom' || stat === 'thunderstorms') {
                return (require('../Image/6.png'))
            }
            else if (stat === 'Snow' || stat === 'snow') {
                return (require('../Image/7.png'))
            }
            else if (stat === 'Cloudy' || stat === 'Overcast' || stat === 'cloudy') {
                return (require('../Image/8.png'))
            }
            else if (stat === 'Windy' || stat === 'windy') {
                return (require('../Image/9.png'))
            }
            else if (stat === 'Rainbow') {
                return (require('../Image/10.png'))
            }
            else if (stat === 'Tornados') {
                return (require('../Image/11.png'))
            }
            else if (stat === 'Clear' || stat === 'clear' || stat === 'mostly clear') {
                return (require('../Image/12.png'))
            }
            else if (stat === 'Mist') {
                return (require('../Image/13.png'))
            }
            else {
                return (require('../Image/12.png'))
            }
        }
    }
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const Day = (str) => {
        const d = new Date(str)
        return weekday[d.getDay()]
    }
    if (Future[0]) {
        return (
            <div className='futureWeather'>
                
                    <div className='Top'>

                        <div className='item item1'>
                            <img src={Logo(Future[1].symbolPhrase)} />
                            <p>{(Future[1].maxTemp + Future[1].minTemp) / 2}&deg;</p>
                            <p>{Day(Future[1].date)}</p>
                        </div>
                        <div className='item item2'>
                            <img src={Logo(Future[2].symbolPhrase)} />
                            <p>{(Future[2].maxTemp + Future[2].minTemp) / 2}&deg;</p>
                            <p>{Day(Future[2].date)}</p>
                        </div>
                        <div className='item item3'>
                            <img src={Logo(Future[3].symbolPhrase)} />
                            <p>{(Future[3].maxTemp + Future[3].minTemp) / 2}&deg;</p>
                            <p>{Day(Future[3].date)}</p>
                        </div>
                        <div className='item item4'>
                            <img src={Logo(Future[4].symbolPhrase)} />
                            <p>{(Future[4].maxTemp + Future[4].minTemp) / 2}&deg;</p>
                            <p>{Day(Future[4].date)}</p>
                        </div>
                    </div>
                    <div className='Bottom'>
                        <div className='item item5'>
                            <img src={Logo(Future[5].symbolPhrase)} />
                            <p>{(Future[5].maxTemp + Future[5].minTemp) / 2}&deg;</p>
                            <p>{Day(Future[5].date)}</p>
                        </div>
                        <div className='item item6'>
                            <img src={Logo(Future[6].symbolPhrase)} />
                            <p>{(Future[6].maxTemp + Future[6].minTemp) / 2}&deg;</p>
                            <p>{Day(Future[6].date)}</p>
                        </div>
                        <div className='item item7'>
                            <img src={Logo(Future[7].symbolPhrase)} />
                            <p>{(Future[7].maxTemp + Future[7].minTemp) / 2}&deg;</p>
                            <p>{Day(Future[7].date)}</p>
                        </div>
                    </div>
                
            </div>
        )
    }
    else {
        return (
            <div>

            </div>
        )
    }
}

export default FutureWeather