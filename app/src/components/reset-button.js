import React from 'react'
import { useMediaQuery, getIsMobileBoolean } from '../utils/mobile'

const ResetButton = ({ isActive, resetFilter }) => {
  const [width] = useMediaQuery()
  const isMobile = getIsMobileBoolean(width)

  const defaultStyle = {
    alignSelf: `center`,
    textOrientation: isMobile ? '' : 'upright',
    writingMode: isMobile ? '' : `vertical-lr`,
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
