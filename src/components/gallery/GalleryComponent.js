import React from 'react';
import { FilterContextProvider } from '../../context/DataContext';
import Filter from '../filter/Filter';
import Explorer from '../explorer/Explorer';
import './GalleryComponent.css';
import SelectedFilters from '../selected-filter/SelectedFilters';

const GalleryComponent = ({
  apiBaseUrl,
  openseaUrl,
  etherscanUrl,
  handleCardClick,
  headerStyle,
  cardArray,
  displayTraits = false,
  displayFilters = true,
}) => {
  return (
    <div style={{ width: '100%', position: 'relative' }} className='gallery-component-box'>
      <FilterContextProvider>
        {apiBaseUrl && displayFilters ? (<>
          <Filter baseUrl={apiBaseUrl} headerStyle={headerStyle} />
          <SelectedFilters />
        </>
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
