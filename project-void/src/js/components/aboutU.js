import React from 'react'

export default () => {

    return(
        <div className='about'>
            <h1>Team VOID</h1>
            <h5>Know us more</h5>
                <div className='row'>



                    <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                      <div class="flipper">
                      <div className='four columns'>
                        <div class="front">
                           <div className='feature'>
                             <div className='feature-title'>Peyara Nando</div>
                               <img src="/img/nando.png" width = "200" height = "200"/>
                             </div>
                           </div>
                         </div>
                         <div class="back">
                           <p>Hey I'm Peyara.</p>
                           <a href = "https://www.linkedin.com/in/peyara-nando-b80a911b3/">Visit my LinkedIn handle</a>
                         </div>
                    </div>
                  </div>

                    <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                      <div class="flipper">
                      <div className='four columns'>
                        <div class="front">
                           <div className='feature'>
                             <div className='feature-title'>Krishnapriya S</div>
                               <img src="/img/kp.png" width = "200" height = "200"/>
                             </div>
                           </div>
                         </div>
                         <div class="back">
                           <p>Hi I'm KP</p>
                           <a href = "https://www.linkedin.com/in/krishnapriya-s-3625921b3/">Visit my LinkedIn handle</a>
                      </div>
                    </div>
                  </div>



                    <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                      <div class="flipper">
                      <div className='four columns'>
                        <div class="front">
                           <div className='feature'>
                             <div className='feature-title'>Diya George</div>
                               <img src="/img/diya.png" width = "200" height = "200"/>
                             </div>
                           </div>
                         </div>
                         <div class="back">
                           <p>Hi I'm Diya</p>
                           <a href = "https://www.linkedin.com/in/diya-george-0643b31aa/">Visit my LinkedIn handle</a>
                      </div>
                    </div>
                  </div>



                    <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                      <div class="flipper">
                      <div className='four columns'>
                        <div class="front">
                           <div className='feature'>
                             <div className='feature-title'>Maria Raj</div>
                               <img src="/img/maria.png" width = "200" height = "200"/>
                             </div>
                           </div>
                         </div>
                         <div class="back">
                           <p>Hi I'm Maria</p>
                           <a href = "https://www.linkedin.com/in/maria-raj-4353b21aa/">Visit my LinkedIn handle</a>
                      </div>
                    </div>
                  </div>





                </div>
            <input type="button" value="Go Home" className="button"/>
        </div>
    )
}
