import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'
import AdSense from 'react-adsense'

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
      flexWrap: `wrap`,
      justifyContent: `space-between`,
      listStyle: `none`,
      padding: 0,
    },
    prev: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    next: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
    },
    info: {
      ...scale(-1 / 5),
      display: `block`,
      marginBottom: rhythm(1),
      textAlign: 'center',
    },
    ads: {
      textAlign: 'center',
      margin: '2rem 0',
    },
  }

  return (
    <Layout location={location} title="BLOG">
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        // image = {post.frontmatter.image}
      />
      <article>
        <header>
          <h1 style={styles.h1}>{post.frontmatter.title}</h1>
          <p style={styles.info}>
            {post.frontmatter.date} | Tags:&nbsp;
            {post.frontmatter.categories.map((e, index) => (
              <span>
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
      <nav>
        <ul style={styles.navigation}>
          <li>
            {previous && (
              <div style={styles.prev}>
                <small>Older Post</small>
                <Link to={`/posts${previous.fields.slug}`} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              </div>
            )}
          </li>
          <li>
            {next && (
              <div style={styles.next}>
                <small>Newer Post</small>
                <Link to={`/posts${next.fields.slug}`} rel="next">
                  {next.frontmatter.title} →
                </Link>
              </div>
            )}
          </li>
        </ul>
      </nav>
      <div style={styles.ads}>
        <small>
          I attached a small advertisement below to support this blog. Thank you
          for visiting 🙏
        </small>
        <AdSense.Google
          client={process.env.GATSBY_ADSENSE_CLIENT_ID}
          slot="6679828929"
          style={{ display: 'block' }}
          format="auto"
          responsive="true"
        />
      </div>{' '}
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
