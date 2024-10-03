import Link from "next/link";
import Image from "next/image";
import transformPriceToString from "../../Constants/conversionNumberToPrice";
import timeAgo from "../../Constants/conversionTime";
import { typeListRealEstate } from "../../Models/common";
import { toast } from "react-toastify";
import conversionRealEstateStatus from "../../Constants/conversionRealEstateStatus";
import {
  getNameOfDistrict,
  getNameOfProvince,
} from "../../Constants/conversionAdress";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { compareDataState } from "../../Recoil/atoms/compare";
import isAuthen from "../../libs/hooks/isAuthen";
import axiosService from "../../Common/api/AxiosServices";
import { POST_FAVOURITE } from "../../Common/api/apiEndPoints";
import Fancybox from "../../Common/Fancybox";
import FavouriteService from "../../services/favouriteService";

interface ShortCardI {
  itemPost: typeListRealEstate;
  mediumCol?: boolean;
  oneCol?: boolean;
}

const ShortCard = (props: ShortCardI) => {
  const { itemPost, mediumCol, oneCol } = props;

  const [isFavorite, setIsFavorite] = useState(false);
  const [isCompare, setIsCompare] = useState(false);
  const [compareData, setCompareData] = useRecoilState(compareDataState);

  const storedArrayJSON = localStorage.getItem("favourites") as string;
  const favouritesList = JSON.parse(storedArrayJSON);

  // useEffect(() => {
  //   if (typeof favouritesList == "object") {
  //     favouritesList.map((item: any) => {
  //       if (item?.id === itemPost?.id) {
  //         setIsFavorite(true);
  //       }
  //     });
  //   }
  // }, [favouritesList, itemPost?.id]);

  function handleAddFavorite(id: number) {
    isAuthen().then((res) => {
      if (res) {
        axiosService({
          url: `${POST_FAVOURITE.url}?maBD=${id}&maTK=${res.user?.id}`,
          method: "post",
        })
          ?.then((res) => {
            if (res) {
              toast("Đã thêm bài đă vào danh sách yêu thích", {
                type: "success",
              });
              setIsFavorite(true);
            } else {
              toast("Đã xóa bài đăng khỏi danh sách yêu thích thành công");
              const newList = favouritesList?.filter(
                (item: any) => item?.id !== id
              );
              localStorage.setItem("favourites", JSON.stringify(newList));
              setIsFavorite(false);
            }
          })
          .finally(() => {
            new FavouriteService()
              .getListFavourite(res.user.id)
              ?.then((res: any) => {
                if (res) {
                  localStorage.setItem("favourites", JSON.stringify(res));
                }
              });
          });
      } else {
        toast("Vui lý đăng nhập để  yêu thích bài viết", {
          type: "warning",
        });
      }
    });
  }

  const handleToCompare = (id: number) => {
    if (compareData.includes(itemPost)) {
      toast("Đã có trong bảng so sánh");
    } else {
      if (compareData.length < 3) {
        setCompareData([...compareData, itemPost as any]);
        setIsCompare(true);
      } else {
        toast("Đã đạt đủ 3 BDS");
      }
    }
  };

  const [districtName, setDistrictName] = useState("");
  useEffect(() => {
    getNameOfDistrict(
      itemPost.batDongSan.viTri.quanHuyen,
      itemPost.batDongSan.viTri.tinhTp
    ).then((data) => {
      if (data) {
        setDistrictName(data);
      }
    });
  }, [itemPost, districtName, setDistrictName]);
  return (
    <div
      key={itemPost.id}
      className={` d-flex mt-40 ${
        mediumCol ? "col-lg-6 col-md-12" : "col-lg-4 col-md-6"
      }  ${oneCol ? "col-lg-12 col-md-12" : ""}`}
    >
      <div className="listing-card-one style-two h-100 w-100 ">
        <div
          className="img-gallery position-relative d-flex align-items-center justify-content-center"
          style={{ height: "300px" }}
        >
          <div className=" overflow-hidden w-100" style={{ height: "100%" }}>
            <div className="tag fw-500">
              {conversionRealEstateStatus(itemPost.batDongSan.trangThai)}
            </div>

            <Image
              src={
                itemPost?.batDongSan?.hinhAnhList[0]?.url ||
                "/assets/images/listing/img_01.jpg"
              }
              // src={
              //   "https://res.cloudinary.com/dfkh87pvy/image/upload/v1712177798/dev/gmnqn2bzdl1pprw2rd23.png"
              // }
              className="w-100"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/assets/images/listing/img_01.jpg";
              }}
              width={500}
              height={500}
              alt="Ảnh BĐS"
              style={{ height: "100%", objectFit: "cover" }}
            />
            <div className="img-slider-btn">
              Xem ảnh <i className="fa-regular fa-image"></i>
              <Fancybox
                options={{
                  Carousel: {
                    infinite: true,
                  },
                }}
              >
                {itemPost.batDongSan.hinhAnhList.map(
                  (thumb: any, index: any) => (
                    <a
                      key={index}
                      className="d-block"
                      data-fancybox="gallery2"
                      href={thumb.url}
                    ></a>
                  )
                )}
              </Fancybox>
            </div>
          </div>
        </div>
        <div className="property-info p-25">
          <Link
            href={`/real-estate-detail?id=${itemPost.id}`}
            className="title tran3s title-card-slice"
          >
            {itemPost.tieuDe}
          </Link>
          <div className="address text-body">
            <i className="fa-solid fa-location-dot pe-2 text-muted"></i>{" "}
            {itemPost.batDongSan.diaChi}, {districtName},{" "}
            {getNameOfProvince(itemPost.batDongSan.viTri.tinhTp)}
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
            <div className={"d-flex gap-4"}>
              <button className="" onClick={() => handleToCompare(itemPost.id)}>
                {isCompare ? (
                  <i className="fa-solid fa-code-compare fs-4 text-success"></i>
                ) : (
                  <i className="fa-solid fa-code-compare fs-4"></i>
                )}
              </button>
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
            </div>
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
