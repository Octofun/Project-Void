import React from 'react'

export default (props) => {

  const {roomName, created, noStream, onRequestPerms} = props

  return (
    <div id='request-perms' className='container'>
      <h3>{created ? 'Creating ' : null}{roomName}</h3>
      {
        !created ? (
          <h5>You are about join the video call.</h5>
        ): null
      }
      <button
        type='button'
        className='button-primary'
        onClick={onRequestPerms}
      >
        Allow cam/mic access
      </button>
    </div>
  )

}
