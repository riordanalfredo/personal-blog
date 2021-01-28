import React, { useState, useEffect } from 'react'
import './filter-card.css'
import './global.css'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

const FilterCard = ({ categories, id, selectFunction }) => {
  const { text, style } = categories[id]
  const [isSelected, setIsSelected] = useState(categories[id].isSelected)
  const [isDark, setIsDark] = useState(false)

  const selectCategory = () => {
    setIsSelected(!isSelected)
    selectFunction(id)
  }
  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme !== null) {
      setIsDark(theme === 'dark' ? true : false)
    }
  }, [])

  const styles = {
    outer: {
      width: 112,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    outerCircle: {
      width: '10vw',
      height: '10vw',
      maxWidth: 112,
      maxHeight: 112,
      borderRadius: `100%`,
      background: 'linear-gradient(45deg, var(--textTitle2), var(--textTitle))',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }
  const innerCircle = {
    width: '9vw',
    height: '9vw',
    maxWidth: 100,
    maxHeight: 100,
    borderRadius: `100%`,
    cursor: 'pointer',
    background: `url(${isDark ? style.imgUrlDark : style.imgUrl})`,
    backgroundColor: 'white',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '80%',
    transition: '0.3s',
  }
  const selectedStyle = {
    ...innerCircle,
    opacity: 1,
  }
  const nonSelectedStyle = {
    ...innerCircle,
    opacity: 0.7,
  }

  return (
    <div style={styles.outer}>
      <div style={styles.outerCircle} className="coin">
        <button
          id={id}
          style={categories[id].isSelected ? selectedStyle : nonSelectedStyle}
          onClick={selectCategory}
        />
      </div>
      <p
        style={{
          margin: '0.1rem 0 0 0 ',
          fontFamily: 'Montserrat, sans-serif',
        }}
        className={categories[id].isSelected ? 'visible' : ''}
      >
        {text}
      </p>
    </div>
  )
}
export default FilterCard
