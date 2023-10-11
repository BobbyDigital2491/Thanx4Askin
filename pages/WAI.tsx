/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react';
import Seo from '../components/Seo';
import FadeIn from 'react-fade-in/lib/FadeIn';
import Footer from '../components/Footer';
import N2 from '../components/N2';
import CTA from '../components/CTA';
import T2 from '../components/T2';

const WAIEpisode = () => {
  return (
    <div>
      <Seo title='Thankx 4 Askin Podcast' 
      description='In this episode, we bring Don and Serv to the Barberceuticals barber shop to discuss the root origins of the "We All In" clothing brand. A brand that represents loyalty over all things in their estimation.' 
      image='/thx.png' 
      url='' />

      {/* Nav Component */}
      <N2/>
    
          {/* Video Component */}
          <div>
      <FadeIn>
        <div className='w-full' style={{ height: 'auto', paddingBottom: '56.25%' }}>
          <iframe
            className='w-full h-full absolute top-0 left-0'
            src='https://www.youtube.com/embed/PY71toLPfiY?si=ambwHsTIQ1qeELEC'
            title='Thanx 4 Askin: WAI Episode'
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

export default WAIEpisode;
