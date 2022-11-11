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
        
        <span style={{marginLeft:'100px',marginTop:"20px"}}>
        {open ? (
          
          <div style={styles.arrowUp}></div>
          
        ) : (
          <div style={styles.arrowDown}></div>
        )}
        </span>
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
  arrowUp : {
    width: 0,
    height: 0,
    borderLeft: "12px solid transparent",
    borderRight:" 12px solid transparent",
    borderBottom: "12px solid black",
  },
  arrowDown  : {
    width: 0,
    height: 0,
    borderLeft: "12px solid transparent",
    borderRight:" 12px solid transparent",
    borderTop: "12px solid black",
  },
  rowFlex: { display: "flex", flexDirection: "row" },
  iconStyle: { marginLeft: "auto", marginTop: "12px" },
};
export default LeftContainer;
