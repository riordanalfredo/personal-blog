import React from 'react'
import Moment from 'react-moment'

const CommentBox = ({ data }) => {
  const { name = '', date = Date.now(), message = '' } = data
  const styles = {
    outer: {
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--lightBg)',
      borderRadius: '1rem',
      padding: '1rem',
      margin: '1rem 0',
    },
    profile: {
      color: 'dark-grey',
      marginBottom: '1rem',
    },
    text: {
      marginBottom: 0,
    },
  }
  return (
    <div style={styles.outer}>
      <small style={styles.profile}>
        <Moment date={date} format={'MMMM DD,YYYY - HH:mm'} /> by{' '}
        <b style={{ color: 'var(--textTitle)' }}>{name}</b>
      </small>
      <p style={styles.text}>{message}</p>
    </div>
  )
}

export default CommentBox
