"use client";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import React, { useRef } from "react";

import titleShape from "@/assets/images/shape/title_shape_02.svg";
import feature_data from "../../data/home-data/FeatureData";
import category_data from "../../data/home-data/CategoryData";

const setting = {
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "0",
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const BLockFeatureThree = () => {
  const sliderRef = useRef<Slider | null>(null);

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="block-feature-three mt-150 xl-mt-120">
      <div className="container">
        <div className="title-one text-center mb-75 xl-mb-50 md-mb-30 wow fadeInUp">
          <h3>
            Khám phá{" "}
            <span>
              thể loại <Image src={titleShape} alt="" className="lazy-img" />
            </span>
          </h3>
          <p className="fs-22">
            Khám phá danh sách bất động sản mới nhất trong các loại BĐS khác
            nhau
          </p>
        </div>

        <Slider
          {...setting}
          ref={sliderRef}
          className="property-location-slider-one"
        >
          {category_data.slice(1).map((item, i) => (
            <div key={item.id} className="item-first">
              <div
                className={`location-card-one position-relative z-1 d-flex align-items-end card-${i}`}
              >
                <div className="content text-center w-100 tran3s">
                  <h5 className="text-white fw-normal">{item.name}</h5>
                </div>
                <Link
                  href={`/real-estate-listing?category=${item.id}`}
                  className="stretched-link"
                ></Link>
              </div>
            </div>
          ))}
        </Slider>

        <ul className="slider-arrows slick-arrow-one d-flex justify-content-between style-none position-relative">
          <li onClick={handlePrevClick} className="prev_a slick-arrow">
            <i className="fa-sharp fa-light fa-angle-left"></i>
          </li>
          <li onClick={handleNextClick} className="next_a slick-arrow">
            <i className="fa-sharp fa-light fa-angle-right"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BLockFeatureThree;
