import React from 'react'
//This needs slight improvement
//Kp lets have magic here
export default (props) => {

  const {children} = props

  return (
    <div className='loading-indicator'>
      <div className='loading-inner' />
      {
        children ? (
          <div className='loading-text'>
            {children}
          </div>
        ) : null
      }
    </div>
  )

}
