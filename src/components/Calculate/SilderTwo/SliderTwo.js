import React,{useState, useEffect} from 'react';
import "./SliderTwo.css"

export default function SliderOne({ sliderTwo, setSliderTwo, values, setInterestRate}) {
    
    // const [slider, setSlider1]=useState(values);
  

    useEffect(()=>{
        const ele = document.querySelector('.buble');
      if (ele) {
        ele.style.left = `${Number(sliderTwo / 4)}px`;
      }
    })
  
    return (
      <>
      <div className="interest-container">

      <div className="interest-box">
      <label className="label">Interest Rate</label>
      </div>

      <div className="buble2-box">
      <div className="buble2" > 
        {sliderTwo}%
        </div>
        </div>

        <label className="label3">
                  <a
                    className="current-rates"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.nerdwallet.com/blog/mortgages/current-interest-rates/"
                  >
                    Current Rates
                  </a>
                </label>
    </div>



      <div className="slider-parent">
        <input className="form-range" type="range" min="0" max="10" step="0.25" value={sliderTwo}
           onChange={({ target: { value: radius } }) => {
             setInterestRate(radius)
                      setSliderTwo(radius);
                    }}
        />
        
      </div>
      </>
    );
  }