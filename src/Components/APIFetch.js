import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'

function APIFetch() {
    const [dataApi, setdataApi] = useState({})
    const [Location, setLocation] = useState({})
    const [Future, setFuture] = useState({})


    let q1, q2, id, Loc

    useEffect(() => {
        // console.log('Hello')

        const Run1 = async () => {
            const options = {
                method: 'GET',
                url: 'https://weatherapi-com.p.rapidapi.com/search.json',
                params: { q: Loc },
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
                })

        }
        const Run2 = async () => {
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
                })

        }
        const FutLoc = async () => {
            const options = {
                method: 'GET',
                url: 'https://foreca-weather.p.rapidapi.com/location/search/Ayodhya',
                params: {
                    lang: 'en',
                    country: 'in'
                },
                headers: {
                    'X-RapidAPI-Key': 'a5f854a4a4msh945ec253c144a4ap115a70jsn37a5f41be8ec',
                    'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com'
                }
            };
            await axios.request(options)
                .then((res) => {
                    // console.log(res.data.locations[0].id)
                    id = res.data.locations[0].id

                })
                .catch((err) => {
                    console.log(err)
                })
        }
        const future = async () => {
            // console.log(id)
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
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        const Fun = async () => {

            await Run1()
            await Run2()
            await FutLoc()
            await future()
        }
        Fun()

    }, [])
    return (
        <div>

        </div>
    )
}

export default APIFetch