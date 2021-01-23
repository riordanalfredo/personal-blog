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

  const outerStyle = {
    width: 150,
    minWidth: 100,
    height: 150,
    borderRadius: `100%`,
    cursor: 'pointer',
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${style.imgUrl})`,
    backgroundPosition: 'center top',
    backgroundSize: 'cover',
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
