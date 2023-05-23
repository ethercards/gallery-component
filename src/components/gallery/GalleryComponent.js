import React, { useEffect } from 'react'
import { FilterContextProvider } from '../../context/DataContext';
import Filter from '../filter/Filter';
import Explorer from '../explorer/Explorer';
import './GalleryComponent.css'

const GalleryComponent = ({ apiBaseUrl, openseaUrl, etherscanUrl, handleCardClick, headerStyle }) => {
  
  return (
    <div style={{ width: '100%', position: 'relative' }}>
      <FilterContextProvider>
        <Filter baseUrl={apiBaseUrl} headerStyle={headerStyle} />
        <Explorer baseUrl={apiBaseUrl} openseaUrl={openseaUrl} etherscanUrl={etherscanUrl} handleCardClick={handleCardClick} />
      </FilterContextProvider>
    </div>
  )
}

export default React.memo(GalleryComponent)