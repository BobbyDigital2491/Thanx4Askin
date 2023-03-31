/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Info = () => {
  return (
    <div>
      <section>
  <div
    className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
  >
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div
        className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
      >
        <img
          alt="Party"
          src="https://www.nami.org/getmedia/27ef08d3-0ab0-432f-940b-0a5c434625d0/stigma-black-community-blog?width=450&height=300"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl text-yellow-400 font-bold sm:text-4xl">Our</h2>
        <h2 className="text-3xl text-white font-bold sm:text-4xl">Vision</h2>


        <p className="mt-4 text-white">
        We envision our clients developing the skills needed to thrive and grow.
        Our wellness center strives to collaboratively enhance our clients’
        environmental factors and social support systems to create community
        resiliency. We also believe providing quality holistic services can help our
        clients live authentically.
        </p>

        
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Info
