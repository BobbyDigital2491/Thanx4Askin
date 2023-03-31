/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Seo from '../components/Seo'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/About'
import Footer from '../components/Footer'
import Review from '../components/Review'
import Banner from '../components/Banner'
import Info from '../components/Info'
import Proof from '../components/Proof'

const home = () => {
  return (
    <div className=' bg-black'>
        <Seo title='Pieces 2 Peace Wellness Center LLC' description='dkdkkd' image='/logo.jpeg' url=''/>
        
      
        <Nav/>
        <br/>
        <Hero/>
        <br/><br/><br/><br/>
        <Banner/>
        
        <About/>
        <Proof/>
        <Info/>
        
        <Review/>
        <Footer/>
        
    </div>
  )
}

export default home