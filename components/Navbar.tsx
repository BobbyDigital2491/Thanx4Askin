/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import FadeIn from 'react-fade-in/lib/FadeIn'
import H2 from './H2'

const Navbar = () => {
  return (
    <div className="relative pt-40 pb-56 h-auto ">
      <FadeIn>
        <video
        className='object-cover h-full w-full absolute -z-10 lg:object-fill md:object-fill sm:object-cover'
        src="https://ipfs.io/ipfs/bafybeidg5pnam2fxhld53zxmdfg2oy5sqxtircdkp7ieesxjrkm23yxhti/Into.mp4"
        controls
        autoPlay
        loop
        muted
      />
      </FadeIn>
    <div className="absolute inset-0 lg:hidden">
    </div>
    
    <header className="absolute inset-x-0 top-0 z-10 py-8 xl:py-12 bg-black">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
            <div className="flex items-center justify-between">
                <div className="flex flex-shrink-0">
                    <a href="/" title="BakerStreet" className="inline-flex ">
                        <img className="w-auto h-28" src="thx.png" width={600} height={800} alt="BakerStreet" />
                    </a>
                </div>

                <H2/>

                <div className="hidden md:flex md:items-center md:space-x-10 lg:ml-28">
                <a href="/about" title="" className="font-sans text-base font-normal transition-all duration-200 rounded text-white focus:outline-none focus:ring-offset-secondary focus:ring-2 focus:ring-offset-1 focus:ring-primary hover:text-yellow-500"> About Us </a>
                    <a href="/episodes" title="" className="font-sans text-base font-normal transition-all duration-200 rounded text-white focus:outline-none focus:ring-offset-secondary focus:ring-2 focus:ring-offset-1 focus:ring-primary  hover:text-yellow-500"> Episodes </a>

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
        
<FadeIn>
<div className="relative flex flex-col items-center justify-center text-center p-8 my-24 md:my-40">
  <p className="uppercase text-white font-bold text-sm mb-1 tracking-widest">Latest Episode • 09</p>
  <h2 className="text-6xl md:text-7xl text-white font-black uppercase leading-none">Og Bimmy in the building</h2>
  <p className="text-white text-lg max-w-4xl leading-snug mb-8 mt-4 mx-auto">Today, we sat down and had a great conversation with the one and only Bimmy. If you haven&apos;t seen this episode, you have to watch it ASAP!</p>
  <a href='/BimmyEpisode'><button className="px-6 py-4 bg-white uppercase font-bold tracking-widest text-black rounded-sm inline-block leading-none">
Watch Episode</button></a>
</div>
</FadeIn>

       
    </div>

    
</div>
  )
}

export default Navbar
