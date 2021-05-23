import React from "react";
import "./MonthlyPayment.css";

const MonthlyPayment = ({ monthlyPayment }) => {
  return (
    <div className="total-box">
      <p className="label2">Monthly Payment </p>
      <p className="monthly-amount">${monthlyPayment}</p>
    </div>
  );
};

export default MonthlyPayment;
