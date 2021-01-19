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

  return (
    <Layout location={location} title="BLOG">
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        // image = {post.frontmatter.image}
      />
      <article>
        <header>
          <h1
            style={{
              marginBottom: 0,
              textAlign: 'center',
            }}
          >
            {post.frontmatter.title}
          </h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
              textAlign: 'center',
            }}
          >
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
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <footer>
          <Bio />
          <div>
            <AdSense.Google
              client={process.env.ADSENSE_ID}
              slot="7806394673"
              style={{ width: 500, height: 300 }}
              format=""
            />
          </div>
        </footer>
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}
              >
                <small>Older Post</small>
                <Link to={`/posts${previous.fields.slug}`} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              </div>
            )}
          </li>
          <li>
            {next && (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                }}
              >
                <small>Newer Post</small>
                <Link to={`/posts${next.fields.slug}`} rel="next">
                  {next.frontmatter.title} →
                </Link>
              </div>
            )}
          </li>
        </ul>
      </nav>
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
