import React from 'react'
import {VolumeX, CheckCircle, Lock} from 'react-feather'

export default (props) => {

  return (
    <div className='features'>
      <div className='container'>
        <h3>Let's look at some features!</h3>
        <div className='row'>
          <div className='four columns'>
            <div className='feature'>
              <div className='feature-title'>Real-time noise suppression</div>
              <VolumeX size={35} />
              <div className='feature-text'>Don't worry about the background noise. We'll take care of it for you.</div>
            </div>
          </div>
          <div className='four columns'>
            <div className='feature'>
              <div className='feature-title'>Unique and Secure rooms</div>
              <CheckCircle size={35} />
              <div className='feature-text'>Rooms are generated with a unique encrypted hash, making room links effectively unguessable.</div>
            </div>
          </div>
          <div className='four columns'>
            <div className='feature'>
              <div className='feature-title'>end-to-end encryption</div>
              <Lock size={35} />
              <div className='feature-text'>All video, audio and data is sent via an end-to-end encrypted connection using WebRTC.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}
