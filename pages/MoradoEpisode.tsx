/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react';
import Seo from '../components/Seo';
import FadeIn from 'react-fade-in/lib/FadeIn';
import Footer from '../components/Footer';
import N2 from '../components/N2';
import CTA from '../components/CTA';
import T2 from '../components/T2';

const MoradoEpisode = () => {
  return (
    <div>
      <Seo title='Thankx 4 Askin Podcast' 
      description='In this episode, we talk about Mister Morado&apos;s illustrious career as an artist and sculptor. Morado talks about his biggest inspiration being his older sister and trying to best her in every way possible. His first foray into the arts would be by way of painting shoes and other clothing as a teenager. We discussed his entry into the art world through the women he was dating. he talked about having his family&apos;s support was another vital key to his success' 
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
            src='https://www.youtube.com/embed/qz1MnA1ydjk?si=qRECWw-O9cZSAG4j'
            title='Thanx 4 Askin: Mister Morado Episode'
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

export default MoradoEpisode;
