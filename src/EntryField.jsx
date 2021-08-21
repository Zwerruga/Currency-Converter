import React from "react";

const EntryField = React.memo(function EntryField({ changeAmount, amount }) {
  const handleChange = (e) => {
    const inputSymbol = e.nativeEvent.data;
    let newAmount = "";

    if (inputSymbol === null) {
      newAmount = e.target.value;
      changeAmount(newAmount);
    } else if (amount.length >= 12) {
      return;
    }

    if (parseInt(inputSymbol) || inputSymbol === "0") {
      newAmount = `${parseFloat(e.target.value)}`;
      return changeAmount(newAmount);
    } else if (inputSymbol === ".") {
      if (!amount.length) {
        newAmount = "0.";
        return changeAmount(newAmount);
      } else if (~amount.lastIndexOf(inputSymbol)) {
        return;
      }
      newAmount = amount + ".";
      return changeAmount(newAmount);
    }
  };
  return (
    <input className="entry-field" value={amount} onChange={handleChange} />
  );
});

export default EntryField;
