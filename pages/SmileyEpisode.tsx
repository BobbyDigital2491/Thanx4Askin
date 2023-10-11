import React from 'react';
import Seo from '../components/Seo';
import FadeIn from 'react-fade-in/lib/FadeIn';
import Footer from '../components/Footer';
import N2 from '../components/N2';
import T2 from '../components/T2';
import CTA from '../components/CTA';

const SmileyEpisode = () => {
  return (
    <div className='bg-black'>
      <Seo title='Thankx 4 Askin Podcast' description='Today, we sat down with The Million Dollar Smile 😁. He takes us on a journey of what it was like growing up with a father who was addicted to heroin and living in a household with over 14 foster care brothers and sisters. Smile&apos;s childhood wasn&apos;t an easy one.' image='/thx.png' url='' />

      {/* Nav Component */}
      <N2/>
      
          {/* Video Component */}
          <div>
      <FadeIn>
        <div className='w-full' style={{ height: 'auto', paddingBottom: '56.25%' }}>
          <iframe
            className='w-full h-full absolute top-0 left-0'
            src='https://www.youtube.com/embed/rPVXO13ajeM?si=_tLgULu2BNs6ObSR'
            title='Thanx 4 Askin: Bimmy Episode'
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

export default SmileyEpisode;