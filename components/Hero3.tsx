/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useState } from 'react'
import VideoModal from './VideoModal'
import FadeIn from 'react-fade-in/lib/FadeIn'
import H2 from './H2'

const Hero3: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prevState) => !prevState);
    };
  return (
    <div className="relative pt-40 pb-56 bg-black">
    <div className="absolute inset-0 lg:hidden">
        <img className="object-cover object-left mx-auto opacity-50" src="1st.jpg" alt="" />
    </div>

    <header className="absolute inset-x-0 top-0 z-10 py-8 xl:py-12">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
            <div className="flex items-center justify-between">
                <div className="flex flex-shrink-0">
                    <a href="#" title="Thanx4Askin" className="inline-flex rounded-md ">
                        <img className="w-auto h-28" src="thx.png" width={600} height={800} alt="Thanx4Askin" />
                    </a>
                </div>

                <H2/>

                <div className="hidden md:flex md:items-center md:space-x-10 lg:ml-28" onClick={toggleMenu}>
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

    <div className="relative">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
            <div className="grid items-center grid-cols-1 lg:grid-cols-2">
                <div>
                   <FadeIn> <h1 className="font-sans text-base font-normal tracking-tight text-white text-opacity-70">Welcome to the Thanx4Askin Podcast</h1></FadeIn>
                    <FadeIn><p className="mt-6 tracking-tighter text-white">
                        <span className="font-serif italic font-normal text-8xl text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 to-yellow-900">THANX </span><br />
                        <span className="font-serif italic font-normal text-8xl text-red-600">4 <span className='text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 to-yellow-900'>ASKIN</span></span>
                    </p>
                    </FadeIn>
                    <FadeIn><p className="mt-12 font-sans text-base font-normal leading-7 text-white text-opacity-70">We paint portraits of black people by interviewing real people who are making real impact in their community.</p></FadeIn>
                </div>

                <div className="hidden lg:block">
                   <FadeIn delay={200}><img className="w-full mx-auto" src="1st.jpg" alt="" /></FadeIn> 
                </div>
            </div>
        </div>
    </div>

    <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="relative py-8 bg-white">
            <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
                <div className="md:flex md:items-center md:justify-between">
                    <p className="font-sans text-xl font-extrabold tracking-tight text-black  " >New Episodes every week</p>

                    <div className="flex items-center justify-start mt-4 space-x-3 md:mt-0 md:justify-end sm:space-x-4">
                        <a
                            href="/episodes"
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
                                border-2 border-transparent
                                rounded-full
                                sm:leading-8
                                bg-black
                                text-white
                                sm:text-lg
                                hover:bg-opacity-90
                                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary focus:ring-offset-primary
                            "
                            role="button"
                        >
                            Episodes
                        </a>

                        <VideoModal/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Hero3
