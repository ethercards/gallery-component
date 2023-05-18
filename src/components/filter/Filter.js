import React, { useEffect, useState } from 'react'
import { getFilters } from '../../utils/api'
import FilterContainer from './filter-container/FilterContainer'

const Filter = ({ baseUrl }) => {
  const [filters, setFilters] = useState({})

  const fetchFilters = async () => {
    getFilters(baseUrl).then((res) => {
      setFilters(res);
    })
  }

  useEffect(() => {
    fetchFilters()
  }, [])
  return (
    <FilterContainer filters={filters} />
  )
}

export default React.memo(Filter)