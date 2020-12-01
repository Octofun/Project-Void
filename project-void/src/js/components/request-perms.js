import React from 'react'

export default (props) => {

  const {roomName, created, noStream, onRequestPerms} = props

  return (
    <div id='request-perms' className='container'>
      <h3>Your Room: {created ? 'Creating ' : null}{roomName}</h3>
      {
        !created ? (
          <h5>Grant Cam and Mic Access</h5>
        ): null
      }
      <button
        type='button'
        className='button-primary'
        onClick={onRequestPerms}
      >
        Allow
      </button>
    </div>
  )

}
