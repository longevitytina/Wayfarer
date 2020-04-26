import React from "react";
import { Link } from "react-router-dom";

export default function CityPosts(props) {
  return (
    <li className="media position-relative my-4">
      <img className="mr-3 img-thumbnail w-25" src={props.image} alt="" />
      <div className="media-body">
        <h5 className="mt-0">{props.title} </h5>
        <p>{props.body[0]}</p>
        <Link
          className="link"
          to={{
            pathname: `/post/${props._id}`,
          }}
        >
          <p className="stretched-link mt-0 mb-1"> ...Read more</p>
        </Link>
      </div>
    </li>
  );
}
