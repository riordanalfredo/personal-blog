import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Form from './contact/form'
import SocialMedia from './about-me/social-media'

const ContactPage = ({ data, location }) => {
  const styles = {
    outer: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    inner: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  }

  return (
    <Layout location={location} title={'BLOG'}>
      <SEO title="Contact Me" />
      <div style={styles.outer}>
        <h1 align="center">KEEP IN TOUCH</h1>
        <div style={styles.inner}>
          <p
            style={{
              width: '80%',
              fontFamily: 'Montserrat, sans-serif',
              textAlign: 'justify',
            }}
          >
            Hello, thank you for the willingness to reaching me out! There are
            only few steps away. Please write down <code>name</code>,{' '}
            <code>email</code>, and your <code>message</code> below.
            Alternatively, you may contact me through provided social media
            platforms. I will reach out to you ASAP!
          </p>
          <Form />
          <SocialMedia />
        </div>
      </div>
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
