import React, { Fragment, useEffect, useState } from 'react'
import Post from './post'

const Posts = ({ allPosts, posts, categories, setPostsCategories }) => {
  const [activePostsIndices, setActivePostIndices] = useState(
    allPosts.map((_, i) => i)
  )

  useEffect(() => {
    const newInitPosts = [...allPosts]
    setPostsCategories(newInitPosts)
  }, [])

  // If there are any changes in categories
  useEffect(() => {
    var arr = []
    // let res = activePostsIndices
    Object.keys(categories).forEach(
      c => {
        if (categories[c].isSelected == true) arr.push(posts[c])
      } // push all related
    )

    let res = arr.reduce(function (a, b) {
      return b.map(function (e, i) {
        return a[i] instanceof Object ? a[i] : e
      })
    }, [])

    if (res.length > 0) setActivePostIndices(res)
  }, [categories])

  return (
    <Fragment>
      {!!allPosts.length &&
        activePostsIndices
          .map(i => allPosts[i])
          .filter(e => typeof e !== 'undefined')
          .map(({ node }, index) => {
            const title = node.frontmatter.title || node.fields.slug
            return <Post node={node} index={index} title={title} />
          })}
    </Fragment>
  )
}

export default Posts
