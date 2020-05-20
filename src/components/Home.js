import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";

const Home = (props) => {
  const [cities, setCities] = useState([]);
  console.log(cities);

  useEffect(() => {
    setCities(props.context.cities);
  }, [props.context.cities]);

  const getCityUrl = (cityName) => {
    const cityObj = cities.find((city) => city.name === cityName);
    return cities.length > 1 ? "/city/" + cityObj._id : "/";
  };

  return (
    <div>
      <div className="image-blurred-edge m-5">
        <Carousel>
          <Carousel.Item>
            <a href="/profile">
              <img
                className="d-block w-100"
                src="/images/moving.gif"
                alt="First slide"
              />
            </a>
          </Carousel.Item>

          <Carousel.Item>
            <a href={getCityUrl("Bangkok")}>
              <img
                className="d-block w-100"
                src="/images/bangkok.jpeg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <p>Bangkok, Thailand</p>
              </Carousel.Caption>
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href={getCityUrl("London")}>
              <img
                className="d-block w-100"
                src="/images/london.jpeg"
                alt="Third slide"
              />
            </a>
            <Carousel.Caption>
              <p>London, UK</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <a href={getCityUrl("San Francisco")}>
              <img
                className="d-block w-100"
                src="/images/sf.jpeg"
                alt="Fourth slide"
              />
            </a>
            <Carousel.Caption>
              <p>San Francisco, USA</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <a href={getCityUrl("Las Vegas")}>
              <img
                className="d-block w-100"
                src="/images/lasv.jpeg"
                alt="Fifth slide"
              />
            </a>
            <Carousel.Caption>
              <p>Las Vegas, USA</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <a href={getCityUrl("Gibraltar")}>
              <img
                className="d-block w-100"
                src="/images/gib.jpeg"
                alt="Sixth slide"
              />
            </a>
            <Carousel.Caption>
              <p>Gibraltar, UK</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <h2 className="text-center">Wayfarer is...</h2>
      <div className="container px-5">
        <div className="row">
          <div className="col-sm p-3">
            <h3>Cities</h3>
            <p>
              Learn more about the cities you plan to visit. Discover new cities
              for your travel bucket list. Or just be an armchair traveller. All
              are welcome!
            </p>
          </div>
          <div className="col-sm p-3">
            <h3>Stories</h3>
            <p>
              Have stories to share from your travels? You've come to the right
              place. Tell your tales to fellow travellers. Read other people's
              stories.
            </p>
          </div>
          <div className="col-sm p-3">
            <h3>People</h3>
            <p>
              Connect with the authors of your favorites stories. Read something
              you like? Come across an author whose style you liked? See what
              else they've posted.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
