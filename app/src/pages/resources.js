import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const BooksListPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const styles = {
    outer: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      wordWrap: 'break-word',
    },
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Recommended Resources" />
      <div style={styles.outer}>
        <h1>RESOURCES</h1>
        <p>
          Here, I will share recommended resources in this educational
          technology field. It is still under development, but it is coming
          soon!
        </p>
      </div>
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
