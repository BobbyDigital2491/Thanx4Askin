/* eslint-disable @next/next/no-img-element */
import React, { useRef } from 'react'
import Seo from '../components/Seo'
import Footer from '../components/Footer'
import N2 from '../components/N2'
import A1 from '../components/A1'
import { useInView } from 'react-intersection-observer'
import T2 from '../components/T2'
import Banner from '../components/Banner'

function Section({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { ref: refInView, inView } = useInView();

  return (
    <section ref={ref}>
      <div
        className={`transition-opacity ${
          inView ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
        } ease-in-out duration-900 delay-500`}
        ref={refInView}
      >
        {children}
      </div>
    </section>
  );
}


const about = () => {
  return (
    <div className='bg-black'>
        <Seo title='Thankx 4 Askin Podcast' description='About our company.' image='/thx.png' url=''/>
        <N2/>
        <br/><br/><br/><br/><br/>
        
        <A1/>   
        <Banner/>    
        <T2/>
        
        
        <Footer/>
        
    </div>
  )
}

export default about