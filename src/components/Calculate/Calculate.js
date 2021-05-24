import React, { useState } from "react";
import "./Calculate.css";
import Buttons from "./Buttons/Buttons";
import Title from "./Title/Title";
import MonthlyPayment from "./MonthlyPayment/MonthPayment";
import SliderOne from './Silder/SliderOne'
import SliderTwo from '../SilderTwo/SliderTwo'

const Calculate = () => {
  const [loanAmount, setLoanAmount] = useState("0");
  const [interestRate, setInterestRate] = useState("0");
  const [numMonths, setNumMonth] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [sliderOne, setSliderOne]=useState(loanAmount);
  const [sliderTwo, setSliderTwo]=useState(interestRate);

  const calculate = (e) => {
    e.preventDefault();
    const formValid =
      loanAmount >= 0 &&
      0 <= interestRate &&
      interestRate <= 100 &&
      numMonths > 0;
    if (!formValid) {
      return;
    }
    setMonthlyPayment(
      Math.round((loanAmount * (1 + interestRate / 100)) / numMonths)
    );
  };

  const onReset = () => {
    setLoanAmount("");
    setInterestRate("");
    setNumMonth("");
    setMonthlyPayment(0);
   setSliderOne("0");
   setSliderTwo("0")
  };

  return (
    <div className="body-container">
      <Title />
      <div className="cal-box">
        <MonthlyPayment monthlyPayment={monthlyPayment.toFixed(2)} />

        <form onSubmit={calculate}>
          <div className="form-box">
            <div>
              <SliderOne sliderOne={sliderOne} setSliderOne={setSliderOne}values={loanAmount} setLoanAmount={setLoanAmount}/>
            </div>
            <div>
              <div className="rate-box">
               <SliderTwo sliderTwo={sliderTwo} setSliderTwo={setSliderTwo} setInterestRate={setInterestRate}/>
                
              </div>
            </div>
            <div>
              <label className="label">Number Of Months</label>
              <input
                className="form-control"
                type="number"
                placeholder="0"
                aria-label="default input example"
                value={numMonths}
                onChange={(e) => setNumMonth(e.target.value)}
              />
            </div>

            <Buttons reset={onReset} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Calculate;
