/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Details = () => {
  return (
    <div className=' bg-black'>
        <section className="bg-white dark:bg-black">
        <div className="container px-6 py-10 mx-auto">
        <div className="lg:-mx-6 lg:flex lg:items-center">
            <img className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]" src="Bimmy.jpg" alt=""/>

            <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
                <p className="text-5xl font-semibold text-red-500 ">“</p>

                <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
                    Help us improve our productivity
                </h1>

                <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400 ">
                    “ Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
                    tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
                    aperiam dolorum, obcaecati corrupti aspernatur a. ”
                </p>

                <h3 className="mt-6 text-lg font-medium text-red-500">Bimmy Antney</h3>
                <p className="text-gray-600 dark:text-gray-300">New York&apos;s “Godfather” of Hip Hop</p>

                
            </div>
        </div>
    </div>
</section>
        
        </div>
  )
}

export default Details