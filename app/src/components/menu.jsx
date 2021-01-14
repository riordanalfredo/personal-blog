import React from 'react'
import { Link } from "gatsby"
import Subtitle from './subtitle'
import "./global.css"

const Menu = () => {

  const menu = [
    { text: 'About Me', link: '/about-me' },
    { text: 'Contact', link: '/contact' },
  ]

  return (
    <div>
      <Subtitle/>
      {menu.map(item =>
        <Link to={item.link} style={{ boxShadow: `none`}} >
          <h4 className="nudge" style={{ marginBottom: '10px', fontFamily:`Montserrat, sans-serif` }}>
            {item.text}
          </h4>
        </Link>)
      }
    </div>
  )
}

export default Menu;