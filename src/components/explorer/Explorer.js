import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import ScrollComponent from './infinite-scroll/ScrollComponent';

import { getFilteredCards } from '../../utils/api';
import { FilterContext } from '../../context/DataContext';
import { useDeepEffect } from '../../hooks/useDeepEffect';
import { isEqual } from 'lodash';

const Explorer = ({
  baseUrl = undefined,
  openseaUrl,
  etherscanUrl,
  handleCardClick,
  nftsCardList = [],
  displayTraits,
  handleOwnerClick
}) => {
  const [nfts, setNfts] = useState([]);
  const { filters, currentPage } = useContext(FilterContext);
  const explorerRef = useRef(null);
  const [loading, setLoading] = useState(false)
  
  const fetchNfts = async () => {
    getFilteredCards(baseUrl, filters, currentPage).then((res) => {
      if (res.length > 0 && currentPage > 1) {
        //load elements into array when currentPage is increasing
        setNfts(prevState => [...prevState, ...res]);
      }
      if (currentPage === 1) {
        //this happens when select a filter 
        setNfts(res);
      }
    });
    setLoading(false);
  }

  useDeepEffect(() => {
    if (baseUrl) {
      setLoading(true)
      fetchNfts();
    }
  }, [filters, baseUrl, currentPage])

  useDeepEffect(() => {
    if (!baseUrl && nftsCardList.length > 0) {
      setNfts(nftsCardList);
    }
  }, [nftsCardList]);

  return (
    <div
      ref={explorerRef}
      style={{
        width: '100%',
        height: 'auto',
        paddingTop: '50px',
      }}
      className='gallery-scroll-component-holder'
    >
      {loading ? <p>Fetching data ....</p> :
        <ScrollComponent
          nfts={nfts}
          openseaUrl={openseaUrl}
          etherscanUrl={etherscanUrl}
          handleCardClick={handleCardClick}
          displayTraits={displayTraits}
          handleOwnerClick={handleOwnerClick}
        />
      }
    </div>
  );
};

export default Explorer;
