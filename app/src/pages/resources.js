import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const BooksListPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Recommended Resources" />
      <h1>RESOURCES</h1>
      <p>
        Here, I will share recommended resources in this educational technology
        field. It is still under development, but it is coming soon!
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
