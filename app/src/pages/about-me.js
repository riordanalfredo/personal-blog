import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

// Sections
import creditsData from './about-me/credits-data'
import PhotoProfile from './about-me/photo-profile'
import AboutText from './about-me/about-text'
import CreditSection from './about-me/credits'
import SocialMedia from './about-me/social-media'

const AboutPage = ({ data, location }) => {
  const description = data.site.siteMetadata.description
  return (
    <Layout location={location} title={'BLOG'}>
      <SEO title="A software engineer &amp; educator" />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1 align="center">RIORDAN DERVIN ALFREDO</h1>
        <p style={{ color: 'grey' }}>{description}</p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <PhotoProfile />
          <AboutText />
        </div>
        <blockquote style={{ marginBottom: 0 }}>
          My crafts are synthesising software engineering and data science
          knowledge, along with the entrepreneurial mindset to advance our
          society further.
        </blockquote>
        {/* <SocialMedia /> */}
      </div>
      <CreditSection data={creditsData} />
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
