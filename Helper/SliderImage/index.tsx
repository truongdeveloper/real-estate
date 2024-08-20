import { useState } from "react";
import {
  Carousel,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
} from "reactstrap";
import Image from "next/image";

const items = [
  {
    src: "https://picsum.photos/id/123/1200/400",
  },
  {
    src: "https://picsum.photos/id/456/1200/400",
  },
  {
    src: "https://picsum.photos/id/678/1200/400",
  },
];

type ISliderImage = {
  listImages: any[];
  width: number;
  height: number;
};

const SliderImage = ({ listImages, width, height, rounder }: any) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex: number) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = listImages.map((item: any) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.url}
      >
        <div
          style={{
            height: height,
            width: "100%",
          }}
        >
          <Image
            fill={true}
            src={item.url}
            alt=""
            style={{ objectFit: "contain" }}
            className="lazy-img"
          />
        </div>
      </CarouselItem>
    );
  });
  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default SliderImage;
