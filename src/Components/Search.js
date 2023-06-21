import React, { useRef, useContext, useEffect, useState } from 'react'
import axios from 'axios'

const Search = (props) => {
    const inputRef = useRef()
    return (
        <>
            <form onSubmit={props.GreetHandler}>
                <div className='inpt'>
                    <input type='text' ref={inputRef} ></input>
                </div>
                <div className='btn'>
                    <button type='submit'><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </form>

        </>
    )
}

export default Search