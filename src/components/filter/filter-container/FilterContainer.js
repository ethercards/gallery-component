import React, { useCallback, useContext, useState } from 'react';
import FilterItem from './FilterItem';
import './FilterContainer.css';
import { FilterContext } from '../../../context/DataContext';

export const FilterContainer = ({ filtersArray }) => {
  const { filters, updateFilters } = useContext(FilterContext);
  
  const handleSelect = (category, item, checked) => {
    const activeFilters = { ...filters };
    
    if (checked) {
      const tmpArray = activeFilters[category] ? [...activeFilters[category], item] : [item];
      activeFilters[category] = tmpArray;
    } else {
      if (activeFilters[category]) {
        const filteredArray = activeFilters[category].filter((data) => data !== item);
        if (filteredArray.length === 0) {
          delete activeFilters[category];
        } else {
          activeFilters[category] = filteredArray;
        }
      }
    }
    
    updateFilters(activeFilters);
  }
  const renderFilters = () => {
    return filtersArray
      ? Object.keys(filtersArray).map((filterKeyName, index) => (
        <FilterItem
          filterKeyName={filterKeyName}
          filterList={filtersArray[filterKeyName]}
          key={index}
          handleSelect={handleSelect}
        />
      ))
      : 'No filters loaded!';
  };

  return (
    <div className='gallery-filter-container-root'>
      <div className='gallery-filter-inner-container'>{renderFilters()}</div>
    </div>
  );
};
