import React, { useEffect, useRef, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { loadNext } from '../../../utils/InfiniteScrollHelper';
import Card from '../card/Card';
import './ScrollComponent.css'

const ScrollComponent = ({ nfts, openseaUrl, etherscanUrl, handleCardClick }) => {
  const ITEMS_PER_PAGE = 29;
  const [cards, setCards] = useState([]);
  const [currentPage, _setCurrentPage] = useState(0);
  const currentPageRef = useRef(currentPage);

  const setCurrentPage = (val) => {
    currentPageRef.current = val;
    _setCurrentPage(val);
  };

  const renderCards = () => {
    return cards.map((card, i) => {
      return (
        <div key={i} className="gallery-card-item">
          <Card card={card} openseaUrl={openseaUrl} etherscanUrl={etherscanUrl} handleCardClick={handleCardClick}/>
        </div>
      );
    });
  };

  useEffect(() => {
    if (nfts) {
      setCards([]);
      setCurrentPage(0);
      loadNext(nfts, ITEMS_PER_PAGE, currentPageRef, setCurrentPage, setCards);
    }
  }, [nfts]);

  if (!nfts) {
    return <div>ERROR</div>
  }

  return (
    <InfiniteScroll
      className='gallery-infinite-scroll'
      dataLength={cards.length}
      next={() =>
        loadNext(
          nfts,
          ITEMS_PER_PAGE,
          currentPageRef,
          setCurrentPage,
          setCards
        )
      }
      pullDownToRefreshThreshold={500}
      hasMore={currentPageRef.current * ITEMS_PER_PAGE < nfts.length}
      // scrollThreshold="200px"
      // scrollableTarget="content-container"
      // initialScrollY={1000}
      loader={<h4>Loading...</h4>}
    >
      <div className='gallery-grid-container'>{renderCards()}</div>
    </InfiniteScroll>
  )
}

export default ScrollComponent