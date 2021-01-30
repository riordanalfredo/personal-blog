import React from 'react'
import { graphql } from 'gatsby'
import Fade from 'react-reveal/Fade'
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
      wordWrap: 'break-word',
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
      maxWidth: 780,
      width: '60vw',
      alignSelf: 'center',
    },
    secondText: { textAlign: 'justify', textJustify: 'inner-word', width: 780 },
  }

  const quote = (
    <>
      <blockquote style={styles.quote}>
        <Fade delay={300}>
          My crafts are synthesising software engineering and data science
          knowledge, along with the entrepreneurial mindset to advance society.
        </Fade>
      </blockquote>
    </>
  )
  const description = data.site.siteMetadata.description
  return (
    <Layout location={location} title={'RIORDAN ALFREDO'}>
      <SEO title="A software engineer &amp; educator" />
      <div style={styles.outer}>
        <Fade cascade>
          <h1 align="center">RIORDAN DERVIN ALFREDO</h1>
          <p style={{ color: 'grey' }}>{description}</p>
        </Fade>
        <div style={styles.profile}>
          <PhotoProfile />
          <AboutText isMobile={isMobile} />
        </div>
        <p style={styles.secondText}>
          I received a full-ride scholarship to study data science &amp; AI area
          as a Doctor of Philosophy student at Monash University. My research
          was about <code>meta-learning &amp; recommender systems</code> topics.
          Now, I am a teaching associate for software engineering units at the
          Faculty of IT, Monash University. I love connecting with all of my
          students aside from just delivering content. At the same time, I am
          working on various software projects with{' '}
          <code>
            ReactJS, Redux, MobX, Quantlib, NodeJS, Gatsby, MongoDB, PostgreSQL,
            and Django frameworks.
          </code>
          <br />
        </p>
        {quote}
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
