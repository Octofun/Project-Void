import React from 'react';
import {Home} from 'react-feather';
export default () => {

  return (
    <div className='hero container'>
      <h1>You left the call</h1>
      <h5>Thank You For Joining</h5>
      <a
        href="/"
        className='button'
      >
        <Home />
      </a>
    </div>
  )

}
