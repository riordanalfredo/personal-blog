// Gatsby supports TypeScript natively!
import React, { Fragment, useEffect } from 'react'
import { PageProps, Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import PageNavigation from '../components/page-navigation'

import FiltersContainer from '../state/containers/filters'
import PostsContainer from '../state/containers/posts'

// type PageContext = {
//   currentPage: number
//   numPages: number
// }
type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string
        frontmatter: {
          title: string
          date: string
          description: string
          categories: [string]
        }
        fields: {
          slug: string
        }
      }
    }[]
  }
}

const BlogIndex = ({ data, location }: PageProps<Data>) => {
  const allPosts = data.allMarkdownRemark.edges || []
  const siteTitle = data.site.siteMetadata.title

  const styles = {
    outer: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    } as React.CSSProperties,
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <FiltersContainer />
      <div style={styles.outer}>
        <PostsContainer allPosts={allPosts} />
      </div>
      {/* <PageNavigation context={pageContext} /> */}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            categories
          }
        }
      }
    }
  }
`
