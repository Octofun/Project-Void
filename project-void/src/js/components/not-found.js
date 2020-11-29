import React from 'react'

export default () => {

  return (
    <div className='hero container'>
      <h3>404 - Page not found</h3>
      <p>Oops - this page doesn't exist!</p>
      <p>Forget xss attacks...this is based on react</p>
      <p>your script will be converted to string before render</p>
      <a
        href="/"
        className='button button-primary home-button'
      >
        Home
      </a>
    </div>
  )

}