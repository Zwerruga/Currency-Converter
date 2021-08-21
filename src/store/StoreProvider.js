import Reducer from "./Reducer";
import { useEffect, createContext, useReducer } from "react";
import { SET_VALUTE } from "./Actions";

const INITIAL_STATE = {
  valute: [],
  firstField: {
    selectedCurrency: "USD",
    extraCurrency: "GBP",
    amount: "0",
  },
  secondField: {
    selectedCurrency: "RUB",
    extraCurrency: "GBP",
    amount: "0",
  },
};

export const Context = createContext(INITIAL_STATE);

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  useEffect(() => {
    fetch("https://www.cbr-xml-daily.ru/daily_json.js")
      .then((res) => res.json())
      .then((res) => {
        dispatch(SET_VALUTE(res.Valute));
      });
  }, []);

  return (
    <Context.Provider
      value={{
        valute: state.valute,
        firstField: state.firstField,
        secondField: state.secondField,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
