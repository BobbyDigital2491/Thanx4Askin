import React from 'react'
import Seo from '../components/Seo'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import AHero from '../components/AHero'
import AInfo from '../components/AInfo'
import Proof from '../components/Proof'
import ABanner from '../components/ABanner'

const about = () => {
  return (
    <div className='bg-black'>
        <Seo title='Pieces 2 Peace Wellness Center LLC' description='About our company' image='/logo.jpeg' url=''/>
        <Nav/>
        <AHero/>
        
        
        <ABanner/>

        <Footer/>
    </div>
  )
}

export default about