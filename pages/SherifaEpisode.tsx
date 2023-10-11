import React from 'react';
import Seo from '../components/Seo';
import FadeIn from 'react-fade-in/lib/FadeIn';
import Footer from '../components/Footer';
import N2 from '../components/N2';
import T2 from '../components/T2';
import CTA from '../components/CTA';

const SherifaEpisode = () => {
  return (
    <div className='bg-black'>
      <Seo title='Thankx 4 Askin Podcast' description='In this episode, Black-N-Ugly owner Sherifa talks about how she started her clothing company. She takes us through the highs and lows of what it takes to create a successful clothing company. She just recently worked with Steve Madden, and won the Harlem entrepreneurship award. You can find her at numerous pop up shop markets throughout New York City and then some.' image='/thx.png' url='' />

      {/* Nav Component */}
      <N2/>
      
          {/* Video Component */}
          <div>
      <FadeIn>
        <div className='w-full' style={{ height: 'auto', paddingBottom: '56.25%' }}>
          <iframe
            className='w-full h-full absolute top-0 left-0'
            src='https://www.youtube.com/embed/-Tr_q73M6KU?si=I4cARZ3hTCsooXG-'
            title='Thanx 4 Askin: Sherifa Episode'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullScreen'
            allowFullScreen
          ></iframe>
        </div>
      </FadeIn>
      
      </div>
      <CTA/>
      <T2/>
      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default SherifaEpisode;