import React from 'react'

const ResetButton = ({ isActive, resetFilter }) => {
  const defaultStyle = {
    alignSelf: `center`,
    textOrientation: 'upright',
    writingMode: 'vertical-lr',
    fontFamily: 'Montserrat, sans-serif',
    margin: '0',
  }
  const inactiveStyle = {
    ...defaultStyle,
    cursor: 'default',
    color: 'darkgrey',
    opacity: 0.5,
  }
  const activeStyle = {
    ...defaultStyle,
    color: `var(--textNormal)`,
    cursor: `pointer`,
  }

  return (
    <p
      style={isActive ? activeStyle : inactiveStyle}
      onClick={resetFilter}
      onKeyDown={resetFilter}
      tabIndex={0}
      role="button"
    >
      SELECT ALL
    </p>
  )
}

export default ResetButton
