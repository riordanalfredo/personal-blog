import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { useMediaQuery, getIsMobileBoolean } from '../utils/mobile'

// Sections
import PhotoProfile from './about-me/photo-profile'
import AboutText from './about-me/about-text'
import CreditSection from './about-me/credits'

const AboutPage = ({ data, location }) => {
  const [width] = useMediaQuery()
  const isMobile = getIsMobileBoolean(width)
  const styles = {
    outer: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
    },
    profile: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    quote: {
      marginBottom: 0,
      minWidth: 350,
      width: '55vw',
      alignSelf: 'center',
    },
  }
  const description = data.site.siteMetadata.description
  return (
    <Layout location={location} title={'RIORDAN ALFREDO'}>
      <SEO title="A software engineer &amp; educator" />
      <div style={styles.outer}>
        <h1 align="center">RIORDAN DERVIN ALFREDO</h1>
        <p style={{ color: 'grey' }}>{description}</p>
        <div style={styles.profile}>
          <PhotoProfile />
          <AboutText isMobile={isMobile} />
        </div>
        <blockquote style={styles.quote}>
          My crafts are synthesising software engineering and data science
          knowledge, along with the entrepreneurial mindset to advance our
          society.
        </blockquote>
      </div>
      <CreditSection />
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        description
      }
    }
  }
`
