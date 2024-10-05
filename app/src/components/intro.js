import React from 'react'
import { Link } from 'gatsby'

const Intro = () => {
  const styles = {
    outer: {
      maxWidth: 880,
      backgroundColor: 'var(--lightBg)',
      padding: '2rem',
      borderBottomLeftRadius: '1rem',
      borderBottomRightRadius: '1rem',
      margin: '0 auto',
    },
    title: {
      textAlign: 'center',
      marginTop: 0,
    },
    body: {
      textAlign: 'left',
      textJustify: 'inter-word',
      marginBottom: 0,
    },
  }

  return (
    <div style={styles.outer}>
      {/* <Fade cascade><h1 style={styles.title}>WELCOME</h1></Fade> */}

      <p style={styles.body}>
        Welcome to my personal blog{' '}
        <span role="img" aria-label="rocket">
          🚀
        </span>
        ! I share my research, thoughts, and stories that are categorised into
        'education', 'technology', and 'community' topics. Please{' '}
        <Link to="/contact">contact me</Link> for any questions or exciting
        opportunities (guest talks, programming, teaching, partnership, etc.). I
        hope you enjoy reading these articles as much as I do writing them!
      </p>
    </div>
  )
}

export default Intro
