/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react'

const AInfo = () => {
  return (
    <div>
      <section>
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
    <div className="max-w-3xl">
      <h2 className="text-3xl text-yellow-400 font-bold sm:text-4xl">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod alias
        doloribus impedit.
      </h2>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
        <img
          alt="Party"
          src="https://540westmain.org/wp-content/uploads/2021/06/iStock-1262697540-1024x683.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-16">
        <article className="space-y-4 text-gray-600">
          <p className=' text-white'>
          Pieces 2 Peace Wellness Center
          provides treatment services to children and adolescents aged 6 to 17 and adults
          aged 18 and over. Our clients experience warmth, growth, empowerment,
          confidentiality, accountability, new knowledge, and an increase in resiliency by
          the end of their counseling service. 
          </p>

          <p className=' text-white'>
          Additionally, our clients can rest assured that
          their Therapist is well experience with their presenting needs and multiculturally
          sensitive. Please request an appointment with one of our therapists to receive a
          consultation on how we can help you!
          </p>
        </article>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}

export default AInfo
