import React from 'react'
import {Shield, Users, Lock} from 'react-feather'


export default (props) => {

  return (
    <div id='footer'>
      <div className='container'>
        <div className='row'>
          <a href='Contact.html'>Contact Us</a>

        </div>
        <div className='row'>
          <h6>About Us: </h6>
          <p>Void is a free and open source project, still under development. For source code go to <a href="https://github.com/Octofun/Project-Void.git">https://github.com/Octofun/Project-Void.git</a>.</p>
        </div>
        <div className='row'>
          <p >Created by TeamVOID</p>
        </div>
      </div>
    </div>
  )

}
