import React from 'react'

const AttractionDisplay=({name, address, times, website}) => {
  return (
    <div>{name} {address} {times} <a href={website} style={{color:"#00FFFF"}} className="text-blue underline">Click here to visit site</a></div>
  )
}

export default AttractionDisplay