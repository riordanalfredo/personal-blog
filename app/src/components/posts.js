import React, { Fragment, useEffect } from 'react'
import Post from './post'

const Posts = ({ initPosts, posts, setPostsIds }) => {
  useEffect(() => {
    console.log(initPosts)
    const newInitPosts = { ...initPosts }
    setPostsIds(newInitPosts)
  }, [])

  return (
    <Fragment>
      {!!posts.length &&
        posts.map(({ node }, index) => {
          const title = node.frontmatter.title || node.fields.slug
          return <Post node={node} index={index} title={title} />
        })}
    </Fragment>
  )
}

export default Posts
