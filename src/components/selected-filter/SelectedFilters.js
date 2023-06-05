import React, { useContext } from 'react'
import { FilterContext } from '../../context/DataContext'
import './SelectedFilters.css'
import SelectedFilterItem from './SelectedFilterItem';

const SelectedFilters = () => {
  const { filters, updateFilters } = useContext(FilterContext);

  const handleClearOne = (category, value) => {
    const activeFilters = { ...filters };
    const filteredArray = activeFilters[category].filter((data) => data !== value);
    if (filteredArray.length === 0) {
      delete activeFilters[category];
    } else {
      activeFilters[category] = filteredArray;
    }
    updateFilters(activeFilters);
  }


  const renderSelectedFilters = () => {
    return filters ?
      Object.keys(filters).map((keyName) => {
        return filters[keyName].map((filter, index) => {
          return <SelectedFilterItem filterKeyName={keyName} filterName={filter} handleClearOne={handleClearOne} key={index}/>
        })
      }) : ""
  }


  return (
    <div className='gallery-selected-filters-box'>
      {renderSelectedFilters()}
    </div>
  )
}

export default React.memo(SelectedFilters)