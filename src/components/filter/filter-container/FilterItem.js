import React, { useState } from 'react'

const FilterItem = ({ filterKeyName, filterList = [], handleSelect, selectedFilters=[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    handleSelect(filterKeyName, value, checked);
  };

  return (
    <div className="gallery-filter-dropdown-container">
      <label className="dropdown-label" onClick={toggleDropdown}>
        {filterKeyName}
      </label>
        <div className={`gallery-filter-dropdown-content ${isOpen ? 'open' : ''}`}>
          {filterList.map((option) => (
            <label key={option}>
              <input
                type="checkbox"
                name={filterKeyName}
                value={option}
                onChange={handleCheckboxChange}
                checked={selectedFilters.includes(option)}
              />
              {option}
            </label>
          ))}
        </div>
        <div className={`gallery-filter-dropdown-backdrop ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}></div>
    </div>
  )
}

export default FilterItem