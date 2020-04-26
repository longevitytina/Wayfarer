import React from "react";
import { Link } from "react-router-dom";

export default function CityPosts(props) {
  console.log(props._id);

  return (
    <li className="media py-3">
      <img className="mr-3 img-thumbnail w-25" src={props.image} alt="" />
      <div className="media-body">
        <Link
          to={{
            pathname: `/post/${props._id}`,
          }}
        >
          <h5 className="mt-0 mb-1">{props.title}</h5>
        </Link>
        {props.body[0]}...
      </div>
    </li>
  );
}
