/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react';
import Seo from '../components/Seo';
import FadeIn from 'react-fade-in/lib/FadeIn';
import Footer from '../components/Footer';
import N2 from '../components/N2';
import CTA from '../components/CTA';
import T2 from '../components/T2';

const VonEpisode = () => {
  return (
    <div>
      <Seo title='Thankx 4 Askin Podcast' description='Von talks about his early introduction to music as a young DJ. He discusses his production credits such as AZ and a bunch of other hip hop artists. he delves in what it was like raising a family as a producer and artist. Von also gets into why he started Music Buff Radio and how he plans to take it to the next level.' image='/thx.png' url='' />

      {/* Nav Component */}
      <N2/>
    
          {/* Video Component */}
          <div>
      <FadeIn>
        <div className='w-full' style={{ height: 'auto', paddingBottom: '56.25%' }}>
          <iframe
            className='w-full h-full absolute top-0 left-0'
            src='https://www.youtube.com/embed/s1BpiurouiE?si=Dw-vCMoFz_vswsaU'
            title='Thanx 4 Askin: Von Episode'
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

export default VonEpisode;
