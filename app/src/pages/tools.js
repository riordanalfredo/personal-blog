import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const ToolsPage = ({ data, location }) => {
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
      <SEO title="Recommended Tools" />
      <div style={styles.outer}>
        <h1>TOOLS</h1>
        <p>
          I will share practical tools that can help you understand learning
          process and teaching practices. Currently, it is still under
          development. Stay tuned!
        </p>
      </div>
    </Layout>
  )
}

export default ToolsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
