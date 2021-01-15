// Gatsby supports TypeScript natively!
import React, { Fragment, useEffect } from 'react'
import { PageProps, Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import PageNavigation from '../components/page-navigation'

import FiltersContainer from '../containers/filters'
import PostsContainer from '../containers/posts'

type PageContext = {
  currentPage: number
  numPages: number
}
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

const BlogIndex = ({
  data,
  location,
  pageContext,
}: PageProps<Data, PageContext>) => {
  const initPosts = data.allMarkdownRemark.edges
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
        <PostsContainer initPosts={initPosts} />
      </div>
      {/* <PageNavigation context={pageContext} /> */}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
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
