import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ContactPage = ({ data, location }) => {
  return (
    <Layout location={location} title={'BLOG'}>
      <SEO title="Contact Me" />
      <h1 align="center">KEEP IN TOUCH</h1>
      <blockquote>
        Thank you for your eagerness to reaching me out! There are only few
        steps away. Please write down your <code>name</code>, <code>email</code>
        , and<code> message </code> below. I will reply it as soon as I can.
      </blockquote>
    </Layout>
  )
}

export default ContactPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
