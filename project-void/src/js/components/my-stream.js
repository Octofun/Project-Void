import React from 'react'
import classNames from 'classnames'
import Controls from './controls'
import MyVideo from './my-video'

export default function(props) {

  const {
    stream, audioOn, videoOn, audioEnabled, videoEnabled, handleHangUp,
    handleVideoToggle, handleAudioToggle, handleChat,handleScreenSharing, expanded
  } = props

  const myStreamClassNames = classNames({expanded})

  return (
    <div id='my-stream' className={myStreamClassNames}>
      <MyVideo stream={stream} videoOn={videoOn} videoEnabled={videoEnabled} />
      <Controls
        audioOn={audioOn}
        videoOn={videoOn}
        audioEnabled={audioEnabled}
        videoEnabled={videoEnabled}
        handleAudioToggle={handleAudioToggle}
        handleVideoToggle={handleVideoToggle}
        handleHangUp={handleHangUp}
        handleChat={handleChat}
        handleScreenSharing = {handleScreenSharing}

      />
    </div>
  )

}
