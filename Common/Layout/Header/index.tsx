"use client";
import Link from "next/link";
import Image from "next/image";
import style from "../Header/styles.module.scss";
import logo_1 from "@/assets/images/logo/logo_01.svg";
import UseSticky from "../../../libs/hooks/UseSticky";
import NavMenu from "./Menu/NavMenu";
import LoginModal from "../../modals/LoginModal";
import { useEffect, useState } from "react";
import Profile from "../../LayoutDashboard/Header/Profile";
import { getSession, useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import { loginModalState } from "../../../Recoil/atoms/modal";
import { isEmpty, uniqueId } from "lodash";
import listImg_1 from "@/assets/images/dashboard/img_01.jpg";
import "./styles.module.scss";
import {
  compareDataState,
  compareModalState,
} from "../../../Recoil/atoms/compare";
import { UncontrolledTooltip } from "reactstrap";

const HeaderDefault = ({ style }: any) => {
  const { sticky } = UseSticky();

  const [isLogin, setIsLogin] = useState(false);
  const [showLoginModal, setShowLoginModal] = useRecoilState(loginModalState);
  const [compareData, setCompareData] = useRecoilState(compareDataState);
  const [showCompareModal, setShowCompareModal] =
    useRecoilState(compareModalState);

  const handleDeleteItemCompare = (id: any) => {
    const newData = compareData.filter((item: any) => item.id !== id);
    setCompareData(newData);
  };

  const { data, status } = useSession();
  useEffect(() => {
    if (status === "authenticated") {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [status, data]);

  return (
    <>
      <header
        className={`theme-main-menu menu-overlay menu-style-one sticky-menu ${
          sticky ? "fixed" : ""
        }`}
      >
        {!style && (
          <div className="alert-wrapper text-center">
            <p className="fs-16 m0 text-white">
              Sự kiện{" "}
              <Link href="/listing_01" className="fw-500">
                flash sale
              </Link>{" "}
              đang diễn ra. Các ưu đãi sẽ kết thúc vào —{" "}
              <span>Chủ nhật này</span>
            </p>
          </div>
        )}
        <div className="inner-content gap-one">
          <div className="top-header position-relative">
            <div className="d-flex align-items-center justify-content-between">
              <div className="logo order-lg-0">
                <Link href="/" className="d-flex align-items-center">
                  <Image src={logo_1} alt="" />
                </Link>
              </div>
              <div className="right-widget ms-auto ms-lg-0 me-3 me-lg-0 order-lg-3 dashboard-header">
                <ul className="d-flex align-items-center style-none">
                  {isLogin ? (
                    <li className="dashboard-header d-flex gap-3 align-items-center">
                      <Link href={"/dashboard/favourites"}>
                        <i
                          className="fa-regular fa-heart fs-3 fw-500 mt-2 position-relative"
                          style={{}}
                        >
                          <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                            <span className="visually-hidden">New alerts</span>
                          </span>
                        </i>
                      </Link>
                      <div className="user-data position-relative">
                        <button
                          className="  dropdown-toggle"
                          type="button"
                          id="profile-dropdown"
                          data-bs-toggle="dropdown"
                          data-bs-auto-close="outside"
                          aria-expanded="false"
                        >
                          {data?.user?.tenTK}
                        </button>
                        <Profile data={data} />
                      </div>
                    </li>
                  ) : (
                    <li>
                      <button
                        className="btn-one"
                        onClick={() => setShowLoginModal(!showLoginModal)}
                      >
                        <i className="fa-regular fa-lock"></i>{" "}
                        <span>Đăng nhập</span>
                      </button>
                    </li>
                  )}

                  <li className="d-none d-md-inline-block ms-3">
                    <Link href="/dashboard/add-new-post" className="btn-two">
                      <span>Đăng tin</span>{" "}
                      <i className="fa-thin fa-arrow-up-right"></i>
                    </Link>
                  </li>
                </ul>
              </div>
              <nav className="navbar navbar-expand-lg p0 order-lg-2">
                <button
                  className="navbar-toggler d-block d-lg-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <NavMenu />
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <div
        className="compare-modal position-fixed d-flex align-items-center justify-content-center"
        style={{
          zIndex: 1000,
          left: 0,
          right: 0,
          bottom: "30px",
          visibility:
            showCompareModal && compareData.length ? "visible" : "hidden",
          transition: "all 0.5s ease-in-out",
          opacity: showCompareModal && compareData.length ? 1 : 0,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "3rem",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px 30px 5px",
            background: "white",
            borderRadius: "10px",
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          }}
        >
          {compareData.map((item: any) => (
            <div className="compare-item" key={uniqueId()}>
              <div
                className="position-relative"
                style={{
                  width: "150px",
                  overflow: "hidden",
                  height: "100px",
                  borderRadius: "10px",
                }}
              >
                {item.batDongSan?.hinhAnhList[0].url ? (
                  <Image
                    src={item.batDongSan.hinhAnhList[0].url}
                    alt=""
                    width={150}
                    height={150}
                    className=""
                    style={{
                      borderRadius: "10px",
                    }}
                    onError={(e: any) => {
                      e.target.onerror = null;
                      e.target.src = listImg_1;
                    }}
                  />
                ) : (
                  <Image
                    src={listImg_1}
                    alt="Landscape picture"
                    width={150}
                    height={150}
                  />
                )}
                <button
                  id="UncontrolledTooltipExample"
                  style={{ top: "5px", right: "8px" }}
                  className=" position-absolute cursor-pointer"
                  onClick={() => handleDeleteItemCompare(item.id)}
                >
                  <i className="fa-solid fa-circle-xmark fs-4 text-white"></i>
                </button>
                <UncontrolledTooltip
                  placement="right"
                  target="UncontrolledTooltipExample"
                >
                  Xóa
                </UncontrolledTooltip>
              </div>

              <p
                className="text-center m-0 p-0 one-line"
                style={{ maxWidth: "130px" }}
              >
                {item.tieuDe}
              </p>
            </div>
          ))}
          <Link href="/compare">
            <button className="btn-one">So sánh</button>
          </Link>
        </div>
      </div>
      <LoginModal />
    </>
  );
};

export default HeaderDefault;
