import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Form from './contact/form'
import SocialMedia from './contact/social-media'
import BuyMeACoffeeButton from '../components/BuyMeACoffeeButton'

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
      maxWidth: 880,
    },
  }

  return (
    <Layout location={location} title={'Riordan Alfredo'}>
      <SEO title="Contact Me" />
      <div style={styles.outer}>
        <h1 align="center">KEEP IN TOUCH</h1>
        <div style={styles.inner}>
          <p style={{ textAlign: 'justify' }}>
            Hi! There is only one step away. Please write down <code>name</code>
            , <code>email</code>, and your <code>message</code> below.
            Alternatively, you may contact me through provided social media
            platforms underneath. I will reply to your queries as soon as I can!
          </p>
          <Form />
          <SocialMedia />
          <BuyMeACoffeeButton />
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
