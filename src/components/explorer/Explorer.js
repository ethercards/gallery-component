import React from 'react'

import ScrollComponent from './infinite-scroll/ScrollComponent'

const Explorer = ({ baseUrl }) => {

  return (
    <ScrollComponent nfts={[1,2,3,4,5,6,7,8]}/>
  )
}

export default Explorer