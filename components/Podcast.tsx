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

const Podcast = () => {
  return (
    <div className='bg-black'>  
<section>
  <div className="relative px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
    <div className="relative mx-auto max-w-7xl">
    <FadeIn>
      <h1 className="mb-4  text-center text-4xl font-extrabold leading-none tracking-tight text-black md:text-5xl lg:text-6xl dark:text-white">All Episodes</h1>
      </FadeIn>
    <br/>

    {/* Item 1 */}
      <div className="grid max-w-lg gap-5 mx-auto lg:grid-cols-3 lg:max-w-none">
        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
          <div className="flex-shrink-0">
            <img className="object-cover w-full h-48" src="1st.jpg" alt=""/>
          </div>
          <div className="flex flex-col justify-between flex-1 p-6 bg-white">
            <div className="flex-1">
              <a href="/SmileyEpisode" className="block mt-2">
                <p className="text-xl font-semibold text-black">Smiley😁 : Former G-Unit soldier spent 16 years in prison for a hitman plot on a NYPD Cop.</p>
                <p className="mt-3 text-base text-gray-500">Today, we sat down with The Million Dollar Smile 😁. He takes us on a journey of what it was like growing up with a father who was addicted to heroin and living in a household with over 14 foster care brothers and sisters. Smile&apos;s childhood wasn&apos;t an easy one. </p>
              </a>
            </div>
            <div className="flex items-center mt-6">
              <div className="flex-shrink-0">
                <a href="https://instagram.com/devon.tomlin?igshid=NzZhOTFlYzFmZQ==">
                  <span className="sr-only">Detox Jones</span>
                  <img className="w-10 h-10 rounded-full" src="/Detox.jpg" alt="Detox Jones"/>
                </a>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-neutral-600">
                  <a href="https://instagram.com/devon.tomlin?igshid=NzZhOTFlYzFmZQ==" className="hover:underline">Detox Jones</a>
                </p>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time dateTime="2020-03-16"> Oct 2, 2023 </time>
                  <span aria-hidden="true"> · </span>
                  <span> 1:44:13 mins  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      {/* Item 2 */}
        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
          <div className="flex-shrink-0">
            <img className="object-cover w-full h-48" src="P2.png" alt=""/>
          </div>
          <div className="flex flex-col justify-between flex-1 p-6 bg-white">
            <div className="flex-1">
              <a href="/P2Episode" className="block mt-2">
                <p className="text-xl font-semibold text-black">Defying Expectations: Supreme Mcgriff Jr&apos;s Journey to Living Up to His Dad&apos;s Legacy</p>
                <p className="mt-3 text-base text-gray-500">Supreme Mcgriff Jr., better known as P2, sits down with us and leaves nothing off limits regarding his life. We get into his upbringing and what it was like as the child of an infamous drug dealer.</p>
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
                  <a href="https://instagram.com/devon.tomlin?igshid=NzZhOTFlYzFmZQ==" className="hover:underline"> Detox Jones </a>
                </p>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time dateTime="2020-03-10"> Sept 22, 2023 </time>
                  <span aria-hidden="true"> · </span>
                  <span> 58:54 mins  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Item 3 */}
        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
          <div className="flex-shrink-0">
            <img className="object-cover w-full h-48" src="B2.png" alt=""/>
          </div>
          <div className="flex flex-col justify-between flex-1 p-6 bg-white">
            <div className="flex-1">
              <a href="/BimmyEpisode" className="block mt-2">
                <p className="text-xl font-semibold text-black">Bimmy&apos;s response to Zipwitthedrip + What&apos;s life after being a Supreme Team Drug Dealer?</p>
                <p className="mt-3 text-base text-gray-500">Today we sit down with a Southside Jamaica Queens Legend better known as Bimmy. We all know the stories about how he grew up and who were some of his friends. Well, we get into a lot of those stories as well. We break down his transition from street life into the music industry. </p>
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
                  <a href="https://instagram.com/devon.tomlin?igshid=NzZhOTFlYzFmZQ==" className="hover:underline"> Detox Jones </a>
                </p>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time dateTime="2020-03-10"> Sept 9, 2023 </time>
                  <span aria-hidden="true"> · </span>
                  <span> 1:48:41 mins  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Item 4 */}
        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
          <div className="flex-shrink-0">
            <img className="object-cover w-full h-48" src="YG.png" alt=""/>
          </div>
          <div className="flex flex-col justify-between flex-1 p-6 bg-white">
            <div className="flex-1">
              <a href="/YGEpisode" className="block mt-2">
                <p className="text-xl font-semibold text-neutral-600">YP DA YG opens up about going to jail and the top 5 rappers of all time</p>
                <p className="mt-3 text-base text-gray-500">Today we sat down with @ypdayg115 to talk about how he got into trouble early in his life with the law. He spoke on how his first jail stint was because of a crime he feels he didn&apos;t commit. His second time was due to his loyalty to a friend.</p>
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
                  <a href="https://instagram.com/devon.tomlin?igshid=NzZhOTFlYzFmZQ==" className="hover:underline"> Detox Jones </a>
                </p>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time dateTime="2020-02-12"> Sept 5, 2023 </time>
                  <span aria-hidden="true"> · </span>
                  <span> 1:01:56 mins </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Item 5 */}
        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
          <div className="flex-shrink-0">
            <img className=" object-cover w-full h-48" src="Toya.png" alt=""/>
          </div>
          <div className="flex flex-col justify-between flex-1 p-6 bg-white">
            <div className="flex-1">
              <a href="/ToyaEpisode" className="block mt-2">
                <p className="text-xl font-semibold text-neutral-600">The Economic and Political episode: Latoya Benjamin talks black economics & running for office</p>
                <p className="mt-3 text-base text-gray-500">Latoya Benjamin joins us on the couch to talk about all things politics and black economics. We start with economics and how certain practices affect our community on a whole as black people. Latoya talks about what got her so intrigued with understanding urban policy and economics.</p>
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
                  <a href="https://instagram.com/devon.tomlin?igshid=NzZhOTFlYzFmZQ==" className="hover:underline"> Detox Jones </a>
                </p>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time dateTime="2020-02-12"> Aug 25, 2023 </time>
                  <span aria-hidden="true"> · </span>
                  <span> 1:04:04 mins </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Item 6 */}
        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
          <div className="flex-shrink-0">
            <img className="object-cover w-full h-48" src="Sherifa.png" alt=""/>
          </div>
          <div className="flex flex-col justify-between flex-1 p-6 bg-white">
            <div className="flex-1">
              <a href="/SherifaEpisode" className="block mt-2">
                <p className="text-xl font-semibold text-neutral-600">The Black n Ugly Episode: Sherifa tells us how to build a clothing brand from scratch.</p>
                <p className="mt-3 text-base text-gray-500">In this episode, Black-N-Ugly owner Sherifa talks about how she started her clothing company. She takes us through the highs and lows of what it takes to create a successful clothing company. She just recently worked with Steve Madden, and won the Harlem entrepreneurship award. You can find her at numerous pop up shop markets throughout New York City and then some. </p>
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
                  <a href="https://instagram.com/devon.tomlin?igshid=NzZhOTFlYzFmZQ==" className="hover:underline"> Detox Jones </a>
                </p>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time dateTime="2020-02-12"> Aug 14, 2023 </time>
                  <span aria-hidden="true"> · </span>
                  <span> 1:10:18 mins </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        

        {/* Item 7 */}
        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
          <div className="flex-shrink-0">
            <img className="object-cover w-full h-48" src="OA.png" alt=""/>
          </div>
          <div className="flex flex-col justify-between flex-1 p-6 bg-white">
            <div className="flex-1">
              <a href="/ShotByOAEpisode" className="block mt-2">
                <p className="text-xl font-semibold text-neutral-600">OA of Hazard Lights talks Drake & Soulja boy inspiring him 2 rap and making songs with Joey Badass</p>
                <p className="mt-3 text-base text-gray-500">@ShotByOA sits down on the couch with us at the barbershop to talk all things music and life. we get into his platform Hazard Lights, his rap career and what&apos;s his biggest inspirations in music.
                We discuss Uber successful Hazard Lights YouTube channel. We discuss the origins on why and how it started. The pros and cons of what comes with the success of running a channel of this magnitude.</p>
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
                  <a href="https://instagram.com/devon.tomlin?igshid=NzZhOTFlYzFmZQ==" className="hover:underline"> Detox Jones </a>
                </p>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time dateTime="2020-02-12"> Jul 28, 2023 </time>
                  <span aria-hidden="true"> · </span>
                  <span> 35:06 mins </span>
                </div>
              </div>
            </div>
           </div>
        </div>

        {/* Item 8 */}
        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
          <div className="flex-shrink-0">
            <img className="object-cover w-full h-48" src="T2.png" alt=""/>
          </div>
          <div className="flex flex-col justify-between flex-1 p-6 bg-white">
            <div className="flex-1">
              <a href="/ChrisTeelEpisode" className="block mt-2">
                <p className="text-xl font-semibold text-neutral-600">Chris Teel became an educator and non profit philanthropist despite having a felony under his belt</p>
                <p className="mt-3 text-base text-gray-500">Chris Teel was an early childhood educator and a non-profit philanthropist. Running several initiatives, one being Movies In The Park. As a child growing up, Teel experienced what he calls the good kid, mad city syndrome many black kids live in urban cities. Having 2 uncles suffering from drug addiction in his home, it was no doubt very challenging at times.</p>
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
                  <a href="https://instagram.com/devon.tomlin?igshid=NzZhOTFlYzFmZQ==" className="hover:underline"> Detox Jones </a>
                </p>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time dateTime="2020-02-12"> Jul 10, 2023 </time>
                  <span aria-hidden="true"> · </span>
                  <span> 1:02:12 mins </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Item 9 */}
        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
          <div className="flex-shrink-0">
            <img className="object-cover w-full h-48" src="Raquel.png" alt=""/>
          </div>
          <div className="flex flex-col justify-between flex-1 p-6 bg-white">
            <div className="flex-1">
              <a href="/RaquelEllisEpisode" className="block mt-2">
                <p className="text-xl font-semibold text-neutral-600">Racquel Ellis Is A New York School Teacher Who Defied The Odds Of Being A Teen Mom At The Age Of 14</p>
                <p className="mt-3 text-base text-gray-500">Racquel Ellis comes into the barbershop to talk about some of the perils she went through to overcome the odds. Racquel talks about overcoming some serious setbacks starting as early as high school. At the start of her high school experience, she became pregnant, unexpectedly. Now, faced with the stigma and hardships of being a teen mom. This episode breaks down how this wouldn&apos;t stop her in the slightest. </p>
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
                  <a href="https://instagram.com/devon.tomlin?igshid=NzZhOTFlYzFmZQ==" className="hover:underline"> Detox Jones </a>
                </p>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time dateTime="2020-02-12"> Jun 30, 2023 </time>
                  <span aria-hidden="true"> · </span>
                  <span> 51:18 mins </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Item 10 */}
        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
          <div className="flex-shrink-0">
            <img className="object-cover w-full h-48" src="OGJus.png" alt=""/>
          </div>
          <div className="flex flex-col justify-between flex-1 p-6 bg-white">
            <div className="flex-1">
              <a href="/OGJusEpisode" className="block mt-2">
                <p className="text-xl font-semibold text-neutral-600">OG Jus was a drug dealer who sold drugs with Fat Cat Nichols, and The Supreme Team.</p>
                <p className="mt-3 text-base text-gray-500">In this episode, we have OG Jus sit down on the couch in the barbershop to talk about his life and times as a drug dealer.
                OG Jus was a drug dealer in Queens who was Fat Cat Nichols during the 1970s and 1980s. Jus talks about his early start into street life during the 70s. He later elaborates
                 on how he generated roughly $50,000-$100,000 a week in sales from selling drugs at the height of his career. </p>
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
                  <a href="https://instagram.com/devon.tomlin?igshid=NzZhOTFlYzFmZQ==" className="hover:underline"> Detox Jones </a>
                </p>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time dateTime="2020-02-12"> Jun 11, 2023 </time>
                  <span aria-hidden="true"> · </span>
                  <span> 38:22 mins </span>
                </div>
              </div>
            </div>
          </div>
        </div>

         {/* Item 11 */}
         <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
          <div className="flex-shrink-0">
            <img className="object-cover w-full h-48" src="Banner.jpg" alt=""/>
          </div>
          <div className="flex flex-col justify-between flex-1 p-6 bg-white">
            <div className="flex-1">
              <a href="/6ambuEpisode" className="block mt-2">
                <p className="text-xl font-semibold text-neutral-600">6ambu: 6lunt 6rothers (Bambu Starr and Fredro Starr)</p>
                <p className="mt-3 text-base text-gray-500">In this episode of Thanx4askin, we sit down with the brother of Fredro Starr, 6ambu Starr (Bambu), and discuss family, rap, and all things in between.
                6ambu opens up about what it was like growing up with his brother Fredro Starr and what it was like during Onyx&apos;s meteoric rise as a rap star.</p>
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
                  <a href="https://instagram.com/devon.tomlin?igshid=NzZhOTFlYzFmZQ==" className="hover:underline"> Detox Jones </a>
                </p>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time dateTime="2020-02-12"> Jun 9, 2023 </time>
                  <span aria-hidden="true"> · </span>
                  <span> 33:19 mins </span>
                </div>
              </div>
            </div>
          </div>
        </div>

         {/* Item 12 */}
         <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
          <div className="flex-shrink-0">
            <img className="object-cover w-full h-48" src="CoachD.png" alt=""/>
          </div>
          <div className="flex flex-col justify-between flex-1 p-6 bg-white">
            <div className="flex-1">
              <a href="/CoachDEpisode" className="block mt-2">
                <p className="text-xl font-semibold text-neutral-600">Coach Dee of Code 31 Media: &quot;Basketball was Life, now it&apos;s media&quot;</p>
                <p className="mt-3 text-base text-gray-500">Coach D talks about how her origins start with her wanting to be just like her brother Mark Ellison. She would follow her brother everywhere. It began with playing baseball and then it eventually transitioned to basketball.     
                As a young basketball athlete, Coach D would shine in this role. Riding this gift all the way to Mercy College. Coach D persevered to become one of the highest-scoring players in the college&apos; history.</p>
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
                  <a href="https://instagram.com/devon.tomlin?igshid=NzZhOTFlYzFmZQ==" className="hover:underline"> Detox Jones </a>
                </p>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time dateTime="2020-02-12"> May 28, 2023 </time>
                  <span aria-hidden="true"> · </span>
                  <span> 37:53 mins </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Item 13 */}
        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
          <div className="flex-shrink-0">
            <img className="object-cover w-full h-48" src="BaisleyLA.png" alt=""/>
          </div>
          <div className="flex flex-col justify-between flex-1 p-6 bg-white">
            <div className="flex-1">
              <a href="/BaisleyEpisode" className="block mt-2">
                <p className="text-xl font-semibold text-neutral-600">BaisleyLa and Foe Glizz: 50 Cent is my uncle</p>
                <p className="mt-3 text-base text-gray-500">BaisleyLa and Foe Glizz make a well needed visit to the Thanx4askin podcast show. We discuss BaisleyLa&apos;s origins as to how and why he started rapping. He breaks down first encounter with 50 Cent and talks about their relationship, thereafter.  
                We get into the confrontation between them and Meek Mill at Club Amazura in Queens. We talk about how that started and Kevin Hart&apos;s reaction to being in that same club and more.
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
                  <a href="https://instagram.com/devon.tomlin?igshid=NzZhOTFlYzFmZQ==" className="hover:underline"> Detox Jones </a>
                </p>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time dateTime="2020-02-12"> May 26, 2023 </time>
                  <span aria-hidden="true"> · </span>
                  <span> 1:04:09 mins </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Item 14 */}
        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
          <div className="flex-shrink-0">
            <img className="object-cover w-full h-48" src="Von.png" alt=""/>
          </div>
          <div className="flex flex-col justify-between flex-1 p-6 bg-white">
            <div className="flex-1">
              <a href="/VonEpisode" className="block mt-2">
                <p className="text-xl font-semibold text-neutral-600">Von of Music Buff Radio opens up about his life as a producer in the music industry</p>
                <p className="mt-3 text-base text-gray-500">Von talks about his early introduction to music as a young DJ. He discusses his production credits such as AZ and a bunch of other hip hop artists. he delves in what it was like raising a family as a producer and artist. Von also gets into why he started Music Buff Radio and how he plans to take it to the next level.</p>
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
                  <a href="https://instagram.com/devon.tomlin?igshid=NzZhOTFlYzFmZQ==" className="hover:underline"> Detox Jones </a>
                </p>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time dateTime="2020-02-12"> May 21, 2023 </time>
                  <span aria-hidden="true"> · </span>
                  <span> 40:36 mins </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Item 15 */}
        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
          <div className="flex-shrink-0">
            <img className="object-cover w-full h-48" src="WAI.png" alt=""/>
          </div>
          <div className="flex flex-col justify-between flex-1 p-6 bg-white">
            <div className="flex-1">
              <a href="/WAI" className="block mt-2">
                <p className="text-xl font-semibold text-neutral-600">WAI: (Our company) We All In clothing started selling clothes out of the basement like it&apos;s drugs.</p>
                <p className="mt-3 text-base text-gray-500">In this episode, we bring Don and Serv to the Barberceuticals barber shop to discuss the root origins of the &quot;We All In&quot; clothing brand. A brand that represents loyalty over all things in their estimation. For Don and Serv, it&apos;s the highest expression of love. Don and Serv talk about their early start from being a rap faction of all their friends in the neighborhood to it turning into a clothing brand that has grown into one of the biggest clothing companies in New York.</p>
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
                  <a href="https://instagram.com/devon.tomlin?igshid=NzZhOTFlYzFmZQ==" className="hover:underline"> Detox Jones </a>
                </p>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time dateTime="2020-02-12"> May 5, 2023 </time>
                  <span aria-hidden="true"> · </span>
                  <span> 52:55 mins </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Item 16 */}
        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
          <div className="flex-shrink-0">
            <img className="object-cover w-full h-48" src="Morado.png" alt=""/>
          </div>
          <div className="flex flex-col justify-between flex-1 p-6 bg-white">
            <div className="flex-1">
              <a href="/MoradoEpisode" className="block mt-2">
                <p className="text-xl font-semibold text-neutral-600">Mister Morado Talks about his journey as an artist, sculptor, Australia, and racism.</p>
                <p className="mt-3 text-base text-gray-500">In this episode, we talk about Mister Morado&apos;s illustrious career as an artist and sculptor. Morado talks about his biggest inspiration being his older sister and trying to best her in every way possible. His first foray into the arts would be by way of painting shoes and other clothing as a teenager. We discussed his entry into the art world through the women he was dating. he talked about having his family&apos;s support was another vital key to his success</p>
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
                  <a href="https://instagram.com/devon.tomlin?igshid=NzZhOTFlYzFmZQ==" className="hover:underline"> Detox Jones </a>
                </p>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time dateTime="2020-02-12"> Apr 21, 2023 </time>
                  <span aria-hidden="true"> · </span>
                  <span> 1:15:23 mins </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Item 17 */}
        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
          <div className="flex-shrink-0">
            <img className="object-cover w-full h-48" src="Kyah.png" alt=""/>
          </div>
          <div className="flex flex-col justify-between flex-1 p-6 bg-white">
            <div className="flex-1">
              <a href="/KyahEpisode" className="block mt-2">
                <p className="text-xl font-semibold text-neutral-600">Kyah Baby talks about her childhood, getting arrested, brother dying, 50 Cent, record deal & more.</p>
                <p className="mt-3 text-base text-gray-500">KyahBaby  talks about her childhood, getting arrested, her closet brother dying, depression, meeting 50 Cent, her record deal with DJ Self, being an independent artist, her last album and her latest single and a whole lot more.</p>
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
                  <a href="https://instagram.com/devon.tomlin?igshid=NzZhOTFlYzFmZQ==" className="hover:underline"> Detox Jones </a>
                </p>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time dateTime="2020-02-12"> Mar 24, 2023 </time>
                  <span aria-hidden="true"> · </span>
                  <span> 1:27:20 mins</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Item 18 */}
        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
          <div className="flex-shrink-0">
            <img className="object-cover w-full h-48" src="Mic.jpg" alt=""/>
          </div>
          <div className="flex flex-col justify-between flex-1 p-6 bg-white">
            <div className="flex-1">
              <a href="/MicGeronimoEpisode" className="block mt-2">
                <p className="text-xl font-semibold text-neutral-600">Mic Geronimo Talks about his rap career, Irv Gotti, Diddy, DMX, Jay-Z, Ja Rule, & entrepreneurship.</p>
                <p className="mt-3 text-base text-gray-500">In this Episode, Mic Geronimo discusses how he was signed to TVT Records, and his relationship with Irv Gotti early in his career. He talks about what it was like recording with DMX, Jay-Z, and Ja Rule. Mic gets into how he turned down the &quot;Can&apos;t Nobody Hold Me Down&quot; beat that Diddy and Mase made a hit record. Mic Geronimo also talks about starting his own locksmith business after being dropped from his label. </p>
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
                  <a href="https://instagram.com/devon.tomlin?igshid=NzZhOTFlYzFmZQ==" className="hover:underline"> Detox Jones </a>
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

        {/* Item 19 */}
        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
          <div className="flex-shrink-0">
            <img className="object-cover w-full h-48" src="Junie.jpg" alt=""/>
          </div>
          <div className="flex flex-col justify-between flex-1 p-6 bg-white">
            <div className="flex-1">
              <a href="/JunieEpisode" className="block mt-2">
                <p className="text-xl font-semibold text-neutral-600">Blind Junie is a blind drug dealer who navigated the notorious Southside Jamaica Queens - Ep. 2</p>
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
                  <a href="https://instagram.com/devon.tomlin?igshid=NzZhOTFlYzFmZQ==" className="hover:underline"> Detox Jones </a>
                </p>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time dateTime="2020-02-12"> Feb 24, 2023 </time>
                  <span aria-hidden="true"> · </span>
                  <span> 54:04 mins </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Item 20 */}
        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
          <div className="flex-shrink-0">
            <img className="object-cover w-full h-48" src="Mic.jpg" alt=""/>
          </div>
          <div className="flex flex-col justify-between flex-1 p-6 bg-white">
            <div className="flex-1">
              <a href="/FirstEpisode" className="block mt-2">
                <p className="text-xl font-semibold text-neutral-600">Thanx4askin Episode 1: Our Story of how and why we started The Thanx4askin podcast</p>
                <p className="mt-3 text-base text-gray-500">This discusses the journey of how we met, why we started the podcast, who are some of the guests on the show, and discusses all of the shenanigans that occur in our beloved barbershop.</p>
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
                  <a href="https://instagram.com/devon.tomlin?igshid=NzZhOTFlYzFmZQ==" className="hover:underline"> Detox Jones </a>
                </p>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time dateTime="2020-02-12"> Feb 3, 2023 </time>
                  <span aria-hidden="true"> · </span>
                  <span> 36:45 mins </span>
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

export default Podcast
