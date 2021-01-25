import React from 'react'

const Subtitle = ({style}) => {
    const textStyle = {
        // fontStyle:'italic',
        color: 'darkgrey',
        fontFamily: 'Montserrat, sans-serif',
        marginBottom: 0,
        ...style
    }
    return(
    <div>
      <p style={textStyle}>
        The journal of a full-stack software engineer and software educator.
      </p>
    </div>)
}
export default Subtitle