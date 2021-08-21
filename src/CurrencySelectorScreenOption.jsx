import React from "react";

const CurrencySelectorScreenOption = React.memo(
  function CurrencySelectorScreenOption({ title, value, onClick }) {
    return (
      <div
        className="options-screen__option d-flex align-cnt jus-sp-btw"
        onClick={onClick}
      >
        <div className="options-screen__option-title">{title}</div>
        <div className="options-screen__option-value">{value}</div>
      </div>
    );
  }
);
export default CurrencySelectorScreenOption;
