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
        myself
      </a>
      .
    </footer>
  )
}

export default Footer
