import React,{useState, useEffect} from 'react';
import "./SliderThree.css"

export default function SliderOne({ sliderThree, setSliderThree, values, setNumMonth}) {
    
    // const [slider, setSlider1]=useState(values);
  

    useEffect(()=>{
        const ele = document.querySelector('.buble');
      if (ele) {
        ele.style.left = `${Number(sliderThree / 4)}px`;
      }
    })
  
    return (
      <>
      <div className="loan-amount-box">
      <label className="label">Number Of Months</label>
      <div className="buble" > 
        {sliderThree}
        </div>
        </div>
      <div className="slider-parent">
        <input className="form-range" type="range" min="1" max="100" value={sliderThree}
           onChange={({ target: { value: radius } }) => {
             setNumMonth(radius)
                      setSliderThree(radius);
                    }}
        />
        
      </div>
      </>
    );
  }