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
  const styles = {
    outer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    icons: {
      display: `flex`,
      justifyContent: `space-between`,
      padding: `1rem`,
      minWidth: `300px`,
      maxWidth: 700,
      width: '100%',
      alignItems: 'center',
    },
    title: { marginBottom: 0 },
  }

  // Elements

  return (
    <div style={styles.outer}>
      {/* <h2 style={styles.title}>Filter Articles:</h2> */}
      <div style={styles.icons} className={'filters'}>
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
    </div>
  )
}

export default Filters
