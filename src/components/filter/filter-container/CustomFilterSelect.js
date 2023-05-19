import React, { useState } from 'react';
import './CustomFileterSelect.css';

const CustomFilterSelect = ({ keyname, filters, filterChanged }) => {
  const [selectValue, setSelectValue] = useState('All');
  const [opened, setOpened] = useState(false);

  const toggleOpen = () => {
    setOpened(!opened);
  };

  const handleSelectChange = (keyname, value) => {
    setSelectValue(value);
    if (value === 'All') {
      filterChanged(keyname, [])
    }
    else
      filterChanged(keyname, value);
  };

  const renderFilters = () => {
    return filters[keyname].map((filter, idx) => {
      return (
        <div
          key={`filter` + idx}
          onClick={(e) => handleSelectChange(keyname, filter)}
          className={`cust-filter-item ${selectValue === filter ? 'selected' : ''
            }`}
        >
          {filter}
        </div>
      );
    });
  };

  return (
    <div
      className='custom-filter-select'
      onClick={toggleOpen}
      onMouseLeave={() => setOpened(false)}
    >
      <label className={`gallery-filter-type-label ${opened ? 'open' : ''}`}>
        {keyname} <span className='gallery-filter-arrow'>&#9660;</span>
      </label>
      <div className={`filter-dropdown`}>
        <div
          onClick={(e) => handleSelectChange(keyname, 'All')}
          className={`cust-filter-item ${selectValue === 'All' ? 'selected' : ''
            }`}
        >
          All
        </div>
        {renderFilters()}
      </div>

      <div className='filter-value'>{selectValue ? selectValue : 'All'}</div>
    </div>
  );
};

export default CustomFilterSelect;
