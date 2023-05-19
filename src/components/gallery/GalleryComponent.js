import React, { useEffect } from 'react'
import { FilterContextProvider } from '../../context/DataContext';
import Filter from '../filter/Filter';
import Explorer from '../explorer/Explorer';
import './GalleryComponent.css'

const GalleryComponent = ({ apiBaseUrl }) => {

  return (
    <div style={{width: '100%', position: 'relative'}}>
      <FilterContextProvider>
        <Filter baseUrl={apiBaseUrl} />
        <Explorer baseUrl={apiBaseUrl} />
      </FilterContextProvider>
    </div>
  )
}

export default GalleryComponent