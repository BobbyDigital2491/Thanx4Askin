import React from 'react'
import Seo from '../components/Seo'
import Nav from '../components/Nav'
import Team from '../components/Team'
import Footer from '../components/Footer'
import TeamInfo from '../components/TeamInfo'
import THero from '../components/THero'

const team = () => {
  return (
    <div className='bg-black'>
      <Seo title='Pieces 2 Peace Wellness Center LLC' description='dkdkkd' image={"public/logo.jpeg"} url=''/>  
      <Nav/>
      <Team/>
      <Footer/>
    </div>
  )
}

export default team
