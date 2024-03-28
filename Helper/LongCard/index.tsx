import Link from "next/link";
import Image from "next/image";
import transformPriceToString from "../../Constants/conversionNumberToPrice";
import timeAgo from "../../Constants/conversionTime";
import { typeListRealEstate } from "../../Models/common";
import { useState } from "react";
import { toast } from "react-toastify";
import Fancybox from "../../Common/Fancybox";
import conversionRealEstateStatus from "../../Constants/conversionRealEstateStatus";

interface LongCardI {
  itemPost: typeListRealEstate;
}

const LongCard = (props: LongCardI) => {
  const { itemPost } = props;

  const [isFavorite, setIsFavorite] = useState(false);

  function handleAddFavorite(id: number) {
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      toast("Đã thêm vào yêu thích", {
        type: "success",
      });
    }
  }
  return (
    <div
      key={itemPost.id}
      className={`listing-card-seven  border-20 p-20 mb-50 wow fadeInUp 
      grey-bg card
    `}
    >
      <div className="d-flex flex-wrap layout-one">
        <div
          className={`img-gallery position-relative z-1 border-20 overflow-hidden`}
        >
          <div className={"tag bg-white rounded-0 text-dark fw-500"}>
            {conversionRealEstateStatus(itemPost.batDongSan.trangThai)}
          </div>
          <div className="img-slider-btn">
            03 <i className="fa-regular fa-image"></i>
            <Fancybox
              options={{
                Carousel: {
                  infinite: true,
                },
              }}
            >
              {itemPost.batDongSan.hinhAnhList.map((thumb: any, index: any) => (
                <a
                  key={index}
                  className="d-block"
                  data-fancybox="gallery2"
                  href={thumb.url}
                ></a>
              ))}
            </Fancybox>
          </div>
        </div>
        <div className="property-info">
          <Link
            href={`/real-estate-detail?id=${itemPost.id}`}
            className="title tran3s mb-15"
          >
            {itemPost.tieuDe}
          </Link>
          <div className="address">
            <i className="fa-solid fa-location-dot pe-2 text-muted"></i>{" "}
            {itemPost.batDongSan.diaChi}, {itemPost.batDongSan.viTri.quanHuyen},{" "}
            {itemPost.batDongSan.viTri.tinhTp}
          </div>
          <div className="feature mt-10 mb-20 pt-10 pb-0">
            <ul className="style-none d-flex flex-wrap align-items-center justify-content-between">
              <li>
                <strong>
                  <span className="fs-4 text-danger fw-500">
                    {itemPost.batDongSan.dienTich} m<sup>2</sup>
                  </span>
                </strong>
                Diện tích
              </li>
              {itemPost.batDongSan.phongNgu && (
                <li>
                  <strong>
                    <span className="fs-10">
                      {itemPost.batDongSan.phongNgu}
                    </span>
                  </strong>{" "}
                  Phòng ngủ
                </li>
              )}
              {itemPost.batDongSan.soTang && (
                <li>
                  <strong>
                    <span className="fs-10">{itemPost.batDongSan.soTang}</span>
                  </strong>{" "}
                  Số tầng
                </li>
              )}
              {itemPost.batDongSan.phongBep && (
                <li>
                  <strong>
                    <span className="fs-10">
                      {itemPost.batDongSan.phongBep}
                    </span>
                  </strong>{" "}
                  Phòng bếp
                </li>
              )}
              {itemPost.batDongSan.namXayDung && (
                <li>
                  <strong>
                    <span className="fs-10">
                      {itemPost.batDongSan.namXayDung}
                    </span>
                  </strong>{" "}
                  Năm xây dựng
                </li>
              )}
            </ul>
          </div>
          <div className="real-estate-decription">{itemPost.noiDung}</div>

          <div className="pl-footer d-flex flex-wrap align-items-center justify-content-between">
            <strong className="price fw-500 text-danger fs-4 me-auto">
              {transformPriceToString(itemPost.batDongSan.giaThue)} /tháng
            </strong>

            <ul className="style-none d-flex action-icons me-4">
              <li>
                <button
                  className=""
                  onClick={() => handleAddFavorite(itemPost.id)}
                >
                  {isFavorite ? (
                    <i className="fa-solid fa-heart fs-3 text-danger"></i>
                  ) : (
                    <i className="fa-regular fa-heart fs-3"></i>
                  )}
                </button>
              </li>
            </ul>
            <Link
              href={`/real-estate-detail?id=${itemPost.id}`}
              className="btn-four rounded-circle"
            >
              <i className="bi bi-arrow-up-right"></i>
            </Link>
          </div>
          <hr />
          <Link
            href={`user-profile?id=${1}`}
            className="user-post d-flex align-items-center justify-content-between"
          >
            <div className="d-flex align-items-center">
              <div className="avatar" style={{ height: "40px", width: "40px" }}>
                <Image
                  src={"/assets/images/listing/img_large_04.jpg"}
                  height={50}
                  width={50}
                  style={{
                    borderRadius: "100rem",
                    contain: "cover",
                    height: "100%",
                  }}
                  alt="Avatar"
                ></Image>
              </div>
              <p className="user-name m-0 ps-2 text-muted">Văn Minh Trường</p>
            </div>
            <div className="time-release">{timeAgo(itemPost.ngayDangBai)}</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LongCard;
