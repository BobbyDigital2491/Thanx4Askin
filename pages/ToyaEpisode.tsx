import React from 'react';
import Seo from '../components/Seo';
import FadeIn from 'react-fade-in/lib/FadeIn';
import Footer from '../components/Footer';
import N2 from '../components/N2';
import T2 from '../components/T2';
import CTA from '../components/CTA';

const ToyaEpisode = () => {
  return (
    <div className='bg-black'>
      <Seo title='Thankx 4 Askin Podcast' description='Latoya Benjamin joins us on the couch to talk about all things politics and black economics. We start with economics and how certain practices affect our community on a whole as black people. Latoya talks about what got her so intrigued with understanding urban policy and economics.' image='/thx.png' url='' />

      {/* Nav Component */}
      <N2/>
      
          {/* Video Component */}
          <div>
      <FadeIn>
        <div className='w-full' style={{ height: 'auto', paddingBottom: '56.25%' }}>
          <iframe
            className='w-full h-full absolute top-0 left-0'
            src='https://www.youtube.com/embed/38aeUj9zpPc?si=oDOsEmiujx1hLaWZ'
            title='Thanx 4 Askin: Latoya Benjamin Episode'
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

export default ToyaEpisode;