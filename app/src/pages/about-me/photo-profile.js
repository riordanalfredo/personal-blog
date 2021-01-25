import React from 'react'
import photo from '../../assets/profile.jpg'

const PhotoProfile = () => {
  const style = {
    width: 200,
    height: 300,
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
