// Gatsby supports TypeScript natively!
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Intro from '../components/intro'
import { useMediaQuery, getIsMobileBoolean } from '../utils/mobile'
import 'react-tooltip/dist/react-tooltip.css'

import ReactGA from 'react-ga4'

import PostsContainer from '../state/containers/posts'

// type PageContext = {
//   currentPage: number
//   numPages: number
// }
// type Data = {
//   site: {
//     siteMetadata: {
//       title: string
//     }
//   }
//   allMarkdownRemark: {
//     edges: {
//       node: {
//         excerpt: string
//         frontmatter: {
//           title: string
//           date: string
//           description: string
//           isNew: boolean
//           categories: [string]
//         }
//         fields: {
//           slug: string
//         }
//       }
//     }[]
//   }
// }

ReactGA.initialize('G-5CWRTWJN6E')

const BlogIndex = ({ data, location }) => {
  const [width] = useMediaQuery()
  const isMobile = getIsMobileBoolean(width)
  const allPosts = data.allMarkdownRemark.edges || []
  const siteTitle = data.site.siteMetadata.title

  const styles = {
    articles: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    },
    intro: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      maxWidth: '880px',
      width: '100%',
    },
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All articles" />
      <div>
        <div style={isMobile ? {} : styles.intro}>
          <Intro />
        </div>
        <div style={styles.articles}>
          <PostsContainer allPosts={allPosts} />
        </div>
      </div>
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
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM YYYY")
            title
            isNew
            description
            categories
          }
        }
      }
    }
  }
`
