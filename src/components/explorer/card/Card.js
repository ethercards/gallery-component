import React, { useState } from 'react';

import { LazyImage } from './LazyImage';
import './Card.css';

import opensea from '../../../assets/images/opensea.svg';
import etherscan from '../../../assets/images/etherscan.svg';

const Card = ({ card, openseaUrl, etherscanUrl, handleCardClick }) => {
  const [loading, setLoading] = useState(true);

  const handleCardImageClick = (tokenId) => {
    handleCardClick?.(tokenId);
  };

  const handleEtherscanClick = () => {
    etherscanUrl && window.open(`${etherscanUrl}`, '_blank');
  };

  const handleOpenseaClick = (tokenId) => {
    openseaUrl && window.open(`${openseaUrl}/${tokenId}`, '_blank');
  };

  return (
    <div className='gallery-card-root-box'>
      <LazyImage
        style={{ cursor: handleCardClick ? 'pointer' : 'unset' }}
        src={card.image}
        imageOnLoad={() => setLoading(false)}
        alt='Card'
        onClick={() => {
          handleCardImageClick(card.tokenId)
        }}
      />
      <div className='gallery-card-content'>
        <p className='gallery-card-content-name '>{card.name}</p>
        <div className='gallery-card-content-id-box '>
          <span>ID</span>
          <p>#{card.tokenId}</p>
        </div>
        <div className='gallery-social-items-box'>
          <img
            src={opensea}
            alt='opensea'
            style={{
              maxWidth: '30px',
              cursor: openseaUrl ? 'pointer' : 'unset',
            }}
            onClick={() => handleOpenseaClick(card.tokenId)}
          />
          <img
            src={etherscan}
            alt='etherscan'
            style={{
              maxWidth: '30px',
              cursor: etherscanUrl ? 'pointer' : 'unset',
            }}
            onClick={() => handleEtherscanClick()}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
