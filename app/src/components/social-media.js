import React from 'react'

const SocialMedia = ({ data }) => {
  const { icon, link, text } = data
  return (
    <div>
      <a
        style={{
          boxShadow: 'none',
          color: 'var(--textTitle)',
        }}
        href={link}
      >
        {icon}
      </a>
      <p style={{ fontFamily: 'Montserrat, sans-serif' }}>{text}</p>
    </div>
  )
}

export default SocialMedia
