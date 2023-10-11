/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react';
import Seo from '../components/Seo';
import FadeIn from 'react-fade-in/lib/FadeIn';
import Footer from '../components/Footer';
import N2 from '../components/N2';
import CTA from '../components/CTA';
import T2 from '../components/T2';

const MicGeronimoEpisode = () => {
  return (
    <div className='bg-black'>
      <Seo title='Thankx 4 Askin Podcast' description='In this Episode, Mic Geronimo discusses how he was signed to TVT Records, and his relationship with Irv Gotti early in his career. ' image='/thx.png' url='' />

      {/* Nav Component */}
      <N2/>
    
          {/* Video Component */}
          <div>
      <FadeIn>
        <div className='w-full' style={{ height: 'auto', paddingBottom: '56.25%' }}>
          <iframe
            className='w-full h-full absolute top-0 left-0'
            src='https://www.youtube.com/embed/srYhT-lQ9fE?si=DoC2yQfk88V3fdvN'
            title='Thanx 4 Askin: Mic Geronimo Episode'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
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

export default MicGeronimoEpisode;
