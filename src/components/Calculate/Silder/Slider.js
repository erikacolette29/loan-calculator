import React,{useState, useEffect} from 'react';
import "./Slider.css"

export default function Slider({values, setLoanAmount}) {
    
    const [value, setValue]=useState(values);
  
    useEffect(()=>{
        const ele = document.querySelector('.buble');
      if (ele) {
        ele.style.left = `${Number(value / 4)}px`;
      }
    })
  
    return (
      <>
      <div className="loan-amount-box">
      <label className="label">Loan Amount</label>
      <div className="buble" > 
        ${value}
        </div>
        </div>
      <div className="slider-parent">
        <input className="form-range" type="range" min="1" max="50000" value={value}
           onChange={({ target: { value: radius } }) => {
             setLoanAmount(radius)
                      setValue(radius);
                    }}
        />
        
      </div>
      </>
    );
  }