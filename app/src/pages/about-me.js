import React from 'react'
import { Link, graphql } from 'gatsby'
import Fade from 'react-reveal/Fade'
import Layout from '../components/layout'
import SEO from '../components/seo'

import { useMediaQuery, getIsMobileBoolean } from '../utils/mobile'

// Sections
import PhotoProfile from './about-me/photo-profile'
import AboutText from './about-me/about-text'
import CreditSection from './about-me/credits'
import SocialMediaContainer from './contact/social-media'

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
      marginLeft: 0,
      alignSelf: 'center',
      textAlign: 'center',
    },
    extra: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      gap: '1em',
      justifyContent: 'center',
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
        <h1>RIORDAN DERVIN ALFREDO</h1>
        <p style={{ color: 'grey', marginTop: '-2rem' }}>{description}</p>
      </div>
      <div style={styles.profile}>
        <PhotoProfile /> {quote}
      </div>
      <AboutText isMobile={isMobile} />
      <SocialMediaContainer />
      <div style={{ alignSelf: 'flex-start' }}>
        <h3>Education</h3>
        <p>PhD in Learning Analytics | Monash University | 2022 - present</p>
        <p>
          Graduate Diploma of Management (Learning) | Altec College, Melbourne |
          2021 - 2022
        </p>
        <p>
          Bachelor of Software Engineering (Honours), H1 | Monash University |
          2016 - 2019
        </p>
        <p>
          Diploma of Engineering (Engineering) | Monash College | 2015 - 2016
        </p>
      </div>

      <div style={styles.extra}>
        <Link href="/pdfs/riordan-resume-academic.pdf" target={'_blank'}>
          Download my Curriculum Vitae (CV) here 📝
        </Link>
        <Link to={'https://riordanalfredo.github.io/me'}>
          Do you want to see my original portfolio? 👀
        </Link>
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
