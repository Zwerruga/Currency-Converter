const calculate = (
  store,
  transferСurrency,
  receivedCurrency,
  transferAmount
) => {
  const getValue = (currency) =>
    store[currency] ? store[currency].Value.toFixed(4) : 1;
  const transferСurrencyValue = getValue(transferСurrency);
  const receivedCurrencyValue = getValue(receivedCurrency);
  const quotient = transferСurrencyValue / receivedCurrencyValue;

  return (transferAmount * quotient).toFixed(4);
};

const Reducer = (state, action) => {
  switch (action.type) {
    case "SWAP":
      return {
        ...state,
        firstField: { ...state.secondField },
        secondField: { ...state.firstField },
      };
    case "SET_FIRST_SELECTOR":
      return {
        ...state,
        firstField: { ...state.firstField, selectedCurrency: action.payload },
        secondField: {
          ...state.secondField,
          amount: calculate(
            state.valute,
            action.payload,
            state.secondField.selectedCurrency,
            state.firstField.amount
          ),
        },
      };
    case "SET_SECOND_SELECTOR":
      return {
        ...state,
        secondField: {
          ...state.secondField,
          selectedCurrency: action.payload,
          amount: calculate(
            state.valute,
            state.firstField.selectedCurrency,
            action.payload,
            state.firstField.amount
          ),
        },
      };
    case "SET_FIRST_AMOUNT":
      return {
        ...state,
        firstField: {
          ...state.firstField,
          amount: action.payload,
        },
        secondField: {
          ...state.secondField,
          amount: calculate(
            state.valute,
            state.firstField.selectedCurrency,
            state.secondField.selectedCurrency,
            action.payload
          ),
        },
      };
    case "SET_SECOND_AMOUNT":
      return {
        ...state,
        firstField: {
          ...state.firstField,
          amount: calculate(
            state.valute,
            state.secondField.selectedCurrency,
            state.firstField.selectedCurrency,
            action.payload
          ),
        },
        secondField: {
          ...state.secondField,
          amount: action.payload,
        },
      };
    case "SET_FIRST_EXTRA_CURRENCY":
      return {
        ...state,
        firstField: {
          ...state.firstField,
          selectedCurrency: action.payload,
          extraCurrency: action.payload,
        },
        secondField: {
          ...state.secondField,
          amount: calculate(
            state.valute,
            action.payload,
            state.secondField.selectedCurrency,
            state.secondField.amount
          ),
        },
      };
    case "SET_SECOND_EXTRA_CURRENCY":
      return {
        ...state,
        secondField: {
          ...state.secondField,
          selectedCurrency: action.payload,
          extraCurrency: action.payload,
          amount: calculate(
            state.valute,
            state.firstField.selectedCurrency,
            action.payload,
            state.firstField.amount
          ),
        },
      };
    case "SET_VALUTE":
      return {
        ...state,
        valute: action.payload,
      };
    default:
      return { ...state };
  }
};

export default Reducer;
