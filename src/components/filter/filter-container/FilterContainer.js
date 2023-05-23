import React, { useContext } from 'react'

import './FilterContainer.css'
import CustomFilterSelect from './CustomFilterSelect';
import { FilterContext } from '../../../context/DataContext';

const FilterContainer = ({ filters, headerStyle = null }) => {

  const { updateFilters } = useContext(FilterContext)

  const filterChanged = (type, value) => {
    updateFilters(type, value)
  }

  const GetFilters = () => {
    return filters
      ? Object.keys(filters).map((keyname) => {
        return (
          <CustomFilterSelect
            key={keyname}
            keyname={keyname}
            filters={filters}
            filterChanged={filterChanged}
          />
        );
      })
      : 'No filters loaded!';
  };

  return (
    <div className='gallery-filter-container' style={headerStyle}>
      <div className="gallery-filter-inner-container">{GetFilters()}</div>
    </div>
  )
}

export default FilterContainer