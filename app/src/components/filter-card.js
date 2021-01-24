import React, { useState } from 'react'
import './filter-card.css'
import './global.css'

const FilterCard = ({ categories, id, selectFunction }) => {
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
      width: 112,
      height: 112,
      borderRadius: `100%`,
      background: 'linear-gradient(45deg, var(--textTitle2), var(--textTitle))',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }
  const innerCircle = {
    width: 100,
    height: 100,
    borderRadius: `100%`,
    cursor: 'pointer',
    background: `url(${style.imgUrl})`,
    backgroundColor: 'white',
    color: 'red',
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
        style={{ margin: '0.5rem 0', fontFamily: 'Montserrat, sans-serif' }}
        className={categories[id].isSelected ? 'visible' : ''}
      >
        {text}
      </p>
    </div>
  )
}
export default FilterCard
