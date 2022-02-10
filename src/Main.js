import React, { useEffect, useState } from "react";
import axios from "axios";
import LeftContainer from "./Components/LeftContainer";
import RightContainer from "./Components/RightContainer";
import Loading from "./assets/shoes_Loading.gif";
const Main = () => {
  const [shoes, setShoes] = useState([]);
  const [page, setpage] = useState(0);
  const [filters, setFilters] = useState({});
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://v1-sneakers.p.rapidapi.com/v1/sneakers", {
        params: {
          limit: 12,
          page: page,
        },
        headers: {
          "x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
          "x-rapidapi-key":
            "8cf4ddfccemsh47ead10e6711b07p146568jsn39c414a2de74",
        },
      })
      .then((res) => {
        setShoes(res.data?.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setErrorMessage(err.message);
        setLoading(false);
      });
  }, []);
  // useEffect(() => {
  //   console.log(filters);
  // }, [filters]);
  return (
    <div className='container'>
      {/* <LeftContainer /> */}

      {!error ? (
        <>
          {loading ? (
            <>
              <img src={Loading} width='50%' height='50%'></img>
              <h1 style={{ textAlign: "center" }}>Loading...</h1>
            </>
          ) : (
            // <div className='container justify-start row'>
            //   <LeftContainer />
            //   <RightContainer shoes={shoes} />
            // </div>
            <div
              style={{
                display: "flex",
                // border: "1px solid red",
                flexDirection: "row",
                justifyContent: "space-between",
                margin: "5px",
              }}
            >
              <div
                style={{ display: "flex", borderRight: "1px solid lightgray" }}
              >
                <LeftContainer filters={filters} setFilters={setFilters} />
              </div>
              <div
                style={{
                  display: "flex",
                  // border: "1px solid blue",
                  alignSelf: "flex-end",
                  margin: "12px",
                }}
              >
                <RightContainer
                  shoes={shoes}
                  filters={filters}
                  setFilters={setFilters}
                />
              </div>
            </div>
          )}
        </>
      ) : (
        <p>{errorMessage}</p>
      )}
    </div>
  );
};

export default Main;
