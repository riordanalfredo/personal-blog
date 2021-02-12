import React, { useState } from 'react'
import { Link } from 'gatsby'
import { scale } from '../utils/typography'
import { useMediaQuery, getIsMobileBoolean } from '../utils/mobile'

import Toggler from '../state/containers/theme'
import Menu from './menu'
import Footer from './footer'
import Subtitle from './subtitle'
import Burger from './burger'
import MobileMenu from './mobile-menu'
import './global.css'

const Layout = ({ location, title, children }) => {
  const Title = ({ text }) => (
    <Link style={{ boxShadow: `none` }} to={`/`}>
      {text}
    </Link>
  )
  const [open, setOpen] = useState(false)
  const myName = 'RIORDAN ALFREDO'
  const [width] = useMediaQuery()
  const isMobile = getIsMobileBoolean(width)
  const styles = {
    outer: {
      backgroundColor: 'var(--bg)',
      color: 'var(--textNormal)',
      transition: 'color 0.2s ease-out, background 0.2s ease-out',
      minHeight: '100vh',
    },

    mobileHeader: {
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      margin: '1rem 0.5rem 0 0.5rem',
    },
    desktopTitle: {
      ...scale(1),
      margin: 0,
      fontFamily: `Montserrat, sans-serif`,
    },
    mobileTitle: {
      fontSize: '1.3rem',
      margin: 0,
      fontFamily: `Montserrat, sans-serif`,
    },
    main: {
      maxWidth: 880,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }

  const desktopHeader = (
    <>
      <h1 className="title" style={styles.desktopTitle}>
        <Title text={title} />
      </h1>
      <Subtitle style={{ margin: 0 }} />
      <Menu />
    </>
  )

  const mobileHeader = (
    <>
      <h1 className="title" style={styles.mobileTitle}>
        <Title text={myName} />
      </h1>
    </>
  )

  return (
    <div style={styles.outer}>
      <div className="sidebar">
        {isMobile ? (
          <div style={styles.mobileHeader}>
            {/**mobile header*/}
            <Burger open={open} setOpen={setOpen} />
            {mobileHeader}
            <Toggler />
          </div>
        ) : (
          <div
            className="md:h-screen p-4 flex flex-col justify-center items-center"
            style={{ minHeight: 200 }}
          >
            <Toggler />
            {desktopHeader}
          </div>
        )}
      </div>
      {isMobile ? <MobileMenu open={open}>{desktopHeader}</MobileMenu> : null}

      <div className="main-content relative">
        <main style={styles.main}>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
