/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useRef } from 'react'
import { useInView } from 'react-intersection-observer';

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

const A1 = () => {
  return (
    <div className="container my-8 mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
  <section className="mb-32">
  <h1 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">About Us</h1>
    <img src="1st.jpg"
      className="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20" alt="image" />
  
   

   
    

    <p className=' leading-6 text-white align-center'>
    Welcome to the Thanx4askin podcast, where real conversations thrive in the heart of the 
    barbershop. We're a tight-knit crew, a symphony of diverse voices, and our mission is simple:
    to bring you unfiltered, engaging discussions that explore sports, hip-hop, business, comedy,
    and even the mysteries of crime. But this podcast is more than just words. It's a celebration 
    of black culture, a canvas for creating vivid portraits of black excellence that soar beyond 
    the ordinary. Now, let's introduce you to the maestros behind the mic, the architects of our 
    lively banter. Bug Owt is the pulse of the show. A barber and movie producer, his connections 
    and knowledge of the entertainment industry makes him invaluable to our team. We called him 
    "Mr. Get The Job Done." He's the guy crossing the Tees and dotting the I's. Bug Owt brings 
    passion in every way possible to this show. Also a master barber and entrepreneur is G Vasquez. 
    G Vasquez is the cerebral one. He has never lost a debate and he doesn't plan to lose one anytime
    soon. He is a true gentleman by any standard. Prime is the social media/Photography guru. He's the
    CEO of Prime Focus which provides photography and documents fitness gurus and basketball players 
    in their journey to greatness.He is a master content engineer and is pivotal keeping the things 
    running like a well oiled machine. Ally is a woman of many talents and perspectives. She is a 
    social media influencer of significant impact in her own right. She takes every opportunity that 
    is given to her and turns it into gold. Ally's infectious personality is impossible to resist and 
    will leave you coming back for more every day. Detox Jones is the host and backbone of the podcast. 
    The master editor and business expert. It is to bet against this team to do nothing but win.

    </p>
    
  </section>
  
</div>
  )
}

export default A1