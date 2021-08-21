import { useContext } from "react";
import "./App.css";
import ConverterField from "./ConverterField";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import { Context } from "./store/StoreProvider";
import { SWAP } from "./store/Actions";
import {
  SET_FIRST_SELECTOR,
  SET_FIRST_EXTRA_CURRENCY,
  SET_FIRST_AMOUNT,
  SET_SECOND_SELECTOR,
  SET_SECOND_EXTRA_CURRENCY,
  SET_SECOND_AMOUNT,
} from "./store/Actions";

function App() {
  const { dispatch, firstField, secondField } = useContext(Context);
  return (
    <div className="main d-flex align-cnt jus-cnt">
      <div className="border d-flex align-cnt jus-cnt">
        <ConverterField
          title={"У меня есть"}
          selectedCurrency={firstField.selectedCurrency}
          extraCurrency={firstField.extraCurrency}
          setCurrency={(value) => dispatch(SET_FIRST_SELECTOR(value))}
          setExtraCurrency={(value) =>
            dispatch(SET_FIRST_EXTRA_CURRENCY(value))
          }
          amount={firstField.amount}
          changeAmount={(amount) => dispatch(SET_FIRST_AMOUNT(amount))}
        />
        <div
          className="swap-btn d-flex align-cnt jus-cnt"
          onClick={() => dispatch(SWAP())}
        >
          <SwapHorizIcon />
        </div>
        <ConverterField
          title={"Хочу приобрести"}
          selectedCurrency={secondField.selectedCurrency}
          extraCurrency={secondField.extraCurrency}
          setCurrency={(value) => dispatch(SET_SECOND_SELECTOR(value))}
          setExtraCurrency={(value) =>
            dispatch(SET_SECOND_EXTRA_CURRENCY(value))
          }
          amount={secondField.amount}
          changeAmount={(amount) => dispatch(SET_SECOND_AMOUNT(amount))}
        />
      </div>
    </div>
  );
}

export default App;
