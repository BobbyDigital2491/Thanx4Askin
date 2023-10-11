import React from 'react';
import Seo from '../components/Seo';
import FadeIn from 'react-fade-in/lib/FadeIn';
import Footer from '../components/Footer';
import N2 from '../components/N2';
import T2 from '../components/T2';
import CTA from '../components/CTA';

const ChrisTeelEpisode = () => {
  return (
    <div className='bg-black'>
      <Seo title='Thankx 4 Askin Podcast' description='Chris Teel was an early childhood educator and a non-profit philanthropist. Running several initiatives, one being Movies In The Park.' image='/thx.png' url='' />

      {/* Nav Component */}
      <N2/>
      
          {/* Video Component */}
          <div>
      <FadeIn>
        <div className='w-full' style={{ height: 'auto', paddingBottom: '56.25%' }}>
          <iframe
            className='w-full h-full absolute top-0 left-0'
            src='https://www.youtube.com/embed/STm3J7O-e08?si=tHxRtvPWDSST6coz'
            title='Thanx 4 Askin: Chris Teel Episode'
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

export default ChrisTeelEpisode;