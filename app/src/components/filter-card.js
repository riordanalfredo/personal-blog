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

  const outerStyle = {
    width: '10vw',
    minWidth: 180,
    height: 250,
    borderRadius: `10px`,
    cursor: 'pointer',
    background: `url(${isDark ? style.imgUrlDark : style.imgUrl})`,
    backgroundColor: 'white',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '80%',
    transition: '0.3s',
  }
  const selectedStyle = {
    ...outerStyle,
    color: 'blue',
    opacity: 1,
  }
  const nonSelectedStyle = {
    ...outerStyle,
    opacity: 0.3,
    // border: '5px solid var(--textNormal)',
  }

  return (
    <button
      id={id}
      style={categories[id].isSelected ? selectedStyle : nonSelectedStyle}
      className="filter-card"
      onClick={selectCategory}
    >
      <p
        style={{ fontFamily: 'Montserrat, sans-serif' }}
        className={categories[id].isSelected ? 'visible' : ''}
      >
        {text}
      </p>
    </button>
  )
}
export default FilterCard
