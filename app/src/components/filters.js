import React from 'react'
import FilterCard from './filter-card'

const Filters = ({ categories, selectCategory, resetFilter, theme }) => {
  // Styles
  const styles = {
    outer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '1rem 0',
    },
    icons: {
      display: `flex`,
      justifyContent: `space-between`,
      padding: `1rem`,
      minWidth: `300px`,
      maxWidth: 780,
      width: '100%',
      alignItems: 'center',
    },
  }

  // Elements

  return (
    // <div style={styles.outer}>
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
    </div>
    // </div>
  )
}

export default Filters
