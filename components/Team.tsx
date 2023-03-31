/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import THero from './THero'

const Team = () => {
  return (
    <div>
      <section className="bg-black dark:bg-black">
    <div className="container px-6 py-10 mx-auto">
        <THero/>


        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-2">
            <div>
                <a href='/DrAnnaGantt'>
                <img className="object-cover w-full rounded-lg h-96 "
                    src="/anna.jpeg"
                    alt="Dr.Anna Gantt"/>
                    </a>
                <h2 className="mt-4 text-xl font-semibold text-yellow-400 capitalize dark:text-yellow-400">Dr.Anna Gantt</h2>
                <p className="mt-2 text-lg tracking-wider font-semibold text-gray-700 uppercase dark:text-white ">Co - Founder</p>
                <a href='/DrAnnaGantt' className="mt-2  text-center tracking-wider text-sm text-white uppercase hover:text-yellow-400 active:text-white dark:text-gray-500 ">Link to Full Bio</a>
                <p className="mt-2 text-sm tracking-wider  text-gray-700 uppercase dark:text-white ">Dr. Anna Gantt, a licensed clinical mental
                health counselor with over ten years of counseling experience specializing in
                trauma-informed care.</p>
            </div>

            <div>
                <a href='/TriniciaJackson'>
                <img className="object-cover w-full rounded-lg h-96 "
                    src="/tj.jpg"
                    alt="Trinicia Jackson"/>
                    </a>
                <h2 className="mt-4 text-xl font-semibold text-yellow-400 capitalize dark:text-yellow-400">Trinicia Jackson</h2>
                <p className="mt-2 text-lg tracking-wider text-gray-500 uppercase dark:text-white ">Co - Founder</p>
                <a href='/TriniciaJackson' className="mt-2 text-sm text-center tracking-wider text-white uppercase hover:text-yellow-400 active:text-white dark:text-gray-500 ">Link to Full Bio</a>
                <p className="mt-2 text-sm tracking-wider  text-gray-700 uppercase dark:text-white ">Trinicia Jackson is a licensed professional counselor with over five
                    years of counseling experience specializing in marriage, couples, and family
                    needs. They bring diversity in clinical approaches and interventions to individual,
                    couple and family, and group counseling.</p>
            </div>

            
        </div>
    </div>
</section>
    </div>
  )
}

export default Team