import React, { useState, useEffect } from 'react'
import FilterCard from '../components/filter-card'
import ResetButton from '../components/reset-button'

const Filters = ({ data }) => {
  const [categories, setCategories] = useState(data) //TODO: refactor it to use MOBX Store
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const obj = { ...categories }
    const arr = Object.keys(obj).map(key => obj[key].isSelected)
    setIsActive(arr.includes(false) ? true : false)
  }, [categories])

  const resetFilter = () => {
    const obj = { ...categories } // make a copy
    Object.keys(obj).forEach(key => (obj[key].isSelected = true)) // loop all
    setCategories(prevState => ({ ...prevState, ...obj })) // preserve the old states and add the new one
  }

  const selectCategory = id => {
    setCategories(prevState => {
      const bool = !prevState[id].isSelected
      return { ...prevState, [id]: { ...prevState[id], isSelected: bool } }
    })
    console.log(categories[id])
  }

  // Styles
  const outerStyle = {
    display: `flex`,
    justifyContent: `space-between`,
    flexWrap: `wrap`,
    paddingTop: `1rem`,
    width: `60vw`,
    minWidth: `750px`,
    minHeight: '280px',
    height: `35vh`,
    top: 0,
    zIndex: `1`,
  }

  // Elements

  return (
    <div style={outerStyle} className={'filters'}>
      {Object.keys(categories).map(val => {
        return (
          <FilterCard
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
