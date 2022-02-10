import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./rightContainer.css";
import Input from "./Input";
const RightContainer = (props) => {
  const { filters } = props;
  const [isLowtoHigh, setIsLowtoHigh] = useState(null);
  const [search, setSearch] = useState(null);
  const [shoes, setShoes] = useState(props.shoes);
  const handleFilters = (shoe) => {
    let fliterPassed = true;
    if (filters.search) {
      if (!shoe.title.toLowerCase().includes(filters.search.toLowerCase())) {
        return false;
      }
    }
    if (filters.genders && filters.genders.length !== 0) {
      if (!filters.genders.includes(shoe.gender)) {
        return false;
      }
    }
    if (filters.colors && filters.colors.length !== 0) {
      if (
        !filters.colors.includes(shoe.colorway.split("/")[0]) &&
        !filters.colors.includes(shoe.colorway.split("/")[1])
      ) {
        return false;
      }
    }
    if (filters.priceBelow) {
      if (!(shoe.retailPrice < filters.priceBelow)) {
        return false;
      }
    }
    return true;
  };
  const handleSort = (isLowtoHigh) => {
    let toSort = shoes;
    if (isLowtoHigh == "null" || isLowtoHigh == "Sort By Price") {
      toSort = props.shoes;
      setShoes(toSort);
    } else {
      toSort.sort((a, b) => a.retailPrice - b.retailPrice);
      console.log(isLowtoHigh);
      toSort = isLowtoHigh == "true" ? toSort : toSort.reverse();
      console.log(toSort);
    }
    setShoes(toSort);
  };
  return (
    <div className='container'>
      <input
        onChange={(e) => {
          setSearch(e.target.value);
          props.setFilters({ ...props.filters, ...{ search: e.target.value } });
        }}
        value={search}
        placeholder='Search'
        style={styles.inputStyle}
      ></input>
      <div style={styles.OuterDiv}>
        <h2 style={styles.bold}>New Arrivals</h2>
        <select
          name='Sort'
          id='Sort'
          onChange={(e) => {
            setIsLowtoHigh(e.target.value);
            props.setFilters({
              ...props.filters,
              ...{ isLowtoHigh: e.target.value },
            });
            handleSort(e.target.value);
          }}
          className='sort-dropdown'
        >
          <option className='Items' value={null}>
            Sort By Price
          </option>
          <option className='Items' value={true}>
            Low to High
          </option>
          <option className='Items' value={false}>
            High to Low
          </option>
        </select>
      </div>
      <div className='container justify-start right-container'>
        {shoes.filter(handleFilters).length > 0 ? (
          shoes.filter(handleFilters).map((shoe) => <Card shoe={shoe} />)
        ) : (
          <>
            <h1 style={styles.noResultsMessage}>
              No Shoes Matching Your Search
            </h1>
          </>
        )}
      </div>
    </div>
  );
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
  OuterDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    margin: "16px",
  },
  bold: { fontWeight: "bold" },
  noResultsMessage: {
    display: "flex",
    textAlign: "center",
    margin: "auto auto",
  },
};
export default RightContainer;
