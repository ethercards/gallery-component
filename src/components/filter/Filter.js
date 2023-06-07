import React, { useEffect, useState } from 'react';
import { getFilters } from '../../utils/api';
import { FilterContainer } from './filter-container/FilterContainer';

const Filter = ({ baseUrl, headerStyle }) => {
  //this component fetching data from BE
  const [filters, setFilters] = useState({});

  const fetchFilters = async () => {
    getFilters(baseUrl).then((res) => {
      setFilters(res);
    }).catch(e => {
      if (e) {
        setFilters(null)
      }
    })
  };

  useEffect(() => {
    fetchFilters();
  }, [baseUrl]);

  return filters && <FilterContainer filtersArray={filters} />;
};

export default React.memo(Filter);
