/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import FadeIn from 'react-fade-in/lib/FadeIn'
import H2 from './H2'

const N2 = () => {
  return (
    <div className=''>
    <header className="absolute inset-x-0 top-0 z-10 py-0 xl:py-12 bg-black">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
            <div className="flex items-center justify-between">
                <div className="flex flex-shrink-0">
                    <a href="/" title="Thankx4Askin" className="inline-flex ">
                        <img className="w-auto h-28" src="thx.png" width={600} height={800} alt="Logo" />
                    </a>
                </div>

                <H2/>

                <div className="hidden md:flex md:items-center md:space-x-10 lg:ml-28">
                <a href="/about" title="" className="font-sans text-base font-normal transition-all duration-200 rounded text-white focus:outline-none focus:ring-offset-secondary focus:ring-2 focus:ring-offset-1 focus:ring-primary hover:text-yellow-500"> About Us </a>
                    <a href="/episodes" title="" className="font-sans text-base font-normal transition-all duration-200 rounded text-white focus:outline-none focus:ring-offset-secondary focus:ring-2 focus:ring-offset-1 focus:ring-primary  hover:text-yellow-500"> Episodes </a>

                    <a
                        href="https://form.jotform.com/232798407887173"
                        title=""
                        className="
                            inline-flex
                            items-center
                            justify-center
                            px-5
                            py-2
                            font-sans
                            text-base
                            font-normal
                            leading-7
                            transition-all
                            duration-200
                            border-2
                            rounded-full
                            text-white
                            border-primary
                            focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary
                            hover:bg-white hover:text-black
                            focus:ring-offset-secondary
                        "
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    </header>

    <div >
    </div>

    
</div>
  )
}

export default N2