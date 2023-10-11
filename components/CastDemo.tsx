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
                <p className="text-xl font-semibold text-black">Blind Junie is a blind drug dealer who navigated the notorious Southside Jamaica Queens - Ep. 2</p>
                <p className="mt-3 text-base text-gray-500">Blind Junie is our next guest on the Thanx4askin podcast show.
                Blind Junie is a South Side Jamaica Queens legend in his own right. He sold drugs alongside Fat Cat, Supreme McGriff, and every other big-time drug dealer in the 1980s.
                Junie opens up about his life from his early days as a high school basketball player to his release from incarceration for selling drugs in the early 2000s. 
                </p>
              </a>
            </div>
            <div className="flex items-center mt-6">
              <div className="flex-shrink-0">
                <a href="https://instagram.com/devon.tomlin?igshid=NzZhOTFlYzFmZQ==">
                  <span className="sr-only">Detox Jones</span>
                  <img className="w-10 h-10 rounded-full" src="Detox.jpg" alt=""/>
                </a>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-neutral-600">
                  <a href="https://instagram.com/devon.tomlin?igshid=NzZhOTFlYzFmZQ==" className="hover:underline">Detox Jones</a>
                </p>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time dateTime="2020-03-16"> Feb 24, 2023 </time>
                  <span aria-hidden="true"> · </span>
                  <span> 54:04 mins </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
          <div className="flex-shrink-0">
            <img className="object-cover w-full h-48" src="Detox.jpg" alt=""/>
          </div>
          <div className="flex flex-col justify-between flex-1 p-6 bg-white">
            <div className="flex-1">
              <a href="/BimmyEpisode" className="block mt-2">
                <p className="text-xl font-semibold text-black">Bimmy&apos;s response to Zipwitthedrip + What&apos;s life after being a Supreme Team Drug Dealer?</p>
                <p className="mt-3 text-base text-gray-500">Today we sit down with a Southside Jamaica Queens Legend better known as Bimmy. We all know the stories about how he grew up and who were some of his friends. Well, we get into a lot of those stories as well. We break down his transition from street life into the music industry.</p>
              </a>
            </div>
            <div className="flex items-center mt-6">
              <div className="flex-shrink-0">
                <a href="https://instagram.com/devon.tomlin?igshid=NzZhOTFlYzFmZQ==">
                  <span className="sr-only">Detox Jones</span>
                  <img className="w-10 h-10 rounded-full object-cover" src="Detox.jpg" alt=""/>
                </a>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-neutral-600">
                  <a href="#" className="hover:underline"> Detox Jones </a>
                </p>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time dateTime="2020-03-10"> Sept 9, 2023 </time>
                  <span aria-hidden="true"> · </span>
                  <span> 1:48:41 mins </span>
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
                <p className="text-xl font-semibold text-neutral-600">Mic Geronimo Talks about his rap career, Irv Gotti, Diddy, DMX, Jay-Z, Ja Rule, & entrepreneurship.</p>
                <p className="mt-3 text-base text-gray-500">In this Episode, Mic Geronimo discusses how he was signed to TVT Records, and his relationship with Irv Gotti early in his career. He talks about what it was like recording with DMX, Jay-Z, and Ja Rule. Mic gets into how he turned down the &quot;Can&apos;t Nobody Hold Me Down&quot; beat that Diddy and Mase made a hit record. Mic Geronimo also talks about starting his own locksmith business after being dropped from his label.</p>
              </a>
            </div>
            <div className="flex items-center mt-6">
              <div className="flex-shrink-0">
                <a href="https://instagram.com/devon.tomlin?igshid=NzZhOTFlYzFmZQ==">
                  <span className="sr-only">Detox Jones</span>
                  <img className="w-10 h-10 rounded-full" src="Detox.jpg" alt=""/>
                </a>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-neutral-600">
                  <a href="https://instagram.com/devon.tomlin?igshid=NzZhOTFlYzFmZQ==" className="hover:underline"> Bug Owt </a>
                </p>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time dateTime="2020-02-12"> Mar 10, 2023 </time>
                  <span aria-hidden="true"> · </span>
                  <span> 1:23:49 mins </span>
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
