import React, { useEffect, useState } from 'react'
import { Toggler } from './toggler'

const TogglerContainer = ({ setIsDark }) => {
  const [themeBool, setThemeBool] = useState(false) // false is 'light'
  useEffect(() => {
    setIsDark(themeBool)
  }, [themeBool, setIsDark])

  return <Toggler setThemeBool={setThemeBool} />
}

export default TogglerContainer
