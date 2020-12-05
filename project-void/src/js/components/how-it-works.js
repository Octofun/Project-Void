import React from 'react'
import {UserPlus, Share2, Video} from 'react-feather'

export default (props) => {

  return (
    <div className='features how-it-works'>
      <div className='container'>
        <h3>Wanna know how it works?</h3>
        <div className='row'>

        <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
         <div class="flipper">
           <div class="front">
           <div className='four columns'>
             <div className='feature'>
               <div className='feature-title'>Create your room</div>
               <UserPlus size={35} />
               </div>
             </div>
            </div>
           <div class="back">
              <div className='feature-text'>Create a room with a significant name.</div>
              <UserPlus size={35} />
           </div>
         </div>
      </div>

        <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
         <div class="flipper">
           <div class="front">
           <div className='four columns'>
             <div className='feature'>
             <div className='feature-title'>Share your link</div>
             <Share2 size={35} />
               </div>
             </div>
            </div>
           <div class="back">
              <div className='feature-text'>Share the generated links via any means to the expected participants.</div>
              <Share2 size={35} />
           </div>
         </div>
      </div>

      <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
       <div class="flipper">
         <div class="front">
         <div className='four columns'>
           <div className='feature'>
             <div className='feature-title'>Talk!</div>
              <Video size={35} />
             </div>
           </div>
          </div>
         <div class="back">
            <div className='feature-text'>You are all set for the conference!!!</div>
            <Video size={35} />
         </div>
       </div>
    </div>




      </div>
    </div>
    </div>
  )

}
