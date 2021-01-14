// Gatsby supports TypeScript natively!
import React, { Fragment } from 'react'
import { PageProps, Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Filters from '../containers/filters'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'
import Tags from '../components/tags'
import { filterCategories } from '../utils/filter-categories'

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
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const { currentPage, numPages } = pageContext

  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Filters />
      {posts.map(({ node }, index) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <Fragment key={index}>
            <Link
              style={{ boxShadow: `none`, color: 'var(--textTitle)' }}
              to={node.fields.slug}
            >
              <article
                key={node.fields.slug}
                style={{ transition: '300ms all' }}
                className={'box'}
              >
                <header>
                  <h3
                    style={{
                      color: `inherit`,
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    {title}
                  </h3>
                  <small>{node.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                  <Tags data={node.frontmatter.categories} />
                </section>
              </article>
            </Link>
          </Fragment>
        )
      })}
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
            {!isFirst && (
              <Link to={prevPage} rel="prev">
                ← Previous Page
              </Link>
            )}
          </li>
          <li>
            {!isLast && (
              <Link to={nextPage} rel="next">
                Next Page →
              </Link>
            )}
          </li>
        </ul>
      </nav>
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
