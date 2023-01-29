import React from 'react'

const AboutText = ({ isMobile }) => {
  const styles = {
    desktop: {
      minWidth: 300,
      textAlign: 'justify',
      textJustify: 'inner-word',
    },
    mobile: {
      textAlign: 'left',
      textJustify: 'inner-word',
      padding: '1rem',
    },
    // secondText: {
    //   textAlign: 'justify',
    //   textJustify: 'inner-word',
    // },
  }
  return (
    <div style={isMobile ? styles.mobile : styles.desktop}>
      <p>
        Software engineering has always fascinated me. It covers all levels of
        complexity and allows me to develop empowering tools for stakeholders.
        The true challenge is not only from the technology side but also from
        understanding business goals and needs. I believe the sustainable
        connections between these two concepts could be achieved through
        involvement of learning and education. My interests & proficiencies are
        in the design and development process, especially in the software system
        (<code>design patterns, quality assurance, and human dynamics</code>) of
        educational technologies.
      </p>
      <p>
        I received a full-ride scholarship (tuition fee and stipend) to study
        "Human-Centred Learning Analytics" as a Doctor of Philosophy student at
        Monash University. My research is about{' '}
        <code>
          human-centered design, multimodal learning analytics, and learning
          design
        </code>{' '}
        topics. Now, I am a teaching associate for core software engineering
        units at the Faculty of IT, Monash University. Moreover, I am working on
        various software projects with{' '}
        <code>
          ReactJS, Redux, MobX, Quantlib, NodeJS, Gatsby, MongoDB, PostgreSQL,
          and Django frameworks.
        </code>
        <br />
      </p>
    </div>
  )
}

export default AboutText
