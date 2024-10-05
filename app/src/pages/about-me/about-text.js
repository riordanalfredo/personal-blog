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
        complexity that allows me to channel my creativity in developing tools
        to empower people that are safe, reliable, and trustworthy. The true
        challenge is not only from the technology side but also from
        understanding the purpose and stakeholder needs. I believe the
        sustainable connections between these two concepts could be achieved
        through involvement of learning and education. My interests &
        proficiencies are in the design and development process, especially in
        the software system ( architecture, design patterns, quality assurance),
        and human dynamics of educational technologies.
      </p>
      <p>
        I am currently investigating "Human-Centred Design in Learning Analytics
        Systems" as a Doctor of Philosophy candidate at Monash University. My
        research topics and interests are in{' '}
        <code>
          human-centered AI, multimodal learning analytics, learning analytics
          dashboard and design.
        </code>{' '}
        . Apart from my doctoral study, I am teaching several core software
        engineering units at the Faculty of IT, Monash University and I attained
        <i> "Sessional Teaching Associate Award"</i> in 2021.
        <br />
      </p>
    </div>
  )
}

export default AboutText
