import React, { useContext, useEffect, useRef, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import Card from '../card/Card';
import './ScrollComponent.css';
import { FilterContext } from '../../../context/DataContext';

const ScrollComponent = ({
  nfts,
  openseaUrl,
  etherscanUrl,
  handleCardClick,
  displayTraits
}) => {
  const ITEMS_PER_PAGE = 16;
  const [cards, setCards] = useState([]);
  const { currentPage, updateCurrentPage } = useContext(FilterContext);
  const currentPageRef = useRef(1);

  const setCurrentPage = (val) => {
    //update the context, and the ref to store the actual data
    updateCurrentPage(val);
    currentPageRef.current = val;
  };

  const renderCards = () => {
    return cards.map((card, i) => {
      return (
        <div key={i} className='gallery-card-item'>
          <Card
            card={card}
            openseaUrl={openseaUrl}
            etherscanUrl={etherscanUrl}
            handleCardClick={handleCardClick}
            displayTraits={displayTraits}
          />
        </div>
      );
    });
  };

  useEffect(() => {
    if (nfts.length > 0) {
      setCards(nfts);
    }
  }, [nfts]);

  useEffect(() => {
    //need to set currentPageRef.current 1 when we select a filter
    if(currentPage === 1) {
      currentPageRef.current = 1;
    }
  }, [currentPage])
  

  if (!nfts) {
    return <div>ERROR</div>;
  }

  return (
    <InfiniteScroll
      className='gallery-infinite-scroll'
      dataLength={cards.length}
      next={() => {
        setCurrentPage(currentPageRef.current + 1);
        console.log('toltes');
      }}
      pullDownToRefreshThreshold={500}
      hasMore={currentPageRef.current * ITEMS_PER_PAGE < cards.length}
      // scrollThreshold="200px"
      // scrollableTarget="content-container"
      // initialScrollY={1000}
      loader={<h4>Loading...</h4>}
    >
      <div className='gallery-grid-container'>{renderCards()}</div>
    </InfiniteScroll>
  );
};

export default ScrollComponent;
