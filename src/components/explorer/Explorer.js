import React, { useContext, useEffect, useState } from 'react';
import ScrollComponent from './infinite-scroll/ScrollComponent';

import { getFilteredCards } from '../../utils/api';
import { FilterContext } from '../../context/DataContext';

const Explorer = ({
  baseUrl,
  openseaUrl,
  etherscanUrl,
  handleCardClick,
  nftsCardList,
}) => {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [noItem, setNoItem] = useState(false);
  const { filters } = useContext(FilterContext);

  const fetchNfts = async () => {
    getFilteredCards(baseUrl, filters).then((res) => {
      if (res.length > 0) {
        setNfts(res);
        setNoItem(false);
      } else {
        setNoItem(true);
        setNfts(res);
      }
      setLoading(false);
    });
  };

  useEffect(() => {
    if (baseUrl) {
      fetchNfts();
    }
    if (!baseUrl && ntfCardList.length > 0) {
      setNfts(nftsCardList);
    }
    setLoading(true);
  }, [baseUrl, filters, nftsCardList]);

  return (
    <div
      style={{
        width: '100%',
        height: 'auto',
        paddingTop: '50px',
      }}
    >
      {noItem && <p>No item to display</p>}
      {loading ? (
        <p>....Loading</p>
      ) : (
        <ScrollComponent
          nfts={nfts}
          openseaUrl={openseaUrl}
          etherscanUrl={etherscanUrl}
          handleCardClick={handleCardClick}
        />
      )}
    </div>
  );
};

export default React.memo(Explorer);
