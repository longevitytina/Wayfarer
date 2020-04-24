import React from "react";
import { Link } from "react-router-dom";

export default function Results({ results }) {
  const giphyImages = results.map((image, index) => {
    const picture = image.images.fixed_width.url;
    return (
      <div key={index}>
        <img src={picture} alt={image.title} />
        <Link
          to={{
            pathname: `/details/${image.id}`,
            state: {
              image: picture,
              title: image.title,
              created: image.import_datetime,
            },
          }}
        >
          Link
        </Link>
      </div>
    );
  });
  return <div className="Results">{giphyImages}</div>;
}