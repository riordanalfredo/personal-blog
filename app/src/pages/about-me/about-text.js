import React from 'react'

const AboutText = ({ isMobile }) => {
  const styles = {
    desktop: {
      minWidth: 300,
      width: '40vw',
      marginLeft: '3rem',
      textAlign: 'justify',
      textJustify: 'inner-word',
    },
    mobile: {
      width: '100%',
      textAlign: 'justify',
      textJustify: 'inner-word',
    },
  }
  return (
    <div style={isMobile ? styles.mobile : styles.desktop}>
      <p>
        Software engineering has always fascinated me. It covers all levels of
        complexity that satisfies my hunger for knowledge. The true challenge
        comes not only from the technology side but also from understanding
        business needs. he true challenge comes not only from the technology
        sides but also from understanding business needs. I am proficient in the
        design and development process, especially in the software architecture
        (<code>design patterns, quality assurance, and human dynamics</code>)
        with 2-years industry experience.
      </p>
      <p>
        I received a full-ride scholarship to study data science &amp; AI area
        as a Doctor of Philosophy student at Monash University. My research was
        about <code>meta-learning &amp; recommender systems</code> topics. Now,
        I am a teaching associate for software engineering units at the Faculty
        of IT, Monash University. I love connecting with all of my students
        aside from just delivering content. At the same time, I am working on
        various software projects with{' '}
        <code>
          ReactJS, Redux, MobX, Quantlib, NodeJS, Gatsby, MongoDB, PostgreSQL,
          and Django frameworks
        </code>
        .
        <br />
      </p>
    </div>
  )
}

export default AboutText
