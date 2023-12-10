import React from 'react'
import FilterCard from './filter-card'

const Filters = ({ categories, selectCategory, appTheme }) => {
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
            categories={categories}
            // appTheme={appTheme}
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
