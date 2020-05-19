import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { Media } from "react-bootstrap";

const Post = (props) => {
  if (props.city) {
    return (
      <Media as="li">
        <img
          width={64}
          height={64}
          className="mr-3"
          src={props.image}
          alt={props.title}
        />
        <Media.Body>
          <h5 className="mb-n2">{props.title}</h5>
          <sub>
            {props.city.name}, {props.city.country} |{" "}
            <Moment local format="LL">
              {props.createdAt}
            </Moment>
          </sub>
          <p className="text-truncate w-25">{props.body[0]}</p>
          <Link
            className="stretched-link"
            to={{
              pathname: `/post/${props._id}`,
            }}
          ></Link>
        </Media.Body>
      </Media>
    );
  } else {
    return <p>Pending</p>;
  }
};

export default Post;
