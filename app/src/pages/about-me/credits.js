import React from 'react'

const CreditSection = ({ data }) => {
  const outerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: 20,
    // justifyItems: 'center',
  }
  return (
    <div>
      <h3 style={{ color: 'var(--textTitle)' }}>Credits/References </h3>
      <div style={outerStyle}>
        {data.map((d, index) => {
          return (
            <div key={index}>
              <span role="img" aria-label="sloth emoji">
                🦥
              </span>{' '}
              <a href={d.link}>{d.text}</a>
              <br />
              <small>{!!d.comment ? d.comment : ''}</small>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CreditSection
