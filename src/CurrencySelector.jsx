import React, { useContext } from "react";
import { Context } from "./store/StoreProvider";

import CurrencySelectorButton from "./CurrencySelectorButton";
import CurrencySelectorDropdown from "./CurrencySelectorDropdown";

const CurrencySelector = React.memo(function CurrencySelector({
  selectedCurrency,
  extraCurrency,
  setCurrency,
  setExtraCurrency,
}) {
  const options = ["RUB", "USD", "EUR", extraCurrency];
  const { valute } = useContext(Context);

  return (
    <div className="currency-selector d-flex dropdown-menu">
      {options.map((op, i) => {
        const title = op === "RUB" ? "Российский рубль" : op;
        return (
          <CurrencySelectorButton
            key={op + i}
            title={(valute[op] && valute[op].Name) || title}
            onClick={() => setCurrency(op)}
            active={op === selectedCurrency}
          >
            {op}
          </CurrencySelectorButton>
        );
      })}
      <CurrencySelectorDropdown
        setExtraCurrency={(valute) => {
          if (~options.indexOf(valute)) setCurrency(valute);
          else setExtraCurrency(valute);
        }}
      />
    </div>
  );
});
export default CurrencySelector;
