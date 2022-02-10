import React from "react";

const Input = () => {
  return <input placeholder='Search' style={styles.inputStyle}></input>;
};
const styles = {
  inputStyle: {
    display: "flex",
    border: "1px solid lightgray",
    borderRadius: "12px",
    fontSize: "24px",
    fontWeight: "bold",
    padding: "5px 5px 5px 20px",
    margin: "16px",
  },
};
export default Input;
