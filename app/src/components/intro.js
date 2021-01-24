import React from 'react'
import { Link } from 'gatsby'

const Intro = () => {
  const styles = {
    outer: {
      maxWidth: 550,
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
        Hello and welcome ICT-business enthusiasts{' '}
        <span role="img" aria-label="rocket">
          🚀
        </span>
        ! This blog is my personal journal about my journey to be a business
        leader in the information, computer, and technology industry. It
        contains my personal thoughts, ideas, stories, and facts in busines,
        software, and learning topics. Please don't hesitate to{' '}
        <Link to="/contact">contact me</Link> because I am open to any
        interesting opportunities (talks, teaching, development contract,
        partnership, etc.). I hope you enjoy reading them as much as I do
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
