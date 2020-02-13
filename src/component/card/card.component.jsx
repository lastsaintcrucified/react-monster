import React from "react";
import "../card-list/card-list.style.css";

export const Card = props => {
  const style = {
    height: 180,
    width: 180
  };
  return (
    <div className="card card-bd">
      <img
        className="card-img-top mx-auto"
        src={`https://robohash.org/${props.monster.id}?set=set2`}
        alt="Card cap"
        style={style}
      />
      <div className="card-body">
        <h5 className="card-title">{props.monster.name}</h5>
        <p className="card-text">{props.monster.email}</p>
      </div>
    </div>
  );
};
