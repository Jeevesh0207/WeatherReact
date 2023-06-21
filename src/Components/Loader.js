import React from 'react'

function Loader({ Err }) {
  if (Err) {
    return (
      <div className='Loader'>
        <p>Invalid Location</p>
      </div>
    )
  }
  else {
    return (
      <div className='Loader'>
        <p>Please Wait... <br/> I am Fetching Your Data</p>
        <div className='circle'></div>
      </div>
    )
  }
}

export default Loader