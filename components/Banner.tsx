import React from 'react'

const Banner = () => {
  return (
    <div>
      <section className="bg-black dark:bg-black">
    <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
        <h2 className="max-w-2xl mx-auto text-3xl font-bold tracking-tight text-white xl:text-3xl dark:text-white">
        Healing the Broken Pieces <span className="text-yellow-400">To Cultivate Peace</span>
        </h2>

        <p className="max-w-4xl mt-6 text-center text-white dark:text-gray-300">
        We envision our clients developing the skills needed to thrive and grow.
        Our wellness center strives to collaboratively enhance our clients’
        environmental factors and social support systems to create community
        resiliency. We also believe providing quality holistic services can help our
        clients live authentically.
        </p>

        
    </div>
</section>
    </div>
  )
}

export default Banner
