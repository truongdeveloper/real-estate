import Link from "next/link";
import Image from "next/image";
import transformPriceToString from "../../Constants/conversionNumberToPrice";
import timeAgo from "../../Constants/conversionTime";
import { typeListRealEstate } from "../../Models/common";
import { useState } from "react";
import { toast } from "react-toastify";
import conversionRealEstateStatus from "../../Constants/conversionRealEstateStatus";

interface ShortCardI {
  itemPost: typeListRealEstate;
  mediumCol?: boolean;
}

const ShortCard = (props: ShortCardI) => {
  const { itemPost, mediumCol } = props;

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
      className={` d-flex mt-40 ${
        mediumCol ? "col-lg-6 col-md-12" : "col-lg-4 col-md-6"
      }`}
    >
      <div className="listing-card-one style-two h-100 w-100 ">
        <div className="img-gallery">
          <div className="position-relative overflow-hidden">
            <div className="tag fw-500">
              {conversionRealEstateStatus(itemPost.batDongSan.trangThai)}
            </div>

            <Image
              src={itemPost.batDongSan.hinhAnhList[0].url}
              // src={
              //   "https://res.cloudinary.com/dfkh87pvy/image/upload/v1712177798/dev/gmnqn2bzdl1pprw2rd23.png"
              // }
              className="w-100"
              width={500}
              height={500}
              alt="Ảnh BĐS"
            />
          </div>
        </div>
        <div className="property-info p-25">
          <Link
            href={`/real-estate-detail?id=${itemPost.id}`}
            className="title tran3s"
          >
            {itemPost.tieuDe}
          </Link>
          <div className="address text-body">
            <i className="fa-solid fa-location-dot pe-2 text-muted"></i>{" "}
            {itemPost.batDongSan.diaChi}, {itemPost.batDongSan.viTri.quanHuyen},{" "}
            {itemPost.batDongSan.viTri.tinhTp}
          </div>
          <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between pb-5">
            <li className="d-flex align-items-center">
              <Image
                src={"/assets/images/icon/icon_04.svg"}
                alt=""
                width={30}
                height={35}
                className="lazy-img icon me-2"
              />
              <span className="fs-10 text-danger fw-500">
                {itemPost.batDongSan.dienTich} m<sup>2</sup>
              </span>
            </li>
            <li className="d-flex align-items-center">
              <Image
                src={"/assets/images/icon/icon_05.svg"}
                alt=""
                width={30}
                height={35}
                className="lazy-img icon me-2"
              />
              <span className="fs-10">{itemPost.batDongSan.soTang}</span>
            </li>
            <li className="d-flex align-items-center">
              <Image
                src={"/assets/images/icon/icon_06.svg"}
                alt=""
                width={30}
                height={35}
                className="lazy-img icon me-2"
              />
              <span className="fs-10">{itemPost.batDongSan.phongNgu}</span>
            </li>
          </ul>
          <div className="pl-footer top-border d-flex align-items-center justify-content-between">
            <strong className="price fw-500 text-danger fs-5">
              {transformPriceToString(itemPost.batDongSan.giaThue)} /tháng
            </strong>
            <button className="" onClick={() => handleAddFavorite(itemPost.id)}>
              {isFavorite ? (
                <i className="fa-solid fa-heart fs-3 text-danger"></i>
              ) : (
                <i className="fa-regular fa-heart fs-3"></i>
              )}
            </button>
          </div>
          <p className="text-black-50 pl-footer top-border p-0 m-0 d-flex justify-content-end">
            {timeAgo(itemPost.ngayDangBai)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShortCard;
