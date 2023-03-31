import React from 'react'
import Nav from '../components/Nav'
import Services from '../components/Services'
import Seo from '../components/Seo'
import Footer from '../components/Footer'
import SHero from '../components/SHero'
import List from '../components/List'

const services = () => {
  return (
    <div className='bg-black'>
        <Seo title='Pieces 2 Peace Wellness Center LLC' description='dkdkkd' image='/logo.jpeg' url=''/>
        <Nav/>
        <SHero/>
        <Services/>
        <br/>
        <List/>
        <Footer/>
    </div>
  )
}

export default services