import React from 'react'
import Tags from '../components/tags'
import { Link } from 'gatsby'
import { rhythm } from '../utils/typography'
import './post.css'

const Post = ({ node, title, isNew }) => {
  const styles = {
    article: {
      transition: '0.3s',
      minWidth: 320,
      width: '90vw',
    },
    post: { boxShadow: `none`, color: 'var(--textTitle)' },
    newText: { color: 'var(--highlight)' },
  }
  return (
    <div>
      <Link style={styles.post} to={`${node.fields.slug}`}>
        <article
          key={node.fields.slug}
          style={styles.article}
          className={'box'}
        >
          <header>
            <h3
              className={'text-gradient'}
              style={{ marginBottom: rhythm(1 / 4) }}
            >
              {title}
            </h3>
            <small>
              {node.frontmatter.date}{' '}
              {isNew && <small style={styles.newText}> | NEW ARTICLE 🔥</small>}
            </small>
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
    </div>
  )
}

export default Post
