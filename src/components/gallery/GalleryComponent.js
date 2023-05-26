import React, { useEffect } from 'react';
import { FilterContextProvider } from '../../context/DataContext';
import Filter from '../filter/Filter';
import Explorer from '../explorer/Explorer';
import './GalleryComponent.css';

const GalleryComponent = ({
  apiBaseUrl,
  openseaUrl,
  etherscanUrl,
  handleCardClick,
  headerStyle,
  cardArray,
  displayTraits = false
}) => {
  return (
    <div style={{ width: '100%', position: 'relative' }} className='gallery-component-box'>
      <FilterContextProvider>
        {apiBaseUrl ? (
          <Filter baseUrl={apiBaseUrl} headerStyle={headerStyle} />
        ) : null}
        <Explorer
          baseUrl={apiBaseUrl}
          openseaUrl={openseaUrl}
          etherscanUrl={etherscanUrl}
          handleCardClick={handleCardClick}
          nftsCardList={cardArray}
          displayTraits={displayTraits}
        />
      </FilterContextProvider>
    </div>
  );
};

export default React.memo(GalleryComponent);
