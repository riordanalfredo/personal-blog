import React, { Fragment } from 'react'
import Tags from '../components/tags'
import { Link } from 'gatsby'
import { rhythm } from '../utils/typography'

const Post = ({ node, index, title }) => {
  const styles = {
    article: {
      transition: '0.3s',
      minWidth: 320,
    },
  }
  return (
    <Fragment key={index}>
      <Link
        style={{ boxShadow: `none`, color: 'var(--textTitle)' }}
        to={`${node.fields.slug}`}
      >
        <article
          key={node.fields.slug}
          style={styles.article}
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
}

export default Post
