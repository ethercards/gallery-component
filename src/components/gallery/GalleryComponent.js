import React, { useEffect } from 'react'
import { FilterContextProvider } from '../../context/DataContext';
import Filter from '../filter/Filter';
import Explorer from '../explorer/Explorer';


const GalleryComponent = ({ apiBaseUrl }) => {

  return (
    <>
      <FilterContextProvider>
        <Filter baseUrl={apiBaseUrl} />
        <Explorer baseUrl={apiBaseUrl} />
      </FilterContextProvider>
    </>
  )
}

export default GalleryComponent