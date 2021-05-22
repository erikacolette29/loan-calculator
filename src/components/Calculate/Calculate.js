import React, { useState } from "react";
import "./Calculate.css";
import Buttons from "./Buttons/Buttons";
import Title from "./Title/Title";
import MonthlyPayment from "./MonthlyPayment/MonthPayment";

const Calculate = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [numMonths, setNumMonth] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculate = (e) => {
    e.preventDefault();
    const formValid =
      +loanAmount >= 0 &&
      0 <= +interestRate &&
      +interestRate <= 100 &&
      +numMonths > 0;
    if (!formValid) {
      return;
    }
    setMonthlyPayment(
      Math.round((+loanAmount * (1 + +interestRate / 100)) / +numMonths)
    );
  };

  const onReset = () => {
    setLoanAmount("");
    setInterestRate("");
    setNumMonth("");
    setMonthlyPayment(0);
  };

  return (
    <div className="body-container">
      <Title />
      <div className="cal-box">
        <MonthlyPayment monthlyPayment={monthlyPayment.toFixed(2)} />

        <form onSubmit={calculate}>
          <div className="form-box">
            <div>
              <label className="label">loan amount</label>
              <input
                className="form-control"
                type="number"
                placeholder="$0"
                aria-label="default input example"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
              />
            </div>
            <div>
              <div className="rate-box">
                <label className="label">interest rate</label>
                <label className="label">
                  <a
                    className="current-rates"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.nerdwallet.com/blog/mortgages/current-interest-rates/"
                  >
                    current rates
                  </a>
                </label>
              </div>
              <input
                className="form-control"
                type="number"
                placeholder="%"
                aria-label="default input example"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
              />
            </div>
            <div>
              <label className="label">number of months</label>
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
