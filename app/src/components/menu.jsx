import React from 'react'
import { Link } from "gatsby"
import "./global.css"

const Menu = () => {

  const menu = [
    { text: 'About Me', link: '/about-me' },
    { text: 'Contact', link: '/contact' },
  ]

  return (
    <div>
      {menu.map((item,index) =>
      <div key={index}>
        <Link to={item.link} style={{ boxShadow: `none`}} >
          <h4 className="nudge" style={{ marginBottom: '10px', fontFamily:`Montserrat, sans-serif` }}>
            {item.text}
          </h4>
        </Link></div>
      )}
    </div>
  )
}

export default Menu;