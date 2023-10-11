/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react';
import Seo from '../components/Seo';
import FadeIn from 'react-fade-in/lib/FadeIn';
import Footer from '../components/Footer';
import N2 from '../components/N2';
import CTA from '../components/CTA';
import T2 from '../components/T2';

const BaisleyEpisode = () => {
  return (
    <div>
      <Seo title='Thankx 4 Askin Podcast' description='BaisleyLa and Foe Glizz make a well needed visit to the Thanx4askin podcast show. We discuss BaisleyLa&apos;s origins as to how and why he started rapping. He breaks down first encounter with 50 Cent and talks about their relationship, thereafter.' image='/thx.png' url='' />

      {/* Nav Component */}
      <N2/>
    
          {/* Video Component */}
          <div>
      <FadeIn>
        <div className='w-full' style={{ height: 'auto', paddingBottom: '56.25%' }}>
          <iframe
            className='w-full h-full absolute top-0 left-0'
            src='https://www.youtube.com/embed/pyAhBHZkYwQ?si=wesLLcPIW4GZRlq7'
            title='Thanx 4 Askin: BaisleyLA and Foe Glizz Episode'
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

export default BaisleyEpisode;
