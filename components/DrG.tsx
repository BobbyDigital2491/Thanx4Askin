/* eslint-disable @next/next/no-img-element */
import React from 'react'

const DrG = () => {
  return (
    <div className='bg-black'>
<main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-black dark:bg-black">
  <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
      <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header className="mb-4 lg:mb-6 not-format">
              <address className="flex items-center mb-6 not-italic">
                  <div className="inline-flex items-center mr-3 text-sm text-white dark:text-white">
                      <img className="mr-4 w-16 h-16 object-cover rounded-full" src="/anna.jpeg" alt="Jese Leos"/>
                      <div>
                          <a href="#" rel="author" className="text-3xl font-bold text-white dark:text-white"><span className='text-yellow-400'>Dr. Anna</span> Gantt</a>
                          <p className="text-base font-light text-gray-500 dark:text-gray-400">Co - Founder</p>
                      </div>
                  </div>
              </address>
          </header>
          
          <img src="/anna.jpeg" alt="Trinicia Jackson" width={500} className='mx-auto'/>
          <br/>
          <p className='text-white text-lg'>Dr. Anna Gantt is a Licensed Professional Counselor-Supervisor (LPC/S) with the state
              of South Carolina. She received her Bachelor of Science from the University of South
              Carolina-Upstate in Experimental Psychology with a cognate in Criminal Justice. Dr.
              Gantt also holds her Master of Arts from South University-Columbia Campus in Clinical
              Mental Health Counseling. With the passion and drive to become the best helping
              professional, she continued her studies of clinical counseling at Mississippi College and
              earned her Doctor of Professional Counseling degree with a specialty in trauma-focused
              treatment for adults with PTSD or related disorders.</p>
                <br/>
          <p className='text-white text-lg'>All clients who participate in therapy with Dr. Gantt will gain the skills and tools they
              need to increase their overall well-being. Equipped with over ten years of clinical
              experience and knowledge, she has worked with individuals aged 3 to over 60 who
              needed assistance with various mental health conditions. In addition, she utilizes
              multiple therapeutic methods, which may include some of the following: Dialectal
              Behavioral Therapy, Cognitive-Behavioral Therapy, Cognitive-Behavioral Therapy-
              Couples and Marriage,  Family-Systems Therapy, Cognitive Processing Therapy,
              Acceptance Commitment Therapy, Attachment -Focused Therapy, Solution-Focused
              Therapy, Parenting Skills Training, Narrative Therapy, and Internal Family Systems
              treatment.</p>
               
                
            
      </article>
  </div>
</main>






    </div>
  )
}

export default DrG
