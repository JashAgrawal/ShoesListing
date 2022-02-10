import React, { useState } from "react";
import Filters from "./Filters";

const LeftContainer = (props) => {
  const { filters, setFilters } = props;
  const [open, setOpen] = useState(false);
  return (
    <div style={styles.outerDiv}>
      <span
        style={styles.rowFlex}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <h1>Filters</h1>
        {!open ? (
          <i style={styles.iconStyle} class='fas fa-angle-double-down'></i>
        ) : (
          <i style={styles.iconStyle} class='fas fa-angle-double-up'></i>
        )}
      </span>

      {open ? <Filters filters={filters} setFilters={setFilters} /> : null}
    </div>
  );
};
const styles = {
  outerDiv: {
    display: "flex",
    flexDirection: "column",
    width: "20vw",
    height: "50vh",
    padding: "25px",
  },
  rowFlex: { display: "flex", flexDirection: "row" },
  iconStyle: { marginLeft: "auto", marginTop: "12px" },
};
export default LeftContainer;
