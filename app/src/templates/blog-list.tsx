// Gatsby supports TypeScript natively!
import React, { Fragment, useEffect, Provider } from 'react'
import { PageProps, Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Intro from '../components/intro'
import PageNavigation from '../components/page-navigation'
import { useMediaQuery, getIsMobileBoolean } from '../utils/mobile'

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
  const [width] = useMediaQuery()
  const isMobile = getIsMobileBoolean(width)
  const allPosts = data.allMarkdownRemark.edges || []
  const siteTitle = data.site.siteMetadata.title

  const styles = {
    outer: {
      maxWidth: 780,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    } as React.CSSProperties,
    articles: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    } as React.CSSProperties,
    intro: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '65vw',
    } as React.CSSProperties,
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <div style={styles.outer}>
        <div style={isMobile ? {} : styles.intro}>
          <Intro />
          {isMobile ? null : <FiltersContainer />}
        </div>
        <div style={styles.articles}>
          <PostsContainer allPosts={allPosts} />
        </div>
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
