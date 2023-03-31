/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react'

const ABanner = () => {
  return (
    <div>
      <section
  className="overflow-hidden bg-[url(https://www.commonwealthfund.org/sites/default/files/Ep82_Kevin_Simon_Mental_health.png)] bg-cover bg-center bg-no-repeat"
>
  <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="text-center sm:text-left">
      <h2 className="text-2xl font-bold text-yellow-400 sm:text-3xl md:text-5xl">
        Our Services
      </h2>

     

      <div className="mt-4 sm:mt-8">
        <a
          href="/services"
          className="inline-block rounded-full bg-yellow-400 px-12 py-3 text-sm font-medium text-white transition hover:bg-black focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default ABanner
