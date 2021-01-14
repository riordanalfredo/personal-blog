import React from 'react'
import photo from '../../assets/profile.jpg'

const PhotoProfile = () => {
  const style = {
    width: 250,
    height: 350,
    borderRadius: '1rem',
    backgroundImage: `url(${photo})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    marginBottom: '2.5rem',
  }

  return (
    <div>
      <div style={style}></div>
    </div>
  )
}

export default PhotoProfile
