import React, { useState, useEffect } from "react";
import "./Filters.css";
const Filters = (props) => {
  const colors = [
    "White",
    "Black",
    "Pink",
    "Blue ",
    "Green",
    "Red",
    "Orange",
    "Violet",
    "Indigo",
    "Yellow",
  ];
  const genders = ["men", "women", "toddler", "preschool"];
  const [priceValue, setPriceValue] = useState(1000);
  const [gender, setGender] = useState([]);
  const [color, setcolor] = useState([]);
  const handleColorChange = (e) => {
    if (e.target.checked) {
      setcolor([...color, ...[e.target.value]]);
    } else {
      setcolor(color.filter((val) => val !== e.target.value));
    }
    console.log(color);
    props.setFilters({
      ...props.filters,
      ...{ colors: [] },
    });
  };
  const handleGenderChange = (e) => {
    if (e.target.checked) {
      setGender([...gender, ...[e.target.value]]);
    } else {
      setGender(gender.filter((val) => val !== e.target.value));
    }
    console.log(gender);
    props.setFilters({
      ...props.filters,
      ...{ genders: [] },
    });
  };
  useEffect(() => {
    props.setFilters({
      ...props.filters,
      ...{ genders: gender, colors: color },
    });
  }, [gender, color]);
  return (
    <div style={styles.columnflex}>
      <div style={styles.outerDiv}>
        <h3 style={styles.subHeading}>Gender</h3>
        {genders.map((item) => (
          <div className='inputContainer'>
            <input
              type='checkbox'
              onChange={(e) => {
                handleGenderChange(e);
              }}
              id={item}
              name={item}
              value={item}
            />
            <label for={item} style={{ textTransform: "capitalize" }}>
              {item}
            </label>
          </div>
        ))}
      </div>
      <div class='slidecontainer'>
        <h3 style={styles.subHeading}>Price</h3>
        <input
          onChange={(e) => {
            setPriceValue(e.target.value);
            props.setFilters({
              ...props.filters,
              ...{ priceBelow: e.target.value },
            });
          }}
          type='range'
          min='10'
          max='500'
          value={priceValue}
          class='slider'
          id='myRange'
        />
        <div style={styles.rangerPriceContainer}>
          <p>$ 10</p>
          <p style={styles.priceHigh}>$ 500</p>
        </div>
      </div>
      <div style={styles.colorsOuterDiv}>
        <h3 style={styles.subHeading}>Colors</h3>
        <div style={styles.ColorBoxContainer}>
          {colors.map((color) => (
            <div style={styles.colorsInnerDiv}>
              <input
                type='checkbox'
                onChange={(e) => {
                  handleColorChange(e);
                }}
                className='CheckBox'
                id={color}
                name={color}
                value={color}
              />

              <label for={color}>
                <div
                  style={{
                    ...styles.colorPreviewBox,
                    ...{ backgroundColor: color },
                  }}
                ></div>
                <p>{color}</p>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
const styles = {
  columnflex: { display: "flex", flexDirection: "column" },
  outerDiv: {
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    justifyContent: "space-between",
  },
  subHeading: {
    display: "flex",
    padding: "10px 0",
  },
  rangerPriceContainer: {
    display: "flex",
    flexDirection: "row",
  },
  priceHigh: { marginLeft: "auto" },
  colorsDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
  },
  colorsInnerDiv: {
    display: "flex",
    margin: "1%",
    width: "45%",
  },
  colorPreviewBox: {
    display: "block",
    width: "25px",
    height: "25px",
    borderRadius: "20px",
    border: "1px solid lightgray",
    marginRight: "5px",
  },
  ColorBoxContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
};
export default Filters;
