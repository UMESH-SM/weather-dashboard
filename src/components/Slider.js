import React from "react";
import "./Slider.css";

function Slider({ name, sliderValue, setSliderValue, min, max }) {
  return (
    <div className="slider">
      <div className="slider__name">{name}</div>
      <input
        className="slider__input"
        type="range"
        min={min}
        max={max}
        step="1"
        value={sliderValue}
        onChange={(e) => setSliderValue(e.target.value)}
      />
      <div className="slider__range">
        <div className="sliderRange__limits">{min}</div>
        <div className="sliderRange__value">{sliderValue}</div>
        <div className="sliderRange__limits">{max}</div>
      </div>
    </div>
  );
}

export default Slider;
