import React from "react";
//import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

export default function Home(props) {
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
            <a href="/city/5ea78433fb3a91a6cc789efe">
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
            <a href="/city/5ea78433fb3a91a6cc789f01">
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
            <a href="/city/5ea78433fb3a91a6cc789eff">
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
            <a href="/city/5ea78433fb3a91a6cc789f00">
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
            <a href="/city/5ea78433fb3a91a6cc789f02">
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
            <h3>Topic</h3>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </div>
          <div className="col-sm p-3">
            <h3>Topic</h3>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </div>
          <div className="col-sm p-3">
            <h3>Topic</h3>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
