import React from 'react'
import Nav from '../components/Nav'
import FAQ from '../components/FAQ'
import Seo from '../components/Seo'
import Footer from '../components/Footer'
import FHero from '../components/FHero'

const faq = () => {
  return (
    <div className='bg-black'>
      <Seo title='Pieces 2 Peace Wellness Center LLC' description='dkdkkd' image={"public/logo.jpeg"} url=''/>
      <Nav/>
      <FHero/>
      <FAQ/>

      <Footer/>
    </div>
  )
}

export default faq
