import React from "react";

export default function CityPosts(props) {
  return (
    <>
      <div>{props.title}</div>
      <div>{props.body[0]}...</div>
    </>
  );
}
