import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const BooksListPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Recommended resources" />
      <h1>RESOURCES</h1>
      <p>
        Here, I will share open-source resources that helps you learning
        something new. It is coming soon!
      </p>
    </Layout>
  )
}

export default BooksListPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
