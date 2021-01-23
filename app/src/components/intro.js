import React from 'react'

const Intro = () => {
  const styles = {
    outer: {
      maxWidth: 500,
      backgroundColor: 'var(--lightBg)',
      padding: '2rem',
      borderBottomLeftRadius: '1rem',
      borderBottomRightRadius: '1rem',
      margin: '0 auto',
    },
    title: {},
    body: {
      textAlign: 'justify',
      textJustify: 'inter-word',
      marginBottom: 0,
    },
  }
  return (
    <div style={styles.outer}>
      <h2 style={styles.title}>
        Welcome!{' '}
        <span role="img" aria-label="congratulations">
          🎉
        </span>
      </h2>
      <p style={styles.body}>
        First of all, thanks for visiting this space{' '}
        <span role="img" aria-label="rocket">
          🚀
        </span>
        ! This personal blog is a place where I put and share all of my
        thoughts, ideas, and opinions. I may include some interesting stories
        that I experienced. I hope you enjoy reading them as much as I do
        writing them{' '}
        <span role="img" aria-label="smile">
          😄
        </span>
        !
      </p>
    </div>
  )
}

export default Intro
