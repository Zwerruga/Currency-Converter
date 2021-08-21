import React, { useState } from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import CurrencySelectorScreen from "./CurrencySelectorScreen";

const CurrencySelectorDropdown = React.memo(function CurrencySelectorDropdown({
  setExtraCurrency,
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`currency-selector__btn ${
        open ? "currency-selector__btn_active" : ""
      } d-flex align-cnt jus-cnt`}
      tabIndex="1"
      onClick={() => {
        setOpen((s) => !s);
      }}
      onBlur={() => setOpen(false)}
    >
      {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      {open && <CurrencySelectorScreen setExtraCurrency={setExtraCurrency} />}
    </div>
  );
});
export default CurrencySelectorDropdown;
