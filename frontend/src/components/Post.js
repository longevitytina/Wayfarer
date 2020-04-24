import React from "react";
import { Link } from "react-router-dom";

const Post = ({ _id, title, body, city, image, author }) => {
  return (
    <div key={_id}>
      <img src={image} alt={title} />
      <Link
        to={{
          pathname: `/post/${_id}`,
          state: {
            image,
            title,
            author,
            city,
            body
          },
        }}
      >
        Link
      </Link>
    </div>
  );
};

export default Post;
