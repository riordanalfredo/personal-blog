import React, { useState, useEffect } from 'react'
import FilterCard from './filter-card'
import ResetButton from './reset-button'

const Filters = ({ categories, selectCategory, resetFilter }) => {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    // To check if all of the cards have been selected or not
    const obj = { ...categories }
    const arr = Object.keys(obj).map(key => obj[key].isSelected)
    setIsActive(arr.includes(false) ? true : false)
  }, [categories])

  // Styles
  const outerStyle = {
    display: `flex`,
    justifyContent: `space-between`,
    flexWrap: `wrap`,
    paddingTop: `1rem`,
    minWidth: `750px`,
    minHeight: '280px',
    height: `35vh`,
    top: 0,
    zIndex: `1`,
  }

  // Elements

  return (
    <div style={outerStyle} className={'filters'}>
      {Object.keys(categories).map((val, index) => {
        return (
          <FilterCard
            key={index}
            categories={categories}
            id={val}
            selectFunction={selectCategory}
          />
        )
      })}
      <ResetButton isActive={isActive} resetFilter={resetFilter} />
    </div>
  )
}

export default Filters
