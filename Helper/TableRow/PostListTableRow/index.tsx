import Image from "next/image";
import Link from "next/link";
import listImg_1 from "@/assets/images/dashboard/img_01.jpg";

import icon_1 from "@/assets/images/dashboard/icon/icon_18.svg";
import icon_3 from "@/assets/images/dashboard/icon/icon_20.svg";
import icon_4 from "@/assets/images/dashboard/icon/icon_21.svg";
import React, { useEffect, useState } from "react";
import DeleteModal from "../../../Common/modals/DeleteModal";
import { toast } from "react-toastify";
import { typeListRealEstate } from "../../../Models/common";
import transformPriceToString from "../../../Constants/conversionNumberToPrice";
import conversionDate, { compareDate } from "../../../Constants/conversionDate";
import { conversionStatusPost } from "../../../Constants/conversionStatus";
import {
  getNameOfDistrict,
  getNameOfProvince,
} from "../../../Constants/conversionAdress";
import ConfirmModal from "../../../Common/modals/ConfirmModal";
import { UncontrolledCollapse } from "reactstrap";
import { PUT_EXTEND_POST } from "../../../Common/api/apiEndPoints";
import { method } from "lodash";
import { useSession } from "next-auth/react";
import axiosService from "../../../Common/api/AxiosServices";

type IPostListTableRow = {
  item: typeListRealEstate;
  setReload: any;
};

const PostListTableRow = ({ item, setReload }: IPostListTableRow) => {
  const { data } = useSession();
  const [modalDeleteOpen, setModalDeleteOpen] = useState(false);
  const [modalHide, setModalHide] = useState(false);
  const [modalExtend, setModalExtend] = useState(false);
  const [districtName, setDistrictName] = useState("");

  function handleHidePost() {
    toast(`Ẩn thành công ${item.tieuDe}`);
  }

  function handleExtendPost() {
    axiosService({
      url: PUT_EXTEND_POST.url,
      method: PUT_EXTEND_POST.method,
      body: {
        maBD: item.id,
        maTK: data?.user.id,
      },
    })?.then((res) => {
      if (res) {
        toast("Gia han bài đăng thành công", {
          type: "success",
        });
        setReload(true);
      }
    });
  }

  useEffect(() => {
    getNameOfDistrict(
      item.batDongSan.viTri.quanHuyen,
      item.batDongSan.viTri.tinhTp
    ).then((data) => {
      if (data) {
        setDistrictName(data);
      }
    });
  }, [item]);

  function handleDeletePost() {
    toast(`Xóa thành công ${item.tieuDe}`);
  }

  return (
    <React.Fragment>
      <tr key={item.id}>
        <td style={{ overflow: "hidden", width: "400px" }}>
          <div className="d-lg-flex align-items-center position-relative">
            {item.batDongSan?.hinhAnhList[0].url ? (
              <Image
                src={item.batDongSan.hinhAnhList[0].url}
                alt=""
                width={200}
                height={200}
                className="p-img"
                onError={(e: any) => {
                  e.target.onerror = null;
                  e.target.src = listImg_1;
                }}
              />
            ) : (
              <Image
                src={listImg_1}
                alt="Landscape picture"
                width={300}
                height={300}
                className="p-img"
              />
            )}

            <div className="ps-lg-4 md-pt-10">
              <Link
                href={`/real-estate-detail?id=${item.id}`}
                className="property-name tran3s color-dark fw-500 fs-20 stretched-link title-card-slice"
              >
                {item.tieuDe}
              </Link>
              <div className="address">
                {districtName},{" "}
                {getNameOfProvince(item.batDongSan.viTri.tinhTp)}
              </div>
              <strong className="price color-dark">
                {transformPriceToString(item.batDongSan.giaThue)}
              </strong>
            </div>
          </div>
        </td>
        <td>
          {compareDate(item.ngayHetHan) ? (
            <button
              className="btn btn-two"
              onClick={() => setModalExtend(true)}
            >
              Gia hạn
            </button>
          ) : (
            <div>
              <strong style={{ color: "black", fontSize: "17px" }}>
                {conversionDate(item.ngayDangBai).day}/
                {conversionDate(item.ngayDangBai).month}
              </strong>
              <p>{conversionDate(item.ngayDangBai).year}</p>
            </div>
          )}
        </td>
        <td>
          <strong style={{ color: "black", fontSize: "17px" }}>
            {conversionDate(item.ngayHetHan).day}/
            {conversionDate(item.ngayHetHan).month}
          </strong>
          <p>{conversionDate(item.ngayHetHan).year}</p>
        </td>
        <td>
          <div
            className={`property-status ${
              item.trangThai == 2 ? "" : "processing"
            }`}
          >
            {conversionStatusPost(item.trangThai)}
          </div>
        </td>
        <td>
          <div className="action-dots float-end d-flex gap-3 align-items-center">
            {item.trangThai == 2 && (
              <button
                className="action-btn btn"
                type="button"
                onClick={() => setModalHide(true)}
              >
                <i className="fa-regular fa-eye-slash"></i>
              </button>
            )}
            <button
              className="action-btn btn"
              type="button"
              id={`toggler-${item.id}`}
            >
              <i className="fa-regular fa-square-plus"></i>
            </button>
            <button
              className="action-btn dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span></span>
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <Link
                  className="dropdown-item"
                  href={`/real-estate-detail?id=${item.id}`}
                >
                  <Image src={icon_1} alt="" className="lazy-img" /> Xem
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  href={`/dashboard/add-new-post?id=${item.id}&edit=true`}
                >
                  <Image src={icon_3} alt="" className="lazy-img" /> Sửa
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    setModalDeleteOpen(true);
                  }}
                  className="dropdown-item text-danger"
                >
                  <Image src={icon_4} alt="" className="lazy-img" /> Xóa
                </button>
              </li>
            </ul>
          </div>
        </td>
      </tr>
      <tr>
        <td colSpan={5} style={{ padding: 0, border: "none" }}>
          <UncontrolledCollapse toggler={`#toggler-${item.id}`}>
            <div style={{}} className="p-4">
              <div className="color-dark fs-20 fw-500">{item.tieuDe}</div>
              <div className="fs-14 p-4">
                {item.noiDung && (
                  <p
                    className="fs-20 lh-lg text-black"
                    dangerouslySetInnerHTML={{
                      __html: item.noiDung.replace(/\n/g, "<br>"),
                    }}
                  ></p>
                )}
              </div>
            </div>
          </UncontrolledCollapse>
        </td>
      </tr>

      <DeleteModal
        setIsOpen={setModalDeleteOpen}
        isOpen={modalDeleteOpen}
        handleAcceptEvent={handleDeletePost}
        args={{ centered: true }}
      />
      <ConfirmModal
        setIsOpen={setModalHide}
        isOpen={modalHide}
        title="Bạn chắc chắn muốn ẩn bài viết này?"
        content="Bài viết của bạn sẽ bị ẩn khỏi trang web của chúng tôi."
        handleAcceptEvent={handleHidePost}
        args={{ centered: true }}
      />
      <ConfirmModal
        setIsOpen={setModalExtend}
        isOpen={modalExtend}
        title="Bạn muốn gai hạn bài viết này?"
        content="Bài viết của bạn sẽ được gia hạn và trừ vào số dư."
        handleAcceptEvent={handleExtendPost}
        icon={<i className="fa-regular fa-money-bill-1 text-success"></i>}
        args={{ centered: true }}
      />
    </React.Fragment>
  );
};

export default PostListTableRow;
