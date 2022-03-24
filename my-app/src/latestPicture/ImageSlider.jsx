import React from 'react'
import './slider.scss'

export const ImageSlider = () => {
  return (
    <div className="container">
      <div className='wrapper'>
        <div className='imgadded'>
          <img src='http://splashreport.com/wp-content/uploads/2022/02/adam_project-header.jpg' alt='poster'></img>  
        </div>
        <div className='movieInfo'>
          <h4>Streaming Now</h4>
          <h1>THE ADAM PROJECT</h1>
          <p>Watch the latest movie anywhere!</p>
          <button>Watch Now</button>
        </div>
    </div>
    </div>
  )
}
