/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react';
import Seo from '../components/Seo';
import FadeIn from 'react-fade-in/lib/FadeIn';
import Footer from '../components/Footer';
import N2 from '../components/N2';
import CTA from '../components/CTA';
import T2 from '../components/T2';

const BambuEpisode = () => {
  return (
    <div>
      <Seo title='Thankx 4 Askin Podcast' description='In this episode of Thanx4askin, we sit down with the brother of Fredro Starr, 6ambu Starr (Bambu), and discuss family, rap, and all things in between. 6ambu opens up about what it was like growing up with his brother Fredro Starr and what it was like during Onyx&apos;s meteoric rise as a rap star.' image='/thx.png' url='' />

      {/* Nav Component */}
      <N2/>
    
          {/* Video Component */}
          <div>
      <FadeIn>
        <div className='w-full' style={{ height: 'auto', paddingBottom: '56.25%' }}>
          <iframe
            className='w-full h-full absolute top-0 left-0'
            src='https://www.youtube.com/embed/y9KRkpUEhNc?si=F4aJ-ObIit622JNY'
            title='Thanx 4 Askin: 6ambu Starr Episode'
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

export default BambuEpisode;
