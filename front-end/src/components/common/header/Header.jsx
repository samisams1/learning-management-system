import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
    const [click, setClick] = useState(false)
  
  return (
  <>
  <header>
    <nav className='flexSB'>
       <ul className='samisam'>
          <li>
             <Link to ='/'>Hom</Link>
          </li>
          <li>
            <Link to ='courses'>All Courses</Link>
          </li>
          <li>
            <Link to ='courses'>About</Link>
          </li>
          <li>
            <Link to ='courses'>Team</Link>
          </li>
          <li>
            <Link to ='courses'>Pricing</Link>
          </li>
          <li>
            <Link to ='/journal'>Journal</Link>
          </li>
        <li>
            <Link to ='contact'>Contact</Link>
        </li>
       </ul>
       <div className='start'>
        <div className='button'>GET CERTIFICATE
        </div>
    <button className='toggle' onClick={()=>setClick(!click)}>
    {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
    </button>
       </div>
    </nav>
  </header>
  </>
  )
}

export default Header
