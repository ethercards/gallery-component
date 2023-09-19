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
  handleOwnerClick,
  scrollCallback,
  done,
  isMarketplace,
  erc777Symbol,
  chainDefaultToken
}) => {
  const [nfts, setNfts] = useState([]);
  const { filters, currentPage } = useContext(FilterContext);
  const explorerRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [fetchDone, setFetchDone] = useState(false)

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
      if (currentPage > 1 && res.length === 0) {
        setFetchDone(true)
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
    if (!baseUrl) {
      setNfts(nftsCardList);
    }
  }, [nftsCardList]);

  return (
    <div
      ref={explorerRef}
      style={{
        width: '100%',
        height: 'auto',
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
          scrollCallback={scrollCallback}
          done={done || fetchDone}
          isMarketplace={isMarketplace}
          erc777Symbol={erc777Symbol}
          chainDefaultToken={chainDefaultToken}
        />
      }
    </div>
  );
};

export default Explorer;
