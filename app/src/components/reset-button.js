import React from 'react'

const ResetButton = ({ isActive, resetFilter }) => {
  const defaultStyle = {
    alignSelf: `center`,
    textOrientation: 'upright',
    writingMode: `vertical-lr`,
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
    <small
      style={isActive ? activeStyle : inactiveStyle}
      onClick={resetFilter}
      onKeyDown={resetFilter}
      tabIndex={0}
      role="button"
    >
      SELECT ALL
    </small>
  )
}

export default ResetButton
