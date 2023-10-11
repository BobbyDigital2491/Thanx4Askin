import React from 'react'

const MicVideo = () => {
  return (
    <div className='w-full' style={{ height: 'auto', paddingBottom: '56.25%' }}>
          <iframe
            className='w-full h-full absolute top-0 left-0'
            src='https://www.youtube.com/embed/srYhT-lQ9fE?si=ZfjQlkm84NhjEfD-'
            title='Thanx 4 Askin: Bimmy Episode'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
          ></iframe>
        </div>
  )
}

export default MicVideo