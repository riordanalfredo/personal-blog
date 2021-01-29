import React from 'react'

const Tags = ({ data }) => {
  const innerStyle = {
    borderRadius: '1rem',
    border: '1px solid grey',
    margin: '0 1px 0 1px',
    textAlign: 'center',
    minWidth: '4rem',
    padding: '0 0.5rem',
  }

  const outerStyle = {
    display: `flex`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    flexWrap: 'wrap',
  }

  return (
    <div style={outerStyle}>
      {data.map((item, index) => {
        return (
          <div key={index} style={innerStyle}>
            <span style={{ fontSize: '70%' }}>{item}</span>
          </div>
        )
      })}
    </div>
  )
}

export default Tags
