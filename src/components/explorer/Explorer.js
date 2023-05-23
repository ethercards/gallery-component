import React, { useContext, useEffect, useState } from 'react'
import ScrollComponent from './infinite-scroll/ScrollComponent'

import { getFilteredCards } from '../../utils/api'
import { FilterContext } from '../../context/DataContext'

const Explorer = ({ baseUrl, openseaUrl, etherscanUrl, handleCardClick}) => {
  const [nfts, setNfts] = useState([])
  const [loading, setLoading] = useState(true);
  const { filters } = useContext(FilterContext)

  const fetchNfts = async () => {
    getFilteredCards(baseUrl, filters).then((res) => {
      setNfts(res);
      setLoading(false)
    })
  }
  useEffect(() => {
    setLoading(true);
    fetchNfts();
  }, [baseUrl, filters])

  return (
    <div style={{
      width: '100%',
      height: 'auto',
      paddingTop: '50px'
    }}>
      {loading ? <p>....Loading</p> : null}
      <ScrollComponent nfts={nfts} openseaUrl={openseaUrl} etherscanUrl={etherscanUrl} handleCardClick={handleCardClick}/>
    </div>
  )
}

export default Explorer