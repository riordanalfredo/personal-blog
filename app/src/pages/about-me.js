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
      flexWrap: 'wrap',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    quote: {
      marginBottom: 0,
      minWidth: 350,
      maxWidth: 880,
      width: '60vw',
      alignSelf: 'center',
      textAlign: 'center',
    },
    secondText: {
      textAlign: 'justify',
      textJustify: 'inner-word',
    },
  }

  const quote = (
    <>
      <blockquote style={styles.quote}>
        <Fade delay={300}>
          My crafts are synthesising software engineering, human-centred design,
          and artificial intelligence knowledge to advance learning and
          education.
        </Fade>
      </blockquote>
    </>
  )

  const description = data.site.siteMetadata.description
  return (
    <Layout location={location} title={'Riordan Alfredo'}>
      <SEO title="A software engineer &amp; educator" />
      <div style={styles.outer}>
        <Fade cascade>
          <h1 align="justify">RIORDAN DERVIN ALFREDO</h1>{' '}
        </Fade>
        <p style={{ color: 'grey', marginTop: '-2rem' }}>{description}</p>

        <div style={styles.profile}>
          <PhotoProfile />
          {quote}
          <AboutText isMobile={isMobile} />
        </div>
        <p style={styles.secondText}>
          I received a full-ride scholarship to study "Human-Centred Learning
          Analytics" area as a Doctor of Philosophy student at Monash
          University. My research is about{' '}
          <code>
            human-centered design, multimodal learning analytics, and learning
            design
          </code>{' '}
          topics. Now, I am a teaching associate for core software engineering
          units at the Faculty of IT, Monash University. Moreover, I am working
          on various software projects with{' '}
          <code>
            ReactJS, Redux, MobX, Quantlib, NodeJS, Gatsby, MongoDB, PostgreSQL,
            and Django frameworks.
          </code>
          <br />
        </p>
      </div>
      <div style={{ alignSelf: 'flex-start' }}>
        <h3>Education</h3>
        <p>PhD in Learning Analytics | Monash University | 2022 - present</p>
        <p>
          Graduate Diploma of Management (Learning) | Altec College, Melbourne |
          2021 - 2022{' '}
        </p>
        <p>
          Bachelor of Software Engineering (Honours), H1 | Monash University |
          2016 - 2019{' '}
        </p>
        <p>
          Diploma of Engineering (Engineering) | Monash College | 2015 - 2016{' '}
        </p>
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
