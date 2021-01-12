import React from 'react'

const Subtitle = () => {
    const textStyle = {
        fontStyle:'italic',
        color: 'darkgrey',
        fontFamily: 'Montserrat, sans-serif'
    }
    return(
    <div>
      <p style={textStyle}>
        The journal of a full-stack software engineer and software educator.
      </p>
    </div>)
}
export default Subtitle