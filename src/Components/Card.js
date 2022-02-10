import React, { useState } from "react";
import "./card.css";
import shoes from "../assets/1.jpg";
const Card = (props) => {
  const [ActiveUrl, setActiveUrl] = useState(
    props?.shoe?.media?.thumbUrl || shoes
  );
  return (
    <div className='container card'>
      <div
        className='heading'
        style={{
          borderLeft: `5px solid ${
            props?.shoe?.colorway.split("/")[0] !== "White"
              ? props?.shoe?.colorway.split("/")[0]
              : props?.shoe?.colorway.split("/")[1]
          }`,
        }}
      >
        <h2>
          {props.shoe.name.length < 20
            ? props.shoe.name
            : props.shoe.name.slice(0, 20) + "..."}
        </h2>
        <p>{props.shoe.brand}</p>
      </div>
      <div className='thumnail-container'>
        <img
          // onError={(e) => handleError(e)}
          className='thumnail'
          src={ActiveUrl}
        ></img>
      </div>
      <div className='card-footer'>
        <div className='price-conatiner'>
          <p>Price</p>
          <h4>$ {props.shoe.retailPrice}</h4>
        </div>
        <div className='img-preview-conatiner'>
          <img
            onClick={() => {
              setActiveUrl(props?.shoe?.media?.imageUrl);
            }}
            src={props?.shoe?.media?.imageUrl || shoes}
            className={`img-preview`}
          ></img>
          <img
            onClick={() => {
              setActiveUrl(props?.shoe?.media?.smallImageUrl);
            }}
            src={props?.shoe?.media?.smallImageUrl || shoes}
            className={`img-preview`}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Card;
