import React, { Fragment, useEffect, useState } from 'react'
import Post from './post'
import './post.css'

const Posts = ({ allPosts, posts, categories, setPostsCategories }) => {
  const allPostsIndices = allPosts.map((_, i) => i) // [0,1,2,..,N]
  const [activePostsIndices, setActivePostIndices] = useState(allPostsIndices)

  // initial input
  // TODO: I think it is not optimal, I believe I can put it somewhere else...
  useEffect(() => {
    const newInitPosts = [...allPosts]
    setPostsCategories(newInitPosts)
  }, [allPosts, setPostsCategories])

  // If there are any changes in categories, it will select posts accordingly
  // TODO: Need to maintain these indices in redux to avoid exhaustive deps.
  useEffect(() => {
    let arr = []
    let isNotSelectedCounter = 0
    const categoryKeys = Object.keys(categories)
    // push all related post
    categoryKeys.forEach(c => {
      if (categories[c].isSelected === true) {
        arr.push(posts[c])
      } else {
        isNotSelectedCounter += 1
      }
    })
    // flatten and then sort posts
    const result = [...new Set(arr.flat())].sort()

    // if result is empty, print all
    setActivePostIndices(
      result.length > 0
        ? result
        : isNotSelectedCounter === 4
        ? []
        : allPostsIndices
    )
  }, [categories])

  const currentPosts = activePostsIndices
    .map(i => allPosts[i])
    .filter(e => typeof e !== 'undefined')

  return (
    <Fragment>
      <h1 style={{ margin: 0 }}>ARTICLES</h1>
      {!!currentPosts.length ? (
        currentPosts.map(({ node }, index) => {
          const title = node.frontmatter.title || node.fields.slug
          return <Post node={node} index={index} title={title} />
        })
      ) : (
        <h3 className={'text-gradient'}>
          Nothing to see here, please select another category{' '}
          <span role="img" aria-label="investigate">
            😊
          </span>
        </h3>
      )}
    </Fragment>
  )
}

export default Posts
