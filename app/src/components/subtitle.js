import React from 'react'

const Subtitle = ({ style }) => {
  const textStyle = {
    // fontStyle:'italic',
    color: 'darkgrey',
    fontFamily: 'Montserrat, sans-serif',
    marginBottom: 0,
    ...style,
  }
  return (
    <div>
      <p style={textStyle}>Educational Software Engineer</p>
    </div>
  )
}
export default Subtitle
