/* eslint-disable @next/next/no-img-element */
import React from 'react'


const About = () => {
  return (
    <div>
        <section>
  <div className="mx-auto bg-black max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="bg-yellow-400 p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-bold text-black hover:text-white  md:text-3xl">
          Take your mental health seriously
          </h2>

          <p className="hidden text-black hover:text-white sm:mt-4 sm:block">
          Pieces 2 Peace Wellness Center, LLC works with our clients to develop the skills
          they need to thrive and grow. Our goal is to provide quality services that take a
          holistic approach to well-being to help our clients live their best lives. We will
          help you uncover your true potential and lead a life that is worth celebrating..
          </p>

          <div className="mt-4 md:mt-8">
          <p className="hidden text-black hover:text-white sm:mt-4 sm:block">
          By applying therapeutic approaches and techniques, we will explore behavioral and thought
          patterns that may be holding you back from experiencing a more fulfilling and meaningful 
          life. Our goal is to mend the broken pieces so that you can live in peace.
          </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
        <img
          alt="Nurse"
          src="https://depts.washington.edu/mbwc/content/news-img/1039/garvey_shutterstock_1332392543_copy__full.jpg"
          className="h-40 w-full object-cover sm:h-56 md:h-full"
        />

        <img
          alt="Student"
          src="https://theurbannews.com/wp-content/uploads/2022/06/BEAM-black-woman-city.jpg"
          className="h-40 w-full object-cover sm:h-56 md:h-full"
        />
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About