import React, { useContext } from "react";
import { Context } from "./store/StoreProvider";

const CurrencySelectorButton = React.memo(function CurrencySelectorButton({
  children,
  title = "",
  onClick,
  active = false,
}) {
  const { valute } = useContext(Context);
  const valuteName = valute && valute[title] && valute[title].Name;
  return (
    <div
      className={`d-flex currency-selector__btn ${
        active ? "currency-selector__btn_active" : ""
      }`}
      onClick={onClick}
    >
      <p className="d-flex align-cnt jus-cnt tip">
        {children}
        {title && <span className="tip__title">{valuteName || title}</span>}
      </p>
    </div>
  );
});
export default CurrencySelectorButton;
