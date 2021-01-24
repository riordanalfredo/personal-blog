import React from 'react'
import { Link } from 'gatsby'

const Intro = () => {
  const styles = {
    outer: {
      maxWidth: 650,
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
        Hello and welcome to my space{' '}
        <span role="img" aria-label="rocket">
          🚀
        </span>
        ! This blog is my personal journal about my journey to be a business
        leader in the information, computer, and technology (ICT) industry. It
        contains my personal thoughts, ideas, stories, and facts that are
        categorised into business, software, and learning topics. Please don't
        hesitate to <Link to="/contact">contact me</Link> for any interesting
        opportunities (talks, teaching, development contract etc.). I hope you
        enjoy reading them as much as I do writing them.
        <span role="img" aria-label="smile">
          😄
        </span>
        !
      </p>
    </div>
  )
}

export default Intro
