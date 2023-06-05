import React, { useState } from 'react';

const FilterItem = ({
  filterKeyName,
  filterList = [],
  handleSelect,
  selectedFilters = [],
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    handleSelect(filterKeyName, value, checked);
  };

  return (
    <div className='gallery-filter-dropdown-container'>
      <label className='dropdown-label' onClick={toggleDropdown}>
        {filterKeyName}
      </label>
      <div
        className={`gallery-filter-dropdown-content ${isOpen ? 'open' : ''}`}
      >
        {filterList.map((option) => (
          <div className='gallery-filter-item-box' key={option}>
            <label className='gallery-filter-item-box-name'>{option}</label>
            <label className="checkbox-container">
            <input
              type='checkbox'
              value={option}
              onChange={handleCheckboxChange}
              checked={selectedFilters.includes(option)}
            />
              <span className="checkmark"></span>
            </label>
          </div>
        ))}
      </div>
      <div
        className={`gallery-filter-dropdown-backdrop ${isOpen ? 'open' : ''}`}
        onClick={toggleDropdown}
      ></div>
    </div>
  );
};

export default FilterItem;
