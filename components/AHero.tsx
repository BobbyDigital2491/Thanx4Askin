import React from 'react'
import Proof from './Proof'
import AInfo from './AInfo'

const AHero = () => {
  return (
    <div>
      <section className="bg-black">
  <div
    className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
  >
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl text-yellow-400 font-extrabold sm:text-5xl">
        About Our &nbsp;
        <strong className="font-extrabold text-white sm:block">
          Organization
        </strong>
      </h1>

      <p className="mt-4 text-white sm:text-xl sm:leading-relaxed">
      We envision our clients developing the skills needed to thrive and grow.
      Our wellness center strives to collaboratively enhance our clients’
      environmental factors and social support systems to create community
      resiliency. We also believe providing quality holistic services can help our
      clients live authentically.
      </p>
      
     
    
    </div>
  </div>
</section>
<AInfo/>
    </div>
  )
}

export default AHero
