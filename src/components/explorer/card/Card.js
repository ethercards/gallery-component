import React, { useState } from 'react';

import { LazyImage } from './LazyImage';
import './Card.css';

import opensea from '../../../assets/images/opensea.svg';
import etherscan from '../../../assets/images/etherscan.svg';
import ethIcon from '../../../assets/images/curencies/ether.svg';
import matic from '../../../assets/images/curencies/matic.svg';
import dust from '../../../assets/images/curencies/dust.svg';
import glx from '../../../assets/images/curencies/glx.svg';

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
  console.log(owner);
  return (
    <div className='gallery-card-root-box'>
      <div className='gallery-card-image-holder'>
        <LazyImage
          style={{
            cursor: handleCardClick ? 'pointer' : 'unset',
            width: '100%',
          }}
          src={card.image}
          imageOnLoad={() => setLoading(false)}
          alt='Card'
          onClick={() => {
            handleCardImageClick(card.tokenId);
          }}
        />
      </div>
      <div className='gallery-card-content'>
        <p className='gallery-card-content-name '>
          {card.collection_name}
          <br />#{card.tokenId}
        </p>

        <div className='gallery-card-flex-box'>
          {owner || ownerLabel ? (
            <div className='gallery-owner-box'>
              <span className='gallery-card-label-title'>Owner</span>
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

          {isMarketplace && card.marketplace && (
            <div className='gallery-card-price-holder'>
              {((card.marketplace.sale_native && card.marketplace.sale_native > 0)||
                (card.marketplace.sale_erc777 && card.marketplace.sale_erc777 > 0)) && (
                <span className='gallery-card-label-title'>Price</span>
              )}
              {Number(card.marketplace.sale_native) > 0 && (
                <div className='gallery-card-content-id-box gallery-price-box'>
                  <p>{card.marketplace.sale_native}</p>
                  {chainDefaultToken.toLowerCase().includes('eth') ? (
                    <img
                      src={ethIcon}
                      alt='ETH'
                      className='gallery-card-token-symbol'
                    />
                  ) : (
                    <img
                      src={matic}
                      alt='MATIC'
                      className='gallery-card-token-symbol'
                    />
                  )}
                </div>
              )}

              {Number(card.marketplace.sale_erc777) > 0 && (
                <div className='gallery-card-content-id-box gallery-price-box'>
                  <p>{card.marketplace.sale_erc777}</p>
                  {erc777Symbol.toLowerCase().includes('dust') ? (
                    <img
                      src={dust}
                      alt='DUST'
                      className='gallery-card-token-symbol'
                    />
                  ) : (
                    <img
                      src={glx}
                      alt='DUST'
                      className='gallery-card-token-symbol'
                    />
                  )}
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
            <>
              <span className='gallery-card-label-title'>Utility Traits:</span>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
