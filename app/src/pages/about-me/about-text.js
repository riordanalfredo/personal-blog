import React from 'react'

const AboutText = ({ isMobile }) => {
  const styles = {
    desktop: {
      minWidth: 300,
      width: '550px',
      marginLeft: '2rem',
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
        with a couple years of industry experience.
      </p>
    </div>
  )
}

export default AboutText
