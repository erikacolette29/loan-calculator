import React,{useState, useEffect} from 'react';
import "./SliderOne.css"

export default function SliderOne({ sliderOne, setSliderOne, values, setLoanAmount}) {
    
    // const [slider, setSlider1]=useState(values);
  

    useEffect(()=>{
        const ele = document.querySelector('.buble');
      if (ele) {
        ele.style.left = `${Number(sliderOne / 4)}px`;
      }
    })
  
    return (
      <>
      <div className="loan-amount-box">
      <label className="label">Loan Amount</label>
      <div className="buble" > 
        ${sliderOne}
        </div>
        </div>
      <div className="slider-parent">
        <input className="form-range" type="range" min="1" max="100000" value={sliderOne}
           onChange={({ target: { value: radius } }) => {
             setLoanAmount(radius)
                      setSliderOne(radius);
                    }}
        />
        
      </div>
      </>
    );
  }