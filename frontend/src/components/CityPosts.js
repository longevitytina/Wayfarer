import React from "react";

export default function CityPosts(props) {
  return (
    <li className="media py-3">
      <img className="mr-3 img-thumbnail w-25" src={props.image} alt="" />
      <div className="media-body">
        <h5 className="mt-0 mb-1">{props.title}</h5>
        {props.body[0]}...
      </div>
    </li>
  );
}
