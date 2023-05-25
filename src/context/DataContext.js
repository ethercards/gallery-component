import React, { createContext, useState } from "react";

const FilterContext = createContext([]);

const FilterContextProvider = ({ children }) => {
  const [filters, setFilters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const updateFilters = (type, value) => {
    setFilters((prevFilter) => ({
      ...prevFilter,
      [type]: value
    }))
  }
  const updateCurrentPage = (value) => {
    setCurrentPage(value)
  }
  const resetCurrentPage = () => {
    setCurrentPage(1)
  }

  console.log(filters)
  return (
    <FilterContext.Provider value={{ filters, updateFilters, updateCurrentPage, currentPage, resetCurrentPage }}>
      {children}
    </FilterContext.Provider>
  );
};

export { FilterContext, FilterContextProvider }