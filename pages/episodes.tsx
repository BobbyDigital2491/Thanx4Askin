import React from 'react'
import Seo from '../components/Seo'
import Navbar from '../components/Navbar'
import Podcast from '../components/Podcast'
import Footer from '../components/Footer'
import P1 from '../components/P1'

const episodes = () => {
  return (
    <div>
        <Seo title='Thankx 4 Askin Podcast ' description='We paint portraits of black people by interviewing real people who are making real impact in their community. Check out our episodes!!!' image='/thx.png' url=''/>
        <Navbar/>
        <br/><br/><br/><br/><br/>
        <P1/>
        <Footer/>
    </div>
  )
}

export default episodes