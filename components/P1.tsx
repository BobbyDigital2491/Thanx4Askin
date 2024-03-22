/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Sample podcast data
  const podcastData = [
    {
      id: 1,
      image: '1st.jpg',
      title: 'Smiley😁: Former G-Unit soldier spent 16 years in prison for a hitman plot on an NYPD Cop.',
      description: "Today, we sat down with The Million Dollar Smile 😁. He takes us on a journey of what it was like growing up with a father who was addicted to heroin and living in a household with over 14 foster care brothers and sisters. Smile's childhood wasn't an easy one.",
      author: 'Detox Jones',
      authorLink: 'https://instagram.com/devon.tomlin?igshid=NzZhOTFlYzFmZQ==',
      date: 'Oct 2, 2023',
      duration: '1:44:13 mins',
      episode: '/SmileyEpisode',
    },
    {
        id: 2,
        image: 'Detox.jpg',
        title: 'Defying Expectations: Supreme Mcgriff Jrs Journey to Living Up to His Dads Legacy',
        description: "Supreme Mcgriff Jr., better known as P2, sits down with us and leaves nothing off limits regarding his life. We get into his upbringing and what it was like as the child of an infamous drug dealer.",
        author: 'Detox Jones',
        authorLink: 'https://instagram.com/devon.tomlin?igshid=NzZhOTFlYzFmZQ==',
        date: 'Sept 22, 2023',
        duration: '58:54 mins',
        episode: '/P2Episode',
      },
      {
        id: 3,
        image: 'B2.png',
        title: 'Life after drug dealing + a response from Zipwiththedrip',
        description: "Today we sit down with a Southside Jamaica Queens Legend better known as Bimmy. We all know the stories about how he grew up and who were some of his friends. Well, we get into a lot of those stories as well. We break down his transition from street life into the music industry.",
        author: 'Detox Jones',
        authorLink: 'https://instagram.com/devon.tomlin?igshid=NzZhOTFlYzFmZQ==',
        date: 'Sept 9, 2023',
        duration: '1:48:41 mins',
        episode: '/BimmyEpisode',
      },
      {
        id: 4,
        image: 'YG.png',
        title: 'YP DA YG opens up about going to jail and the top 5 rappers of all time',
        description: "Today we sat down with @ypdayg115 to talk about how he got into trouble early in his life with the law. He spoke on how his first jail stint was because of a crime he feels he didn&apos;t commit. His second time was due to his loyalty to a friend.",
        author: 'Detox Jones',
        authorLink: 'https://instagram.com/devon.tomlin?igshid=NzZhOTFlYzFmZQ==',
        date: 'Sept 5, 2023',
        duration: '1:01:56 mins',
        episode: '/YGEpisode',
      },
      {
        id: 5,
        image: 'Toya.png',
        title: 'The Economic and Political episode: Latoya Benjamin talks black economics & running for office',
        description: "Latoya Benjamin joins us on the couch to talk about all things politics and black economics. We start with economics and how certain practices affect our community on a whole as black people. Latoya talks about what got her so intrigued with understanding urban policy and economics.",
        author: 'Detox Jones',
        authorLink: 'https://instagram.com/devon.tomlin?igshid=NzZhOTFlYzFmZQ==',
        date: 'Aug 25, 2023',
        duration: '1:04:04 mins',
        episode: '/ToyaEpisode',
      },
      {
        id: 6,
        image: 'Sherifa.png',
        title: 'The Black n Ugly Episode: Sherifa tells us how to build a clothing brand from scratch.',
        description: "In this episode, Black-N-Ugly owner Sherifa talks about how she started her clothing company. She takes us through the highs and lows of what it takes to create a successful clothing company. She just recently worked with Steve Madden, and won the Harlem entrepreneurship award. You can find her at numerous pop up shop markets throughout New York City and then some.",
        author: 'Detox Jones',
        authorLink: 'https://instagram.com/devon.tomlin?igshid=NzZhOTFlYzFmZQ==',
        date: 'Aug 14, 2023',
        duration: '1:10:18 mins',
        episode: '/SherifaEpisode',
      },
      {
        id: 7,
        image: 'OA.png',
        title: 'OA of Hazard Lights talks Drake & Soulja boy inspiring him 2 rap and making songs with Joey Badass',
        description: "@ShotByOA sits down on the couch with us at the barbershop to talk all things music and life. we get into his platform Hazard Lights, his rap career and what are his biggest inspirations in music. We discuss Uber successful Hazard Lights YouTube channel. We discuss the origins on why and how it started. The pros and cons of what comes with the success of running a channel of this magnitude.",
        author: 'Detox Jones',
        authorLink: 'https://instagram.com/devon.tomlin?igshid=NzZhOTFlYzFmZQ==',
        date: 'Jul 28, 2023',
        duration: '35:06 mins',
        episode: '/ShotByOAEpisode',
      },
      {
        id: 8,
        image: 'T2.png',
        title: 'Chris Teel became an educator and non profit philanthropist despite having a felony under his belt',
        description: "Chris Teel was an early childhood educator and a non-profit philanthropist. Running several initiatives, one being Movies In The Park. As a child growing up, Teel experienced what he calls the good kid, mad city syndrome many black kids live in urban cities. Having 2 uncles suffering from drug addiction in his home, it was no doubt very challenging at times.",
        author: 'Detox Jones',
        authorLink: 'https://instagram.com/devon.tomlin?igshid=NzZhOTFlYzFmZQ==',
        date: 'Jul 10, 2023',
        duration: '1:02:12 mins',
        episode: '/ChrisTeelEpisode',
      },
      {
        id: 9,
        image: 'Raquel.png',
        title: 'Racquel Ellis Is A New York School Teacher Who Defied The Odds Of Being A Teen Mom At The Age Of 14',
        description: "Racquel Ellis comes into the barbershop to talk about some of the perils she went through to overcome the odds. Racquel talks about overcoming some serious setbacks starting as early as high school. At the start of her high school experience, she became pregnant, unexpectedly. Now, faced with the stigma and hardships of being a teen mom. This episode breaks down how this wouldn't stop her in the slightest.",
        author: 'Detox Jones',
        authorLink: 'https://instagram.com/devon.tomlin?igshid=NzZhOTFlYzFmZQ==',
        date: 'Jun 30, 2023',
        duration: '51:18 mins',
        episode: '/RaquelEllisEpisode',
      },
      {
        id: 10,
        image: 'OGJus.png',
        title: 'OG Jus was a drug dealer who sold drugs with Fat Cat Nichols, and The Supreme Team.',
        description: "OG Jus was a drug dealer in Queens who was Fat Cat Nichols during the 1970s and 1980s. Jus talks about his early start into street life during the 70s. He later elaborates on how he generated roughly $50,000-$100,000 a week in sales from selling drugs at the height of his career.",
        author: 'Detox Jones',
        authorLink: 'https://instagram.com/devon.tomlin?igshid=NzZhOTFlYzFmZQ==',
        date: 'Jun 11, 2023',
        duration: '38:22 mins',
        episode: '/OGJusEpisode',
      },
      {
        id: 11,
        image: 'Banner.jpg',
        title: '6ambu: 6lunt 6rothers (Bambu Starr and Fredro Starr)',
        description: "In this episode of Thanx4askin, we sit down with the brother of Fredro Starr, 6ambu Starr (Bambu), and discuss family, rap, and all things in between. 6ambu opens up about what it was like growing up with his brother Fredro Starr and what it was like during Onyx's meteoric rise as a rap star.",
        author: 'Detox Jones',
        authorLink: 'https://instagram.com/devon.tomlin?igshid=NzZhOTFlYzFmZQ==',
        date: 'Jun 9, 2023',
        duration: '37:53 mins',
        episode: '/CoachDEpisode',
      },
      {
        id: 12,
        image: 'CoachD.png',
        title: 'Coach Dee of Code 31 Media: "Basketball was Life, now its media"',
        description: "Coach D talks about how her origins start with her wanting to be just like her brother Mark Ellison. She would follow her brother everywhere. It began with playing baseball and then it eventually transitioned to basketball. As a young basketball athlete, Coach D would shine in this role. Riding this gift all the way to Mercy College. Coach D persevered to become one of the highest-scoring players in college history.",
        author: 'Detox Jones',
        authorLink: 'https://instagram.com/devon.tomlin?igshid=NzZhOTFlYzFmZQ==',
        date: 'May 28, 2023',
        duration: '33:19 mins',
        episode: '/6ambuEpisode',
      },
      {
        id: 13,
        image: 'BaisleyLA.png',
        title: 'BaisleyLa and Foe Glizz: 50 Cent is my uncle',
        description: "BaisleyLa and Foe Glizz make a well needed visit to the Thanx4askin podcast show. We discuss BaisleyLA's origins as to how and why he started rapping. He breaks down first encounter with 50 Cent and talks about their relationship, thereafter. We get into the confrontation between them and Meek Mill at Club Amazura in Queens. We talk about how that started and Kevin Hart's reaction to being in that same club and more.",
        author: 'Detox Jones',
        authorLink: 'https://instagram.com/devon.tomlin?igshid=NzZhOTFlYzFmZQ==',
        date: 'May 26, 2023',
        duration: '1:04:09 mins',
        episode: '/BaisleyEpisode',
      },
      {
        id: 14,
        image: 'Von.png',
        title: 'Von of Music Buff Radio opens up about his life as a producer in the music industry',
        description: "Von talks about his early introduction to music as a young DJ. He discusses his production credits such as AZ and a bunch of other hip hop artists. he delves in what it was like raising a family as a producer and artist. Von also gets into why he started Music Buff Radio and how he plans to take it to the next level.",
        author: 'Detox Jones',
        authorLink: 'https://instagram.com/devon.tomlin?igshid=NzZhOTFlYzFmZQ==',
        date: 'May 21, 2023',
        duration: '40:36 mins',
        episode: '/VonEpisode',
      },
      {
        id: 15,
        image: 'WAI.png',
        title: 'WAI: (Our company) We All In clothing started selling clothes out of the basement like its drugs.',
        description: "In this episode, we bring Don and Serv to the Barberceuticals barber shop to discuss the root origins of the 'We All In' clothing brand. A brand that represents loyalty over all things in their estimation. For Don and Serv, its the highest expression of love. Don and Serv talk about their early start from being a rap faction of all their friends in the neighborhood to it turning into a clothing brand that has grown into one of the biggest clothing companies in New York.",
        author: 'Detox Jones',
        authorLink: 'https://instagram.com/devon.tomlin?igshid=NzZhOTFlYzFmZQ==',
        date: 'May 5, 2023',
        duration: '52:55 mins',
        episode: '/WAI',
      },
      {
        id: 16,
        image: 'Morado.png',
        title: 'Mister Morado Talks about his journey as an artist, sculptor, Australia, and racism.',
        description: "In this episode, we talk about Mister Morado's illustrious career as an artist and sculptor. Morado talks about his biggest inspiration being his older sister and trying to best her in every way possible. His first foray into the arts would be by way of painting shoes and other clothing as a teenager. We discussed his entry into the art world through the women he was dating. he talked about having support from his family was another vital key to his success.",
        author: 'Detox Jones',
        authorLink: 'https://instagram.com/devon.tomlin?igshid=NzZhOTFlYzFmZQ==',
        date: 'April 21, 2023',
        duration: '1:15:23 mins',
        episode: '/MoradoEpisode',
      },
      {
        id: 17,
        image: 'Kyah.png',
        title: 'Kyah Baby talks about her childhood, getting arrested, brother dying, 50 Cent, record deal & more.',
        description: "KyahBaby  talks about her childhood, getting arrested, her closest brother dying, depression, meeting 50 Cent, her record deal with DJ Self, being an independent artist, her last album and her latest single and a whole lot more.",
        author: 'Detox Jones',
        authorLink: 'https://instagram.com/devon.tomlin?igshid=NzZhOTFlYzFmZQ==',
        date: 'March 24, 2023',
        duration: '1:27:20 mins',
        episode: '/KyahEpisode',
      },
      {
        id: 18,
        image: 'Mic.jpg',
        title: 'Mic Geronimo Talks about his rap career, Irv Gotti, Diddy, DMX, Jay-Z, Ja Rule, & entrepreneurship.',
        description: "In this Episode, Mic Geronimo discusses how he was signed to TVT Records, and his relationship with Irv Gotti early in his career. He talks about what it was like recording with DMX, Jay-Z, and Ja Rule. Mic gets into how he turned down the (Can't Nobody Hold Me Down) beat that Diddy and Mase made a hit record. Mic Geronimo also talks about starting his own locksmith business after being dropped from his label.",
        author: 'Detox Jones',
        authorLink: 'https://instagram.com/devon.tomlin?igshid=NzZhOTFlYzFmZQ==',
        date: 'March 10, 2023',
        duration: '1:23:49 mins',
        episode: '/MicGeronimoEpisode',
      },
      {
        id: 19,
        image: 'Junie.jpg',
        title: 'Blind Junie is a blind drug dealer who navigated the notorious Southside Jamaica Queens - Ep. 2',
        description: "Blind Junie is our next guest on the Thanx4askin podcast show. Blind Junie is a South Side Jamaica Queens legend in his own right. He sold drugs alongside Fat Cat, Supreme McGriff, and every other big-time drug dealer in the 1980s. Junie opens up about his life from his early days as a high school basketball player to his release from incarceration for selling drugs in the early 2000s. ",
        author: 'Detox Jones',
        authorLink: 'https://instagram.com/devon.tomlin?igshid=NzZhOTFlYzFmZQ==',
        date: 'Feb 24, 2023',
        duration: '54:04 mins',
        episode: '/JunieEpisode',
      },
      {
        id: 20,
        image: 'thx.png',
        title: 'Thanx4askin Episode 1: Our Story of how and why we started The Thanx4askin podcast',
        description: "This discusses the journey of how we met, why we started the podcast, who are some of the guests on the show, and discusses all of the shenanigans that occur in our beloved barbershop. ",
        author: 'Detox Jones',
        authorLink: 'https://instagram.com/devon.tomlin?igshid=NzZhOTFlYzFmZQ==',
        date: 'Feb 24, 2023',
        duration: '54:04 mins',
        episode: '/FirstEpisode',
      },
  ];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = podcastData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className='bg-black'>
      <section>
        <div className="relative px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="relative mx-auto max-w-7xl">
            <FadeIn>
              <h1 className="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-black md:text-5xl lg:text-6xl dark:text-white">All Episodes</h1>
            </FadeIn>
            <br/>

            {/* Render podcast items */}
            <div className="grid max-w-lg gap-5 mx-auto lg:grid-cols-3 lg:max-w-none">
              {currentItems.map((item) => (
                <div key={item.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                  <div className="flex-shrink-0">
                    <img className="object-cover w-full h-48" src={item.image} alt=""/>
                  </div>
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                    <div className="flex-1">
                      <a href={item.episode} className="block mt-2">
                        <p className="text-xl font-semibold text-black">{item.title}</p>
                        <p className="mt-3 text-base text-gray-500">{item.description}</p>
                      </a>
                    </div>
                    <div className="flex items-center mt-6">
                      <div className="flex-shrink-0">
                        <a href={item.authorLink}>
                          <span className="sr-only">{item.author}</span>
                          <img className="w-10 h-10 rounded-full" src="/Detox.jpg" alt={item.author}/>
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-neutral-600">
                          <a href={item.authorLink} className="hover:underline">{item.author}</a>
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                          <time dateTime={item.date}>{item.date}</time>
                          <span aria-hidden="true"> · </span>
                          <span>{item.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <nav className="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-neutral-300 bg-white text-sm font-medium text-neutral-500 hover:bg-neutral-50"
                >
                  Previous
                </button>
                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={indexOfLastItem >= podcastData.length}
                  className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-neutral-300 bg-white text-sm font-medium text-neutral-500 hover:bg-neutral-50"
                >
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Podcast;
