import React from 'react'
import { Link } from 'gatsby'
import Fade from 'react-reveal/Fade'

const Intro = () => {
  const styles = {
    outer: {
      maxWidth: 700,
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
      textAlign: 'justify',
      textJustify: 'inter-word',
      marginBottom: 0,
    },
    welcome: {
      width: '65vw',
    },
  }

  return (
    <div style={styles.outer}>
      <Fade cascade>
        <h1 style={styles.title}>WELCOME</h1>
      </Fade>
      <p style={styles.body}>
        Hello and welcome to my space{' '}
        <span role="img" aria-label="rocket">
          🚀
        </span>
        ! This is my personal journal about{' '}
        <b>
          <i>
            my journey to be a business leader in the information, computer, and
            technology (ICT) industry.
          </i>
        </b>{' '}
        It contains my thoughts, ideas, stories, and facts that are categorised
        into business, software, and learning topics. Please don't hesitate to{' '}
        <Link to="/contact">contact me</Link> for any interesting opportunities
        (talks, teaching, development contract, and etc.). I hope you enjoy
        reading them as much as I do writing them{' '}
        <span role="img" aria-label="smile">
          😄
        </span>
        !
      </p>
    </div>
  )
}

export default Intro
