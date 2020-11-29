import React from 'react'
//import {} from whatever icon library
import CopyLink from './copy-link'
//Also insert the icon using id
export default (props) =>{
    const {roomName} =props
    return(
        <div id ='chat-header'>
            <a id='brand' href='/'>
                <span id ='brand-text'>Project-Void</span>
            </a>
        </div>
    )
}