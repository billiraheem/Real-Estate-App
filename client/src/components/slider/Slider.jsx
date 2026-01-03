import React, { useState } from "react";
import "./slider.scss";

const Slider = ({ images }) => {
  const [index, setIndex] = useState(null);

  const changeSlide = (direction) => {
    if (direction === "left") {
      if (index === 0) {
        setIndex(images.length - 1);
      } else {
        setIndex(index - 1);
      }
    } else {
      if (index === images.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }
  };

  return (
    <div className="slider">
      {index !== null && (
        <div className="full">
          <div className="arrow" onClick={() => changeSlide("left")}>
            <img src="/arrow.png" alt="" />
          </div>

          <div className="image">
            <img src={images[index]} alt="" />
          </div>

          <div className="arrow" onClick={() => changeSlide("right")}>
            <img src="/arrow.png" alt="" className="right" />
          </div>

          <div className="close" onClick={() => setIndex(null)}>
            X
          </div>
        </div>
      )}

      <div className="big" onClick={() => setIndex(0)}>
        <img src={images[0]} alt="" />
      </div>

      <div className="small">
        {images.slice(1).map((image, index) => (
          <img
            src={image}
            alt=""
            key={index}
            onClick={() => setIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
