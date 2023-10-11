/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const Hero = () => {
  return (
   
<div className="relative pt-48 pb-12 bg-black xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56">
    <header className="absolute inset-x-0 top-0 z-10 py-8 xl:py-12">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
            <div className="flex items-center justify-between">
                <div className="flex flex-shrink-0">
                    <a href="/" title="Thanks4askin Podcast" >
                        <img width={180} height={130} src="/thx.png" alt="Thankx4askin Podcast" />
                    </a>
                </div>

                <div className="md:hidden">
                    <button type="button" className="p-2 -m-2 transition-all duration-200 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                <div className="hidden md:flex md:items-center md:space-x-10 lg:ml-28">
                    <a href="/about" title="About Us" className="font-sans text-base font-normal transition-all duration-200 rounded text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"> About </a>

                    <a href="/podcasts" title="Episodes" className="font-sans text-base font-normal transition-all duration-200 rounded text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary">Podcast </a>

                    <a href="/contact" title="Contact Us" className="font-sans text-base font-normal transition-all duration-200 rounded text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"> Contact Us </a>
                </div>
            </div>
        </div>
    </header>

    <div className="absolute inset-0">
        <img className=" overflow-y-scroll object-cover mx-auto w-full h-full" src="Banner.jpg" alt="" />
    </div>

    <div className="relative">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
            <div className="max-w-xl mx-auto text-center">
               
                <p className="mt-5 font-sans text-base font-normal text-white text-opacity-70">
                    The Thankx4askin podcast covers a range of topics including sports, hip-hop, business, comedy, and crime. 
                    Our goal is to showcase diverse, honest, and nuanced conversations that celebrate black culture. 
                    Thus, creating beautiful portraits of black people that raise the bar.</p>
                <div className="flex items-center justify-center mt-8 space-x-3 sm:space-x-4">
                    <a
                        href="/about"
                        title="About Us"
                        className="
                            inline-flex
                            items-center
                            justify-center
                            px-5
                            py-2
                            font-sans
                            text-base
                            font-semibold
                            leading-6
                            transition-all
                            duration-200
                            border-2 border-transparent
                            rounded-full
                            sm:leading-8
                            bg-white
                            sm:text-lg
                            text-black
                            hover:bg-opacity-90
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary
                        "
                        role="button"
                    >
                        About Us
                    </a>

                    <a
                        href="#"
                        title=""
                        className="
                            inline-flex
                            items-center
                            justify-center
                            px-5
                            py-2
                            font-sans
                            text-base
                            font-semibold
                            leading-6
                            transition-all
                            duration-200
                            bg-transparent
                            border-2
                            rounded-full
                            sm:leading-8
                            text-white
                            border-primary
                            hover:bg-white
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
                            hover:text-black
                            sm:text-lg
                            focus:ring-offset-secondary
                        "
                        role="button"
                    >
                        <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.0416 4.9192C7.37507 4.51928 6.5271 4.99939 6.5271 5.77669L6.5271 18.2232C6.5271 19.0005 7.37507 19.4806 8.0416 19.0807L18.4137 12.8574C19.061 12.469 19.061 11.5308 18.4137 11.1424L8.0416 4.9192Z" />
                        </svg>
                        Watch trailer
                    </a>
                </div>
            </div>
        </div>
    </div>

    <div className="absolute hidden transform -translate-x-1/2 lg:bottom-8 xl:bottom-12 left-1/2 lg:block">
        <a href="#Gallery" title="" className="inline-flex items-center justify-center w-12 h-12 transition-all duration-200 rounded-full text-white hover:bg-white hover:text-black bg-black focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary" role="button">
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
        </a>
    </div>
</div>




  

  )
}

export default Hero