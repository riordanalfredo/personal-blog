import React from 'react'
import CommentBox from './comment-box'
import { rhythm } from '../../utils/typography'
import MessageMe from '../message-me' // need to use redux

/**
 * Container class
 * @returns
 */
const Comments = () => {
  const comments = [
    {
      name: 'Test',
      date: Date.now(),
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      name: 'Blah',
      date: Date.now(),
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ]

  return (
    <div style={{ marginBottom: rhythm(2.5) }}>
      <h1 align="center">COMMENTS</h1>
      <div>
        <h3 align="center">So, what do you think?</h3>
        <MessageMe />
      </div>
      {comments.length !== 0
        ? comments.map((comment, id) => <CommentBox key={id} data={comment} />)
        : 'Retrieving...'}
    </div>
  )
}

export default Comments
