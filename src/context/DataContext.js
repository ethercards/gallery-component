import React, { createContext, useState } from "react";

const FilterContext = createContext([]);

const FilterContextProvider = ({ children }) => {
  const [filters, setFilters] = useState([]);

  const updateFilters = (type, value) => {
    setFilters((prevFilter) => ({
      ...prevFilter,
      [type]: value
    }))
  }

  return (
    <FilterContext.Provider value={{ filters, updateFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

export { FilterContext, FilterContextProvider }