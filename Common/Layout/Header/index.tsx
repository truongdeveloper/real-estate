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

const HeaderDefault = ({ style }: any) => {
  const { sticky } = UseSticky();

  const [isLogin, setIsLogin] = useState(false);

  const { data, status } = useSession();
  useEffect(() => {
    console.log(data, status);
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
              <div className="right-widget ms-auto ms-lg-0 me-3 me-lg-0 order-lg-3">
                <ul className="d-flex align-items-center style-none">
                  {isLogin ? (
                    <li className="user-data position-relative">
                      <button
                        className="user-avatar online position-relative rounded-circle"
                        type="button"
                        id="profile-dropdown"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="false"
                      >
                        <Image
                          src={"/assets/images/dashboard/avatar_01.jpg"}
                          alt=""
                          width={40}
                          height={40}
                          className="lazy-img"
                        />
                      </button>
                      <Profile />
                    </li>
                  ) : (
                    <li>
                      <Link
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#loginModal"
                        className="btn-one"
                      >
                        <i className="fa-regular fa-lock"></i>{" "}
                        <span>Đăng nhập</span>
                      </Link>
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
      <LoginModal />
    </>
  );
};

export default HeaderDefault;
