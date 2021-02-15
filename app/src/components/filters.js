import React, { useState, useEffect } from 'react'
import FilterCard from './filter-card'
import ResetButton from './reset-button'
import { useMediaQuery, getIsMobileBoolean } from '../utils/mobile'

const Filters = ({ categories, selectCategory, resetFilter, theme }) => {
  const [isActive, setIsActive] = useState(false)
  const [width] = useMediaQuery()
  const isMobile = getIsMobileBoolean(width)

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
      maxWidth: 680,
      width: '100%',
      alignItems: 'center',
    },
  }

  // Elements

  return (
    <div>
      <div style={styles.outer}>
        <div style={styles.icons} className={'filters'}>
          {Object.keys(categories).map((val, index) => {
            return (
              <FilterCard
                key={index}
                isDark={theme.isDark}
                categories={categories}
                id={val}
                selectFunction={selectCategory}
              />
            )
          })}
          {isMobile ? null : (
            <ResetButton isActive={isActive} resetFilter={resetFilter} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Filters
