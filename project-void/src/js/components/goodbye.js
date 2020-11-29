import React from 'react'


//This ()=> symbol represents a function 
//without the name,the compiler automatically allocates pseudoname 
export default () => {
    return(
        <div className='hero container'>
            <h5>Call has ended</h5>
            <a
            href="/"
            className='button button-primary home-button'
            >
                Home
            </a>
        </div>
    )
}