import React, { useContext, useEffect, useRef, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import Card from '../card/Card';
import './ScrollComponent.css';
import { FilterContext } from '../../../context/DataContext';
import { useDeepEffect } from '../../../hooks/useDeepEffect';

const ScrollComponent = ({
  nfts,
  openseaUrl,
  etherscanUrl,
  handleCardClick,
  displayTraits,
  handleOwnerClick,
  scrollCallback,
  done,
  isMarketplace,
  erc777Symbol,
  chainDefaultToken,
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

  const handleCallback = (val) => {
    scrollCallback(currentPageRef.current + 1)
    currentPageRef.current = val;
  }

  const renderCards = () => {
    return cards.map((card, i) => {
      return (
        <div key={i} className='gallery-card-item'>
          <Card
            card={card.metadata ? card.metadata : card}
            openseaUrl={openseaUrl}
            etherscanUrl={etherscanUrl}
            handleCardClick={handleCardClick}
            displayTraits={displayTraits}
            owner={card.owner || null}
            ownerLabel={card.ownerLabel || null}
            erc777Symbol={erc777Symbol}
            chainDefaultToken={chainDefaultToken}
            handleOwnerClick={handleOwnerClick}
            isMarketplace={isMarketplace}
          />
        </div>
      );
    });
  };

  useDeepEffect(() => {
    if (nfts.length > 0) {
      setCards(nfts);
    } else if (nfts.length === 0 && currentPageRef.current === 1) {
      setCards([]);
    }
  }, [nfts]);

  useEffect(() => {
    //need to set currentPageRef.current 1 when we select a filter
    if (currentPage === 1) {
      currentPageRef.current = 1;
    }
  }, [currentPage]);

  if (!nfts) {
    return <div className='gallery-error-message'>ERROR</div>;
  }
  if (cards.length === 0) {
    return <p className='gallery-no-item-message'>No item to display</p>
  }

  return (
    <InfiniteScroll
      className='gallery-infinite-scroll'
      dataLength={cards.length}
      next={() => {
        scrollCallback ? handleCallback(currentPageRef.current + 1) : setCurrentPage(currentPageRef.current + 1);
      }}
      pullDownToRefreshThreshold={300}
      hasMore={!done && currentPageRef.current * ITEMS_PER_PAGE < cards.length}
      // scrollThreshold="200px"
      // scrollableTarget="content-container"
      // initialScrollY={1000}
      // loader={<h4>Loading...</h4>}
    >
      <div className='gallery-grid-container'>{renderCards()}</div>
    </InfiniteScroll>
  );
};

export default ScrollComponent;
