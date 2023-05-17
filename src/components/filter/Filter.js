import React, { useEffect, useState } from 'react'
import { getFilters } from '../../utils/api'

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
    <div>
      
    </div>
  )
}

export default React.memo(Filter)