import React from 'react'

const Heading=({subtitle,title})=> {
  return (
    <>
    <div id='heading'>
        <h3>{subtitle}</h3>   
        <h>{title}</h>
    </div>
    </>
  )
}

export default Heading
