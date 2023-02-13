/* eslint-disable react/jsx-no-target-blank */
import React from 'react'

const LocationDisplay=({name,address,times,website, type, desc, driveThrough}) => {
  var originAddress = "902 W Grove Ave, Mesa, AZ 85210"
  return (
    <div className='flex flex-row flex-wrap gap-5 items-center justify-start border-white border-2 border-solid rounded-lg p-2 px-10 my-5 mx-10 bg-[rgba(26,54,82,0.68)] shadow-2xl shadow-cyan-700 sm:gap-10 '>
      <div>
        <h1 className='text-2xl'>{name}</h1>
        <h2 className='text-xl'>{type} type: {desc}</h2>
        {driveThrough!=null?(<h3 className='text-l'>Drive Through: {driveThrough}</h3>):(<span></span>)}
        <br/>
        <a href={"https://www.google.com/maps/dir/?api=1&origin="+originAddress+"&destination="+address} style={{color: "#00FFFF"}} className="text-blue underline text-base" title='Click to get directions' target="_blank">{address}</a>
        <br/>  
        <a href={website} style={{color: "#00FFFF"}} className="text-blue underline text-lg" target="_blank">Click here to visit site</a>
      </div>
      <div>
        <ul className='text-lg'>{times.map((time,index) => {
          return (<li key={index}>{time.day}:&nbsp;{time.openTime}</li>)
        })}</ul>
      </div>
    </div>
  )
}

export default LocationDisplay;