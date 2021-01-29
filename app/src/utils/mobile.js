import { useLayoutEffect, useState } from 'react'

const useMediaQuery = () => {
  const [screenSize, setScreenSize] = useState([0, 0])

  useLayoutEffect(() => {
    function updateScreenSize() {
      setScreenSize([window.innerWidth, window.innerHeight])
    }
    window.addEventListener('resize', updateScreenSize)
    updateScreenSize()
    return () => window.removeEventListener('resize', updateScreenSize)
  }, [])

  return screenSize
}

const getIsMobileBoolean = width => {
  return width <= 1079 ? true : false
}

export { useMediaQuery, getIsMobileBoolean }
