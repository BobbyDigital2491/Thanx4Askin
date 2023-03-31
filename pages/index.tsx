/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
import Link from 'next/link';
import * as React from 'react';
import Seo from '../components/Seo';

export default function Home() {
  return (
      <main className="flex justify-center items-center w-full h-full">
        <Seo title='Pieces 2 Peace Wellness Center LLC' description='dkdkkd' image={"public/logo.jpeg"} url=''/>
        <img
        className=' object-cover mx-auto h-full w-full absolute -z-10'
        src="/logo.jpeg"
        alt=''
      />
        <section className='bg-transparent flex justify-center items-center w-full'>
          
          <div className=' flex flex-col text-3xl justify-center font-bold items-center min-h-screen text-center'>
            <h1 className='text-4xl text-white'>Piece 2 Piece Wellness Center LLC</h1>
            <p className='mt-2 text-xl text-white'>
            We envision our clients developing the skills needed to thrive and grow.
            Our wellness center strives to collaboratively enhance our clients’
            environmental factors and social support systems to create community
            resiliency. We also believe providing quality holistic services can help our
            clients live authentically.
            </p>
            <p className='mt-[1rem] text-lg '>
              <a href='/home'>
                <span className='bg-yellow-400 p-2  text-white/70 rounded font-bold shadow-xl '>
                Enter Site
                </span>
              </a>
            </p>
          </div>
        </section>
      </main>
  );
}