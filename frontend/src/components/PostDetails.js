import React from "react";
import { withRouter } from "react-router-dom";

function Details({ location: { state } }) {
  const { title, body, city, image } = state;
  return (
    <div>
      <p>{title}</p>
      <img src={image} alt={title} />
      <p>{city}</p>
      <p>{body}</p>
    </div>
  );
}

export default withRouter(Details);
