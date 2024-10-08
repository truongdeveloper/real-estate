import Image, { StaticImageData } from "next/image";

import bigCarousel_1 from "@/assets/images/listing/img_43.jpg";
import bigCarousel_2 from "@/assets/images/listing/img_44.jpg";
import bigCarousel_3 from "@/assets/images/listing/img_45.jpg";
import bigCarousel_4 from "@/assets/images/listing/img_46.jpg";

import smallCarousel_1 from "@/assets/images/listing/img_43_s.jpg";
import smallCarousel_2 from "@/assets/images/listing/img_44_s.jpg";
import smallCarousel_3 from "@/assets/images/listing/img_45_s.jpg";
import smallCarousel_4 from "@/assets/images/listing/img_46_s.jpg";
import Fancybox from "../../Common/Fancybox";
import SliderImage from "../../Helper/SliderImage";

const largeThumb: string[] = ["1", "2", "3"];

interface DataType {
  big_carousel: StaticImageData[];
  small_carousel: StaticImageData[];
}

const gallery_data: DataType = {
  big_carousel: [bigCarousel_1, bigCarousel_2, bigCarousel_3, bigCarousel_4],
  small_carousel: [
    smallCarousel_1,
    smallCarousel_2,
    smallCarousel_3,
    smallCarousel_4,
  ],
};

const { big_carousel, small_carousel } = gallery_data;

const MediaGallery = ({ data, style }: any) => {
  return (
    <div className="media-gallery mt-100 xl-mt-80 lg-mt-60">
      <div id="media_slider" className="carousel slide row">
        <div className="col-lg-10">
          <div
            className={` bg-white border-20 md-mb-20 ${
              style ? "" : "shadow4 p-30"
            }`}
          >
            <div className="position-relative z-1 overflow-hidden border-20">
              <div className="img-fancy-btn border-10 fw-500 fs-16 color-dark">
                Xem ảnh
                <Fancybox
                  options={{
                    Carousel: {
                      infinite: true,
                    },
                  }}
                >
                  {data.batDongSan.hinhAnhList.map((thumb: any, index: any) => (
                    <a
                      key={index}
                      className="d-block"
                      data-fancybox="img2"
                      href={thumb.url}
                    ></a>
                  ))}
                </Fancybox>
              </div>

              {/* <div className="carousel-inner">
                {data.batDongSan.hinhAnhList.map((item: any, index: number) => (
                  <div key={index} className="carousel-item">
                    <Image
                      width={700}
                      height={600}
                      src={item.url}
                      alt=""
                      className="w-100 border-20"
                    />
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#media_slider"
                data-bs-slide="prev"
              >
                <i className="bi bi-chevron-left"></i>
                <span className="visually-hidden">Trước</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#media_slider"
                data-bs-slide="next"
              >
                <i className="bi bi-chevron-right"></i>
                <span className="visually-hidden">Tiếp</span>
              </button> */}
              <SliderImage
                width={700}
                height={600}
                listImages={data.batDongSan.hinhAnhList}
              />
            </div>
          </div>
        </div>

        <div className="col-lg-2">
          <div
            className={`carousel-indicators position-relative p-15 w-100 h-100 ${
              style ? "" : "border-15 bg-white shadow4"
            }`}
          >
            {data.batDongSan.hinhAnhList
              .slice(0, 3)
              .map((carousel: any, i: any) => (
                <div key={i}>
                  <Image
                    width={200}
                    height={200}
                    src={carousel.url}
                    alt=""
                    style={{
                      maxHeight: "180px",
                      maxWidth: "200px",
                      objectFit: "cover",
                    }}
                    className="w-100 border-10 mt-3 ps-2"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaGallery;
