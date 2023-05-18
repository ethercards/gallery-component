import React, { useState } from 'react'

import { LazyImage } from './LazyImage'
import './Card.css'

import opensea from '../../../assets/images/opensea.svg'
import etherscan from '../../../assets/images/etherscan.svg'

const Card = ({ card }) => {
  const [loading, setLoading] = useState(true)
  return (
    <div className='gallery-card-root-box'>
      <LazyImage
        src={card.image}
        imageOnLoad={() => setLoading(false)}
        alt="Card"
      />
      <div className='gallery-card-content'>
        <p className='gallery-card-content-name '>{card.name}</p>
        <div className='gallery-card-content-id-box '>
          <span>ID</span>
          <p>#{card.tokenId}</p>
        </div>
        <div className='gallery-social-items-box'>
         <img src={opensea} alt='opensea'/>
          <img src={etherscan} alt='etherscan'/>
        </div>
      
      </div>

    </div>
  )
}

export default Card