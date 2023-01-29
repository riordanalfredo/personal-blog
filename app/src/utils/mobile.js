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

const mobileScrolling = (id, isMobile) => {
  let prevScrollpos = window.pageYOffset
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset
    if (
      document.getElementById(id) !== null &&
      document.getElementById('backButton') !== null
    ) {
      if (prevScrollpos > currentScrollPos || currentScrollPos < 80) {
        document.getElementById(id).style.top = 0
        document.getElementById('backButton').style.top = isMobile ? '70px' : 0
      } else {
        document.getElementById(id).style.top = '-80px'
        document.getElementById('backButton').style.top = '-100px'
      }
    }
    prevScrollpos = currentScrollPos
  }
}

export { useMediaQuery, getIsMobileBoolean, mobileScrolling }
