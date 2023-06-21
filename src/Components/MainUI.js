import React, { useRef, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Search from './Search'
import TodayWeather from './TodayWeather'
import Loader from './Loader'
import Blank from './Blank'
import FutureWeather from './FutureWeather'

function MainUI() {
    // const inputRef = useRef()
    let q1, q2, id
    const [dataApi, setdataApi] = useState({})
    const [Location, setLocation] = useState({})
    const [Future, setFuture] = useState({})
    const [check, setCheck] = useState(false)
    const [load, setload] = useState(true)
    const [Err, setErr] = useState(false)
    const SubmitHandler = (e) => {

        e.preventDefault()
        console.log(e.target[0].value)
        let Reg = '', Stat = '', Con = ''
        const arr = []
        let str = ''
        for (let i = 0; i < (e.target[0].value).length; i++) {
            if (e.target[0].value[i] == ',') {
                arr.push(str)
                str = ""
                continue;
            }
            str += e.target[0].value[i]
        }
        arr.push(str)
        Reg = arr[0]
        Stat = arr[1]
        Con = arr[2]

        e.target[0].value = ""
        setload(false)
        setCheck(false)
        setErr(false)
        const Run1 = async () => {
            // console.log('Hello1')
            const options = {
                method: 'GET',
                url: 'https://weatherapi-com.p.rapidapi.com/search.json',
                params: { q: Reg },
                headers: {
                    'X-RapidAPI-Key': 'a5f854a4a4msh945ec253c144a4ap115a70jsn37a5f41be8ec',
                    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
                }
            };
            await axios.request(options)
                .then((res) => {
                    // console.log(res)
                    q1 = res.data[0].lat
                    q2 = res.data[0].lon
                })
                .catch((err) => {
                    console.log(err)
                    setErr(true)
                })

        }
        const Run2 = async () => {
            // console.log('Hello2')
            const options = {
                method: 'GET',
                url: 'https://weatherapi-com.p.rapidapi.com/current.json',
                params: { q: `${q1},${q2}` },
                headers: {
                    'X-RapidAPI-Key': 'a5f854a4a4msh945ec253c144a4ap115a70jsn37a5f41be8ec',
                    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
                }
            };
            await axios.request(options)
                .then((res) => {
                    // console.log(res)
                    setdataApi(res.data.current)
                    setLocation(res.data.location)
                })
                .catch((err) => {
                    console.log(err)
                    setErr(true)
                })

        }
        const FutLoc = async () => {
            // console.log('Hello3')
            const options = {
                method: 'GET',
                url: `https://foreca-weather.p.rapidapi.com/location/search/${Reg}`,
                params: {
                    lang: 'en',
                    // country: Con,
                },
                headers: {
                    'X-RapidAPI-Key': 'a5f854a4a4msh945ec253c144a4ap115a70jsn37a5f41be8ec',
                    'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com'
                }
            };
            await axios.request(options)
                .then((res) => {
                    console.log(res)
                    id = res.data.locations[0].id

                })
                .catch((err) => {
                    console.log(err)
                    setErr(true)

                })
        }
        const future = async () => {
            console.log(id)
            // console.log('Hello4')
            const options = {
                method: 'GET',
                url: `https://foreca-weather.p.rapidapi.com/forecast/daily/${id}`,
                params: {
                    alt: '0',
                    tempunit: 'C',
                    windunit: 'MS',
                    periods: '8',
                    dataset: 'full'
                },
                headers: {
                    'X-RapidAPI-Key': 'a5f854a4a4msh945ec253c144a4ap115a70jsn37a5f41be8ec',
                    'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com'
                }
            };
            await axios.request(options)
                .then((res) => {
                    // console.log(res)
                    setFuture(res.data.forecast)
                    setCheck(true)
                })
                .catch((err) => {
                    console.log(err)
                    setErr(true)

                })
        }

        const Fun = async () => {

            await Run1()
            await Run2()
            await FutLoc()
            await future()

        }
        Fun()
    }


    return (
        <div className='MainUi'>
            <Search GreetHandler={SubmitHandler} />
            {check ?
                <TodayWeather dataApi={dataApi} Location={Location} />
                : load ? <Blank /> : <Loader  Err={Err}/>
            }
            <FutureWeather Future={Future} />
        </div>
    )


}

export default MainUI