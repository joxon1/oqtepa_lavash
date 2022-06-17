import React, { useState, useRef, useEffect } from "react";
import { SliderData } from "../data/SliderData";
import "../style/Slider.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };
    timeout.current = setTimeout(nextSlide, 3000);
    return function () {
      if (timeout.current) {
        clearInterval(timeout.current);
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    if (timeout.current) {
      clearInterval(timeout.current);
    }
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    if (timeout.current) {
      clearInterval(timeout.current);
    }
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }
  return (
    <div className="slider_container">
      <div className="slider_wrapper">
        {SliderData.map((slide, index) => (
          <div className="slide" key={index}>
            {index === current && (
              <div className="slider_img_container">
                <img className="slider_img" src={slide.image} alt="photo" />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="btn_container">
        <MdKeyboardArrowLeft className="arrow_btn_left" onClick={prevSlide} />
        <MdKeyboardArrowRight className="arrow_btn_right" onClick={nextSlide} />
      </div>
    </div>
  );
};

export default Slider;
