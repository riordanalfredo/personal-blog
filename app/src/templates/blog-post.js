import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext
  const styles = {
    h1: {
      marginBottom: 0,
      textAlign: 'center',
    },
    navigation: {
      display: `flex`,
      flexWrap: 'inline-wrap',
      justifyContent: `space-between`,
      listStyle: `none`,
      padding: 0,
      margin: 0,
      width: '100%',
    },
    prev: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      maxWidth: 350,
    },
    next: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      textAlign: 'right',
      maxWidth: 350,
    },
    info: {
      ...scale(-1 / 5),
      display: `block`,
      marginBottom: rhythm(1),
      textAlign: 'center',
    },
    article: { width: '65vw', minWidth: 310, maxWidth: 780 },
  }

  return (
    <Layout location={location} title="RIORDAN ALFREDO">
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        // image = {post.frontmatter.image}
      />
      <article style={styles.article}>
        <header>
          <h1 style={styles.h1}>{post.frontmatter.title}</h1>
          <p style={styles.info}>
            {post.frontmatter.date} | Tags:&nbsp;
            {post.frontmatter.categories.map((e, index) => (
              <span key={index}>
                {index === 0 ? '' : ', '}
                <code>{e}</code>
              </span>
            ))}
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr style={{ marginBottom: rhythm(1) }} />
        <footer>
          <Bio />
        </footer>
      </article>
      <nav style={{ alignSelf: 'stretch' }}>
        <ul style={styles.navigation}>
          <li>
            {previous && (
              <div style={styles.prev}>
                <small>Older Post</small>
                <Link
                  to={`${previous.fields.slug}`}
                  style={{ boxShadow: 'none' }}
                  rel="prev"
                >
                  ← {previous.frontmatter.title}
                </Link>
              </div>
            )}
          </li>
          <li>
            {next && (
              <div style={styles.next}>
                <small>Newer Post</small>
                <Link
                  to={`${next.fields.slug}`}
                  style={{ boxShadow: 'none' }}
                  rel="next"
                >
                  {next.frontmatter.title} →
                </Link>
              </div>
            )}
          </li>
        </ul>
      </nav>
      {/* TODO: place ads here after I already have strong contents <Ads /> */}
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        categories
      }
    }
  }
`
