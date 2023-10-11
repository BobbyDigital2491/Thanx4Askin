/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react';
import Seo from '../components/Seo';
import FadeIn from 'react-fade-in/lib/FadeIn';
import Footer from '../components/Footer';
import N2 from '../components/N2';
import Details from '../components/Details';
import CTA from '../components/CTA';
import T2 from '../components/T2';

const JunieEpisode = () => {
  return (
    <div>
      <Seo title='Thankx 4 Askin Podcast' description='Blind Junie is our next guest on the Thanx4askin podcast show.
                Blind Junie is a South Side Jamaica Queens legend in his own right. He sold drugs alongside Fat Cat, Supreme McGriff, and every other big-time drug dealer in the 1980s.
                Junie opens up about his life from his early days as a high school basketball player to his release from incarceration for selling drugs in the early 2000s.' image='/thx.png' url='' />

      {/* Nav Component */}
      <N2/>
    
          {/* Video Component */}
          <div>
      <FadeIn>
        <div className='w-full' style={{ height: 'auto', paddingBottom: '56.25%' }}>
          <iframe
            className='w-full h-full absolute top-0 left-0'
            src='https://www.youtube.com/embed/PpYxuQ7CLXg?si=EqtqSEDvPr2nzztx'
            title='Thanx 4 Askin: Blind Junie Episode'
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

export default JunieEpisode;
