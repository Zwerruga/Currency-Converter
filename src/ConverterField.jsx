import React from "react";
import CurrencySelector from "./CurrencySelector";
import EntryField from "./EntryField";

const ConverterField = React.memo(function ConverterField({
  title,
  selectedCurrency,
  extraCurrency,
  setCurrency,
  setExtraCurrency,
  amount,
  changeAmount,
}) {
  return (
    <div className="converter-field">
      <p className="converter-field__title">{title}</p>
      <div className="converter-field__item">
        <CurrencySelector
          selectedCurrency={selectedCurrency}
          extraCurrency={extraCurrency}
          setCurrency={setCurrency}
          setExtraCurrency={setExtraCurrency}
        />
      </div>
      <div className="converter-field__item">
        <EntryField changeAmount={changeAmount} amount={amount} />
      </div>
    </div>
  );
});
export default ConverterField;
