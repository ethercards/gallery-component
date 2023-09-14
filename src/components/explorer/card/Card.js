import React, { useState } from 'react';

import { LazyImage } from './LazyImage';
import './Card.css';

import opensea from '../../../assets/images/opensea.svg';
import etherscan from '../../../assets/images/etherscan.svg';

const DEFAULT_PRICE = '0.00';
const Card = ({
  card,
  openseaUrl,
  etherscanUrl,
  handleCardClick,
  displayTraits,
  owner,
  ownerLabel,
  handleOwnerClick,
  isMarketplace,
  erc777Symbol = '',
  chainDefaultToken = '',
}) => {
  const [loading, setLoading] = useState(true);

  const handleCardImageClick = (tokenId) => {
    handleCardClick && handleCardClick(tokenId);
  };

  const handleEtherscanClick = () => {
    etherscanUrl && window.open(`${etherscanUrl}`, '_blank');
  };

  const handleOpenseaClick = (tokenId) => {
    openseaUrl && window.open(`${openseaUrl}/${tokenId}`, '_blank');
  };

  const handleOwnerBoxClick = (owner) => {
    handleOwnerClick(owner);
  };

  return (
    <div className='gallery-card-root-box'>
      <LazyImage
        style={{ cursor: handleCardClick ? 'pointer' : 'unset' }}
        src={card.image}
        imageOnLoad={() => setLoading(false)}
        alt='Card'
        onClick={() => {
          handleCardImageClick(card.tokenId);
        }}
      />
      <div className='gallery-card-content'>
        <div className='gallery-card-content-general'>
          <div className='gallery-card-general-informations'>
            <p className='gallery-card-content-name '>{card.name}</p>
            {owner || ownerLabel ? (
              <div className='gallery-card-content-id-box gallery-owner-box'>
                <span>Owner</span>
                <p
                  onClick={() => handleOwnerBoxClick(owner)}
                  style={{ cursor: handleOwnerBoxClick ? 'pointer' : 'unset' }}
                >
                  {ownerLabel || owner.slice(0, 6) + '...'}
                </p>
              </div>
            ) : (
              ''
            )}
            <div className='gallery-card-content-id-box '>
              <span>Token ID</span>
              <p>#{card.tokenId}</p>
            </div>
          </div>
          {isMarketplace && card.marketplace && (
            <div className='price-container'>
              {(card.marketplace?.sale_native ||
                card.marketplace?.sale_erc777) && <span>Price</span>}
              {Number(card.marketplace.sale_native) > 0 && (
                <div className='gallery-card-content-id-box gallery-price-box'>
                  <p>{card.marketplace.sale_native}</p>
                  <p>{chainDefaultToken}</p>
                </div>
              )}

              {Number(card.marketplace.sale_erc777) > 0 && (
                <div className='gallery-card-content-id-box gallery-price-box'>
                  <p>{card.marketplace.sale_erc777}</p>
                  <p>{erc777Symbol}</p>
                </div>
              )}
            </div>
          )}
        </div>
        <div className='gallery-social-trait-box'>
          {etherscanUrl || openseaUrl ? (
            <div className='gallery-social-items-box'>
              {openseaUrl && (
                <img
                  src={opensea}
                  alt='opensea'
                  style={{
                    maxWidth: '30px',
                    cursor: openseaUrl ? 'pointer' : 'unset',
                  }}
                  onClick={() => handleOpenseaClick(card.tokenId)}
                />
              )}
              {etherscanUrl && (
                <img
                  src={etherscan}
                  alt='etherscan'
                  style={{
                    maxWidth: '30px',
                    cursor: etherscanUrl ? 'pointer' : 'unset',
                  }}
                  onClick={() => handleEtherscanClick()}
                />
              )}
            </div>
          ) : null}
          {card.traits && displayTraits && (
            <div className='gallery-trait-container'>
              {card.traits.map((item, index) =>
                item.status ? (
                  item.status === '1' && (
                    <div className='gallery-trait-holder-box' key={index}>
                      <img src={item.icon_url} alt='trait' />
                    </div>
                  )
                ) : (
                  <div className='gallery-trait-holder-box' key={index}>
                    <img src={item.icon_url} alt='trait' />
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
