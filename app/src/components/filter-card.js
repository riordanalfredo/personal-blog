import React, { useState } from 'react'
import './filter-card.css'
import './global.css'
import { Tooltip } from 'react-tooltip'

const FilterCard = ({ categories, id, selectFunction, appTheme }) => {
  const { text, style } = categories[id]
  const [isSelected, setIsSelected] = useState(categories[id].isSelected)

  const selectCategory = () => {
    setIsSelected(!isSelected)
    selectFunction(id)
  }

  const styles = {
    outer: {
      maxWidth: 112,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    outerCircle: {
      width: '18vw',
      height: '18vw',
      maxWidth: 112,
      maxHeight: 112,
      borderRadius: `100%`,
      background: 'linear-gradient(45deg, var(--textTitle2), var(--textTitle))',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    innerCircle: {
      width: '16vw',
      height: '16vw',
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
    width: '12vw',
    height: '12vw',
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

  const selectedStyle = {
    ...styles.outerCircle,
    opacity: 1,
  }
  const nonSelectedStyle = {
    ...styles.outerCircle,
    opacity: 0.3,
  }

  return (
    <div
      id={id}
      style={styles.outer}
      data-tooltip-content={`Click to filter articles by ${id}`}
    >
      <div
        style={categories[id].isSelected ? selectedStyle : nonSelectedStyle}
        className="coin"
      >
        <div style={styles.innerCircle}>
          <button
            id={id}
            style={{
              ...iconSize,
              ...darkIcon,
              // ...(appTheme.isDark ? darkIcon : lightIcon),
            }}
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
      <Tooltip anchorId={id} variant="light" />
    </div>
  )
}
export default FilterCard
