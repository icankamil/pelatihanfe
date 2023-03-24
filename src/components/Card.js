import React from "react";

function Card({ data, header }) {
  return (
    <div class="card">
      <h5>{header}</h5>
      <div class="card-body">{data}</div>
    </div>
  );
}

export default Card;
