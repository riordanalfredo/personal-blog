import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ProjectsPage = ({ data, location }) => {
  return (
    <Layout location={location} title={'Riordan Alfredo'}>
      <SEO title="Everything about Riordan" />
      <h1> Projects Page </h1>
    </Layout>
  )
}

export default ProjectsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
