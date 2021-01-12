import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = ({ data, location }) => {
  return (
    <Layout location={location} title={'BLOG'}>
      <SEO title="Everything about Riordan" />
      <h1 align="center">RIORDAN DERVIN ALFREDO</h1>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
