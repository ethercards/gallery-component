import React, { useEffect, useRef, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { loadNext } from '../../../utils/InfiniteScrollHelper';

const ScrollComponent = ({ nfts }) => {
  const ITEMS_PER_PAGE = 29;
  const [cards, setCards] = useState([]);
  const [currentPage, _setCurrentPage] = useState(0);
  const currentPageRef = useRef(currentPage);
  const setCurrentPage = (val) => {
    currentPageRef.current = val;
    _setCurrentPage(val);
  };

  useEffect(() => {
    setCards([]);
    setCurrentPage(0);
    loadNext(nfts, ITEMS_PER_PAGE, currentPageRef, setCurrentPage, setCards);
  }, [nfts]);

  return (
    <div>
      <InfiniteScroll
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
        <div className={`row small-gutters px-0 mx-0`}>Szerusz</div>
      </InfiniteScroll>
    </div>
  )
}

export default ScrollComponent