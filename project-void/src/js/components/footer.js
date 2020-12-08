import React from 'react'
import {Shield, Users, Lock} from 'react-feather'


export default (props) => {

  return (
    <div id='footer'>
      <div className='container'>
      <p>Void is a free and open source project, still under development. For source code go to <a href="https://github.com/Octofun/Project-Void.git">Project VOID</a>.</p>
        <div className='row'>
          <a href='/contact'>Contact Us</a>

        </div>
        <div className='row'>
        <a href='/aboutUS'>About Us</a>
        </div>
        <div className='row'>
          <p >Created by TeamVOID</p>
        </div>
      </div>
    </div>
  )

}
