import React, { useContext, useEffect, useRef, useState } from 'react';
import ScrollComponent from './infinite-scroll/ScrollComponent';

import { getFilteredCards } from '../../utils/api';
import { FilterContext } from '../../context/DataContext';

const Explorer = ({
  baseUrl = undefined,
  openseaUrl,
  etherscanUrl,
  handleCardClick,
  nftsCardList = [],
}) => {
  const [nfts, setNfts] = useState([]);
  const { filters, currentPage } = useContext(FilterContext);
  const explorerRef = useRef(null);

  const fetchNfts = async () => {
    getFilteredCards(baseUrl, filters, currentPage).then((res) => {
      if (res.length > 0 && currentPage > 1) {
        //load elements into array when currentPage is increasing
        setNfts(prevState => [...prevState, ...res]);
      }
      if (currentPage === 1) {
        //this happens when select a filter 
        explorerRef.current.scrollIntoView();
        setNfts(res);
      }
    });
  };

  useEffect(() => {
    if (baseUrl) {
      fetchNfts();
    }
  }, [baseUrl, currentPage, filters]);

  useEffect(() => {
    if (!baseUrl && nftsCardList.length > 0) {
      setNfts(nftsCardList);
    }
  }, []);

  return (
    <div
      ref={explorerRef}
      style={{
        width: '100%',
        height: 'auto',
        paddingTop: '50px',
      }}
    >
      <ScrollComponent
        nfts={nfts}
        openseaUrl={openseaUrl}
        etherscanUrl={etherscanUrl}
        handleCardClick={handleCardClick}
      />
    </div>
  );
};

export default React.memo(Explorer);
