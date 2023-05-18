import React, { useState } from 'react'
import { LazyImage } from './LazyImage'

const Card = ({ card }) => {
  const [loading, setLoading] = useState(true)
  return (
    <div className='gallery-card-root-box'>
      <LazyImage
        src={card.image}
        imageOnLoad={() => setLoading(false)}
        alt="Card"
      />
    </div>
  )
}

export default Card