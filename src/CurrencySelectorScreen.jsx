import React, { useContext } from "react";
import CurrencySelectorScreenOption from "./CurrencySelectorScreenOption";
import { Context } from "./store/StoreProvider";

const CurrencySelectorScreen = React.memo(function CurrencySelectorScreen({
  setExtraCurrency,
}) {
  const { valute } = useContext(Context);
  return (
    <div className="dropdown-menu__options-screen options-screen d-flex fl-dir-col">
      {Object.keys(valute).map((val) => (
        <CurrencySelectorScreenOption
          key={valute[val].ID}
          title={valute[val].Name}
          value={valute[val].CharCode}
          onClick={() => setExtraCurrency(valute[val].CharCode)}
        />
      ))}
    </div>
  );
});
export default CurrencySelectorScreen;
