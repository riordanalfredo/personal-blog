import React from 'react'
import { Link } from 'gatsby'
import { scale } from '../utils/typography'
import { useMediaQuery, getIsMobileBoolean } from '../utils/mobile'

import { Toggler } from './toggler'
import Menu from './menu'
import Footer from './footer'
import './global.css'

const Layout = ({ location, title, children }) => {
  const [width] = useMediaQuery()
  const isMobile = getIsMobileBoolean(width)
  const desktopHeader = (
    <>
      <h1
        style={{
          ...scale(1),
          marginBottom: 0,
          marginTop: 0,
          fontFamily: `Montserrat, sans-serif`,
        }}
        className="nudge"
      >
        <Link
          style={{
            color: 'var(--textTitle)',
            boxShadow: `none`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
      {/* <Subtitle style={{ marginBottom: 0, marginTop: 0 }} /> */}

      <Menu />
    </>
  )

  return (
    <div
      style={{
        backgroundColor: 'var(--bg)',
        color: 'var(--textNormal)',
        transition: 'color 0.2s ease-out, background 0.2s ease-out',
        minHeight: '100vh',
      }}
    >
      <div className="sidebar">
        <div
          className="md:h-screen p-4 flex flex-col justify-center items-center"
          style={{ minHeight: 200 }}
        >
          <Toggler />
          {isMobile ? 'menubar' : desktopHeader}
        </div>
      </div>

      <div className="main-content relative">
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
