import React from "react";
import "./Buttons.css";

const Buttons = ({ reset }) => {
  return (
    <div className="button-box">
      <button className="button btn-none " type="submit">
        Calculate
      </button>
      <button className="reset-button" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default Buttons;
