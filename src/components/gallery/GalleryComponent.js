import React, { useEffect } from 'react'
import { FilterContextProvider } from '../../context/DataContext';
import Filter from '../filter/Filter';


const GalleryComponent = ({ apiBaseUrl }) => {
  console.log(apiBaseUrl);

  return (
    <>
      <FilterContextProvider>
        <Filter baseUrl={apiBaseUrl}/>
      </FilterContextProvider>
    </>
  )
}

export default GalleryComponent