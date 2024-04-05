"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
} from "reactstrap";

interface IUpLoadImage {
  register: any;
  setValue: any;
}

const UploadImage = ({ register, setValue }: IUpLoadImage) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [selectedImages, setSelectedImages] = useState<
    { url: string; name: string }[]
  >([]);

  const next = () => {
    if (animating || selectedImages.length === 0) return;
    const nextIndex =
      activeIndex === selectedImages.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating || selectedImages.length === 0) return;
    const nextIndex =
      activeIndex === 0 ? selectedImages.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex: number) => {
    if (animating || selectedImages.length === 0) return;
    setActiveIndex(newIndex);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const imageUrls = Array.from(files).map((file) => {
        return { url: URL.createObjectURL(file), name: file.name };
      });
      setSelectedImages([...selectedImages, ...imageUrls]);
      setActiveIndex(selectedImages.length); // Cập nhật activeIndex sau khi thêm ảnh mới
    }
  };

  const handleRemoveImage = (index: number) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
    // Cập nhật activeIndex nếu ảnh đang hiển thị được loại bỏ
    if (activeIndex == index) {
      setActiveIndex(activeIndex === 0 ? 0 : activeIndex - 1); // Đặt activeIndex về 0 nếu không còn ảnh
    }
  };

  useEffect(() => {
    // Sử dụng useEffect để lắng nghe thay đổi của selectedImages
    // và cập nhật giá trị của trường 'urls' trong form
    setValue(
      "urls",
      selectedImages.map((image: any) => image.url)
    );
  }, [selectedImages, setValue]);

  const slides =
    selectedImages.length > 0 ? (
      selectedImages.map((image, index) => (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={index}
        >
          <div style={{ height: "320px", width: "100%" }}>
            <Image
              fill={true}
              src={image.url}
              alt={`Slide ${index}`}
              style={{ objectFit: "contain" }}
            />
          </div>
          {/* <CarouselCaption
            captionText={image.name}
            captionHeader={""}
            className="text-primary"
          /> */}
        </CarouselItem>
      ))
    ) : (
      <CarouselItem>
        <div>No images selected</div>
      </CarouselItem>
    );

  return (
    <div className="bg-white card-box border-20 mt-40">
      <h4 className="dash-title-three">Hình ảnh</h4>
      <div className="image-preview">
        {selectedImages.length > 0 && (
          <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            interval={5000}
            keyboard
          >
            <CarouselIndicators
              items={slides as []}
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
        )}
      </div>
      <div className="dash-input-wrapper mb-20 mt-4">
        <label htmlFor="">Hình ảnh đính kèm*</label>
        <div className="row gap-3">
          {selectedImages.map((imageUrl, index) => (
            <div
              key={index}
              onClick={() => {
                goToIndex(index);
              }}
              className="col attached-file d-flex align-items-center justify-content-between overflow-hidden"
            >
              <span>{imageUrl.name}</span>
              <button
                onClick={(e: any) => {
                  e.preventDefault();
                  handleRemoveImage(index);
                }}
                className="remove-btn"
              >
                <i className="bi bi-x"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="dash-btn-one d-inline-block position-relative me-3">
        <i className="bi bi-plus"></i>
        Thêm ảnh
        <input
          type="file"
          id="uploadCV"
          name="uploadCV"
          placeholder=""
          accept="image/png, image/gif, image/jpeg"
          onChange={handleFileChange}
          multiple
        />
      </div>
      <small>Định dạng file .jpg, .png</small>
    </div>
  );
};

export default UploadImage;
