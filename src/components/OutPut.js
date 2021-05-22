import React from "react";
import "./OutPut.css";

const OutPut = ({ monthlyPayment }) => {
  return (
    <>
      <div className="form-box2">
        <p className="label">monthly payment </p>
        <p>${monthlyPayment}</p>
      </div>
    </>
  );
};

export default OutPut;
