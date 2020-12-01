import React from 'react'
import CopyLink from './copy-link'

export default (props) => {

  return (
    <div id='awaiting-peers' className='hero container'>
      <h3>waiting for people to join.....</h3>
      <p>copy your link</p>
      <CopyLink />
    </div>
  )

}
