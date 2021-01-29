import React, { useState } from 'react'
import './filter-card.css'
import './global.css'

const FilterCard = ({ categories, id, selectFunction, isDark }) => {
  const { text, style } = categories[id]
  const [isSelected, setIsSelected] = useState(categories[id].isSelected)

  const selectCategory = () => {
    setIsSelected(!isSelected)
    selectFunction(id)
  }

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
    innerCircle: {
      width: '9vw',
      height: '9vw',
      maxWidth: 100,
      maxHeight: 100,
      borderRadius: `100%`,
      cursor: 'pointer',
      backgroundColor: 'var(--bg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }

  const iconSize = {
    width: '7vw',
    height: '7vw',
    maxWidth: 80,
    maxHeight: 80,
    borderRadius: `100%`,
    transition: '0.3s',
    cursor: 'pointer',
  }
  const darkIcon = {
    background: `url(${style.imgUrlDark})`,
    backgroundColor: '#1e1e1e',
  }
  const lightIcon = {
    background: `url(${style.imgUrl})`,
  }

  const buttonStyle = {
    ...iconSize,
    ...(isDark ? darkIcon : lightIcon),
  }
  const selectedStyle = {
    ...styles.outerCircle,
    opacity: 1,
  }
  const nonSelectedStyle = {
    ...styles.outerCircle,
    opacity: 0.3,
  }

  return (
    <div style={styles.outer}>
      <div
        style={categories[id].isSelected ? selectedStyle : nonSelectedStyle}
        className="coin"
      >
        <div style={styles.innerCircle}>
          <button
            id={id}
            style={buttonStyle}
            aria-label="Select Category"
            onClick={selectCategory}
          />
        </div>
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
