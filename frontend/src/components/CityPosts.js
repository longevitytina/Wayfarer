import React from "react";
import Button from "react-bootstrap/Button";

export default function CityPosts(props) {
  console.log(props._id);

  const deleteClickedPost = () => props.onDeletePost(props._id);

  return (
    <li className="media py-3">
      <img className="mr-3 img-thumbnail w-25" src={props.image} alt="" />
      <div className="media-body">
        <h5 className="mt-0 mb-1">{props.title}</h5>
        {props.body[0]}...
        <br />
        <Button variant="outline-dark">View</Button>
        <Button variant="outline-dark">Edit</Button>
        <Button
          variant="outline-dark"
          className="delete"
          onClick={deleteClickedPost}
        >
          Delete
        </Button>
      </div>
      <button className="edit" onClick="">
        Edit
      </button>
      <button className="remove" onClick="">
        Remove
      </button>
    </li>
  );
}
