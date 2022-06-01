import React from "react";
import "./Slider.css";
import Card1 from "./Card1.jsx";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const settings = {
  infinite: true,
  speed: 30,
  slidesToShow: 4,
  slidesToScroll: 4,
};
const slideImages = [
  {
    id: 1,
    name: "Tshirt",
    orPrice: "34.50",
    diPrice: "24.50",
    image: "SliderImages/1.png",
  },
  {
    id: 2,
    name: "Dress",
    orPrice: "37.50",
    diPrice: "18.50",
    image: "SliderImages/2.png",
  },
  {
    id: 3,
    name: "Jacket",
    orPrice: "34.50",
    diPrice: "24.50",
    image: "SliderImages/3.png",
  },
  {
    id: 4,
    name: "Shorts",
    orPrice: "34.50",
    diPrice: "24.50",
    image: "SliderImages/4.png",
  },
];

export default function Slider() {
  return (
    <div className="main">
      <div className="slide-container">
        <Slide {...settings}>
          {slideImages.map((product, index) => (
            <div className="each-slide" key={index}>
              <div
                className="slide-div"
                style={{
                  height: "400px",
                  width: "250px",
                }}
              >
                <Card1
                  name={product.name}
                  img={product.image}
                  orgPrice={product.orPrice}
                  disPrice={product.diPrice}
                ></Card1>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
}
