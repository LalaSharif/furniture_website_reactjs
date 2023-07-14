import React, { useRef } from "react";
import Slider from "react-slick";
import "./categories.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import CategoiresItem from "../CategoiresItem/CategoiresItem";
function Categoryies() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <section className="categories__section">
      <Slider {...settings}>
        <CategoiresItem />
        <CategoiresItem />
        <CategoiresItem />
        <CategoiresItem />
        <CategoiresItem />
        <CategoiresItem />
      </Slider>
      {/* <div className="categories__section__buttons">
        <div className="categories__section__button left">
          <BsFillArrowLeftCircleFill />
        </div>
        <div onClick={handleNext} className="categories__section__button right">
          <BsFillArrowRightCircleFill />
        </div>
      </div> */}
    </section>
  );
}

export default Categoryies;
