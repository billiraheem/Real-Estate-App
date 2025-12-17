import React from 'react'
import "./slider.scss"

const Slider = ({images}) => {
  return (
    <div className='slider'>
        <div className="full">
            <div className="arrow">
                <img src="/arrow.pmg" alt="" />
            </div>

            <div className="img"></div>

            <div className="arrow">
                <img src="/arrow.pmg" alt="" />
            </div>
        </div>
        
        <div className="big">
            <img src={images[0]} alt="" />
        </div>

        <div className="small">
            {images.slice(1).map((image, index) => (
                <img src={image} alt='' key={index}/>
            ))}
        </div>
    </div>
  )
}

export default Slider