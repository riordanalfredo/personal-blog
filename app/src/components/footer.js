import React from 'react'

const Footer = () => {
  return (
    <footer className="my-4 text-center">
      <small style={{ fontSize: '0.65rem' }}>
        &copy; {new Date().getFullYear()}, 👨🏻‍🚀 Engineered by
        {` `}
        <a href="https://rioalfredo.com" target="_blank" rel="noreferrer">
          Riordan Alfredo
        </a>
        {'. '}
        All Rights Reserved.
      </small>
    </footer>
  )
}

export default Footer
