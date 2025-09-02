import React from 'react'
import "./Gallery.css"
const Gallery = () => {
  return (
    <div className='Gallery-main'>
      <div className="gallery-top">
     <h1>our gallery</h1>
     <p>The Art Education Section aims at teaching art and spreading interest in art among different age groups. This is achieved through diverse trainings and workshops for different categories.</p>
      </div>
      <div className="gallery-bottom">
       <div className="img1"></div>
       <div className="img1" id='box2'></div>
        <div className="img1" id='box3'></div>
         <div className="img1" id='box4'></div>
          <div className="img1" id='box5'></div>
           <div className="img1" id='box6'></div>
      </div>
    </div>
  )
}

export default Gallery
