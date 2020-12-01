import React from 'react'
import CopyLink from './copy-link'

export default (props) => {

  const {roomName} = props

  return (
    <div id='chat-header'>
      
      {roomName ? <span id='room-name'>{roomName}</span> : null}
      {roomName ? <CopyLink /> : null}
    </div>
  )

}
