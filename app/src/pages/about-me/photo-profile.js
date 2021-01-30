import React from 'react'
import photo from '../../assets/profile.jpg'

const PhotoProfile = () => {
  const style = {
    width: 300,
    height: 270,
    borderRadius: '1rem',
    backgroundImage: `url(${photo})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }

  return (
    <div style={{ margin: '0 auto 2rem auto' }}>
      <div style={style}></div>
    </div>
  )
}

export default PhotoProfile
