/* eslint-disable @next/next/no-img-element */
import React, { useRef } from 'react'
import FadeIn from 'react-fade-in/lib/FadeIn'
import { motion } from 'framer-motion-3d'
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


const AboutUs = () => {
  return (
    
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
    <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
        <Section>
        <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-6xl dark:text-white">Interviews with real people who make real impact </h1>
        <p className="font-normal text-base leading-6 text-gray-600 dark:text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
        </Section>
        </div>
        <div className="w-full lg:w-8/12">
            <Section><img className="w-full h-full object-fill" src="1st.jpg" alt="A group of People" /></Section>
            
        </div>
        
    </div>

    
</div>

  )
}

export default AboutUs