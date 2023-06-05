import React from 'react';

import close from '../../assets/images/close.svg';

const SelectedFilterItem = ({ filterKeyName, filterName, handleClearOne }) => {
  return (
    <div className='gallery-selected-filters-content-box'>
      <span className='gallery-selected-filters-category-name'>
        {filterKeyName}:{' '}
      </span>
      <span className='gallery-selected-filters-filter-name'>{filterName}</span>
      <div className='gallery-selected-filters-clear-button' onClick={() => handleClearOne(filterKeyName, filterName)}>
        <img
          src={close}
          alt='clear'
          style={{ height: '15px', width: '15px' }}
        />
      </div>
    </div>
  );
};

export default SelectedFilterItem;
