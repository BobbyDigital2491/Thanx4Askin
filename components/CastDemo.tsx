/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';

const FadeInOnScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Stop observing once element is in view
          }
        });
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current); // Clean up the observer
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {children}
    </div>
  );
};

const CastDemo = () => {
  return (
    <div>
        
<section >
  <div className="relative px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
    <div className="relative mx-auto max-w-7xl">
    <FadeIn><h1 className="mb-4  text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Podcast Episodes</h1></FadeIn>
   <br/>
      <div className="grid max-w-lg gap-5 mx-auto lg:grid-cols-3 lg:max-w-none">
        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
          <div className="flex-shrink-0">
            <img className="object-fit w-full h-48" src="Junie.jpg" alt=""/>
          </div>
          <div className="flex flex-col justify-between flex-1 p-6 bg-white">
            <div className="flex-1">
              <a href="/JunieEpisode" className="block mt-2">
                <p className="text-xl font-semibold text-black">Special Guest Blind Junie</p>
                <p className="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.</p>
              </a>
            </div>
            <div className="flex items-center mt-6">
              <div className="flex-shrink-0">
                <a href="https://twitter.com/Mike_Andreuzza">
                  <span className="sr-only">Detox Jones</span>
                  <img className="w-10 h-10 rounded-full" src="Detox.jpg" alt=""/>
                </a>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-neutral-600">
                  <a href="https://twitter.com/Mike_Andreuzza" className="hover:underline">Detox Jones</a>
                </p>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time dateTime="2020-03-16"> Mar 16, 2020 </time>
                  <span aria-hidden="true"> · </span>
                  <span> 45 min  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
          <div className="flex-shrink-0">
            <img className="object-cover w-full h-48" src="B2.png" alt=""/>
          </div>
          <div className="flex flex-col justify-between flex-1 p-6 bg-white">
            <div className="flex-1">
              <a href="/BimmyEpisode" className="block mt-2">
                <p className="text-xl font-semibold text-black">We got Bimmy in the House</p>
                <p className="mt-3 text-base text-gray-500">Today, we sat down and had a great conversation with the one and only Bimmy. If you haven&apos;t seen this episode, you have to watch it ASAP!</p>
              </a>
            </div>
            <div className="flex items-center mt-6">
              <div className="flex-shrink-0">
                <a href="https://twitter.com/g_perales">
                  <span className="sr-only">G Vasquez</span>
                  <img className="w-10 h-10 rounded-full object-cover" src="G.jpg" alt=""/>
                </a>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-neutral-600">
                  <a href="#" className="hover:underline"> G Vasquez </a>
                </p>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time dateTime="2020-03-10"> Mar 10, 2020 </time>
                  <span aria-hidden="true"> · </span>
                  <span> 4 min read </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
          <div className="flex-shrink-0">
            <img className="object-cover w-full h-48" src="Mic.jpg" alt=""/>
          </div>
          <div className="flex flex-col justify-between flex-1 p-6 bg-white">
            <div className="flex-1">
              <a href="/MicGeronimoEpisode" className="block mt-2">
                <p className="text-xl font-semibold text-neutral-600">The Legendary Mic Geronimo</p>
                <p className="mt-3 text-base text-gray-500">Mic Geronimo Talks about how he got his record at 18 and that they were the first songs he ever recorded in his life.</p>
              </a>
            </div>
            <div className="flex items-center mt-6">
              <div className="flex-shrink-0">
                <a href="https://twitter.com/wickedlabsHQ">
                  <span className="sr-only">Bug Owt</span>
                  <img className="w-10 h-10 rounded-full" src="Bug.jpg" alt=""/>
                </a>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-neutral-600">
                  <a href="https://twitter.com/wickedlabsHQ" className="hover:underline"> Bug Owt </a>
                </p>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time dateTime="2020-02-12"> Feb 12, 2020 </time>
                  <span aria-hidden="true"> · </span>
                  <span> 11 min read </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default CastDemo
