import React from 'react'
import Heading from '../../common/heading/Heading'
import './hero.css'
const Hero=()=> {
  return (
    <>
    <section className='hero'>
        <div className='container'>
           <div className='row'>
           <Heading subtitle='WELCOME TO ADDIS ABABA' title='Best Online Education Expertise' />
           <p>this platform is best online learning managment system </p>
           <div className='button'>
              <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
           </div>
        </div>
    </section>
    <div className='margin'></div>
    </>
  )
}

export default Hero
