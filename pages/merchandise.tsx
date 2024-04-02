import React from 'react'
import Footer from '../components/Footer'
import Seo from '../components/Seo'
import N2 from '../components/N2'
import Products from '../components/Products'

const merchandise = () => {
  return (
  <div className=' bg-black'>
    <Seo title='Thankx 4 Askin Podcast' description='We paint portraits of black people by interviewing real people who are making real impact in their community.' image='/thx.png' url=''/>
    <N2/>
    <Products/>
    <Footer/>        
</div>
  )
}

export default merchandise