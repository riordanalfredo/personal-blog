import React from "react"

const Footer = () => {
  return (
    <footer className="my-12 text-center">
      © {new Date().getFullYear()}, Engineered by
      {` `}
      <a
        href="https://rioalfredo.com"
        target="_blank"
        rel="noreferrer"
      >
        Riordan Dervin Alfredo
      </a>
      .
    </footer>
  )
}

export default Footer
