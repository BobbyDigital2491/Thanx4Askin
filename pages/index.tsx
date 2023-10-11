/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
import React from 'react'
import Seo from '../components/Seo'
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import Hero2 from '../components/Hero2';
import CTA from '../components/CTA';
import CastDemo from '../components/CastDemo';
import CTA2 from '../components/CTA2';


export default function home() {
  return (
    <div className=' bg-black'>
    <Seo title='Thankx 4 Askin Podcast' description='We paint portraits of black people by interviewing real people who are making real impact in their community.' image='/thx.png' url=''/>
    <Hero2/>
    <br/>
    <CTA/>
    <CTA2/>
    <CastDemo/>
    <Gallery/>
    <Footer/>
    
    
</div>
  );
}