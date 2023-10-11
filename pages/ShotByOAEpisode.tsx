import React from 'react';
import Seo from '../components/Seo';
import FadeIn from 'react-fade-in/lib/FadeIn';
import Footer from '../components/Footer';
import N2 from '../components/N2';
import T2 from '../components/T2';
import CTA from '../components/CTA';

const ShotByOAEpisode = () => {
  return (
    <div className='bg-black'>
      <Seo title='Thankx 4 Askin Podcast' description='OA of Hazard Lights talks Drake & Soulja boy inspiring him 2 rap and making songs with Joey Badass' image='/thx.png' url='' />

      {/* Nav Component */}
      <N2/>
      
          {/* Video Component */}
          <div>
      <FadeIn>
        <div className='w-full' style={{ height: 'auto', paddingBottom: '56.25%' }}>
          <iframe
            className='w-full h-full absolute top-0 left-0'
            src='https://www.youtube.com/embed/3mJ7QDfDq6U?si=Aa4c7AW5PisEzKNg'
            title='Thanx 4 Askin: OA Episode'
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

export default ShotByOAEpisode;