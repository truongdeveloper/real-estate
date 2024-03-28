"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import dashboardLogo from "@/assets/images/logo/logo_01.svg";
import dashboardIconActive_1 from "@/assets/images/dashboard/icon/icon_1_active.svg";
import dashboardIcon_1 from "@/assets/images/dashboard/icon/icon_1.svg";
import dashboardIconActive_2 from "@/assets/images/dashboard/icon/icon_2_active.svg";
import dashboardIcon_2 from "@/assets/images/dashboard/icon/icon_2.svg";
import dashboardIconActive_3 from "@/assets/images/dashboard/icon/icon_3_active.svg";
import dashboardIcon_3 from "@/assets/images/dashboard/icon/icon_3.svg";
import dashboardIconActive_4 from "@/assets/images/dashboard/icon/icon_4_active.svg";
import dashboardIcon_4 from "@/assets/images/dashboard/icon/icon_4.svg";
import dashboardIconActive_5 from "@/assets/images/dashboard/icon/icon_5_active.svg";
import dashboardIcon_5 from "@/assets/images/dashboard/icon/icon_5.svg";
import dashboardIconActive_6 from "@/assets/images/dashboard/icon/icon_6_active.svg";
import dashboardIcon_6 from "@/assets/images/dashboard/icon/icon_6.svg";
import dashboardIconActive_7 from "@/assets/images/dashboard/icon/icon_7_active.svg";
import dashboardIcon_7 from "@/assets/images/dashboard/icon/icon_7.svg";
import dashboardIconActive_8 from "@/assets/images/dashboard/icon/icon_8_active.svg";
import dashboardIcon_8 from "@/assets/images/dashboard/icon/icon_8.svg";
import dashboardIconActive_10 from "@/assets/images/dashboard/icon/icon_10_active.svg";
import dashboardIcon_10 from "@/assets/images/dashboard/icon/icon_10.svg";
import dashboardIcon_11 from "@/assets/images/dashboard/icon/icon_41.svg";

import { toast } from "react-toastify";

const DashboardSiteBar = ({ isActive, setIsActive }: any) => {
  const pathname = usePathname();
  function handleLogout() {
    toast("Đăng xuất");
  }

  return (
    <aside className={`dash-aside-navbar ${isActive ? "show" : ""}`}>
      <div className="position-relative">
        <div className="logo d-md-block d-flex align-items-center justify-content-between plr bottom-line pb-30">
          <Link href="/">
            <Image src={dashboardLogo} alt="" />
          </Link>
          <button
            onClick={() => setIsActive(false)}
            className="close-btn d-block d-md-none"
          >
            <i className="fa-light fa-circle-xmark"></i>
          </button>
        </div>
        <nav className="dasboard-main-nav pt-30 pb-30 bottom-line">
          <ul className="style-none">
            <li className="plr">
              <Link
                href="/dashboard"
                className={`d-flex w-100 align-items-center ${
                  pathname === "/dashboard" ? "active" : ""
                }`}
              >
                <Image
                  src={
                    pathname === "/dashboard"
                      ? dashboardIconActive_1
                      : dashboardIcon_1
                  }
                  alt=""
                />
                <span>Dashboard</span>
              </Link>
            </li>
            <li className="plr">
              <Link
                href="/dashboard/request-list"
                className={`d-flex w-100 align-items-center ${
                  pathname === "/dashboard/request-list" ? "active" : ""
                }`}
              >
                <Image
                  src={
                    pathname === "/dashboard/request-list"
                      ? dashboardIconActive_2
                      : dashboardIcon_2
                  }
                  alt=""
                />
                <span>Yêu cầu thuê</span>
              </Link>
            </li>

            <li className="bottom-line pt-30 lg-pt-20 mb-40 lg-mb-30"></li>
            <li>
              <div className="nav-title">Quản lý danh sách</div>
            </li>
            <li className="plr">
              <Link
                href="/dashboard/properties-list"
                className={`d-flex w-100 align-items-center ${
                  pathname === "/dashboard/properties-list" ? "active" : ""
                }`}
              >
                <Image
                  src={
                    pathname === "/dashboard/properties-list"
                      ? dashboardIconActive_6
                      : dashboardIcon_6
                  }
                  alt=""
                />
                <span>Bất động sản</span>
              </Link>
            </li>
            <li className="plr">
              <Link
                href="/dashboard/post-list"
                className={`d-flex w-100 align-items-center ${
                  pathname === "/dashboard/post-list" ? "active" : ""
                }`}
              >
                <Image
                  src={
                    pathname === "/dashboard/post-list"
                      ? dashboardIconActive_10
                      : dashboardIcon_10
                  }
                  alt=""
                />
                <span>Bài đăng</span>
              </Link>
            </li>
            <li className="plr">
              <Link
                href="/dashboard/add-new-post"
                className={`d-flex w-100 align-items-center ${
                  pathname === "/dashboard/add-new-post" ? "active" : ""
                }`}
              >
                <Image
                  src={
                    pathname === "/dashboard/add-new-post"
                      ? dashboardIconActive_7
                      : dashboardIcon_7
                  }
                  alt=""
                />
                <span>Thêm bài đăng</span>
              </Link>
            </li>
            <li className="plr">
              <Link
                href="/dashboard/favourites"
                className={`d-flex w-100 align-items-center ${
                  pathname === "/dashboard/favourites" ? "active" : ""
                }`}
              >
                <Image
                  src={
                    pathname === "/dashboard/favourites"
                      ? dashboardIconActive_8
                      : dashboardIcon_8
                  }
                  alt=""
                />
                <span>Yêu thích</span>
              </Link>
            </li>
            <li className="plr">
              <Link
                href="/dashboard/payment-list"
                className={`d-flex w-100 align-items-center ${
                  pathname === "/dashboard/payment-list" ? "active" : ""
                }`}
              >
                <Image
                  src={
                    pathname === "/dashboard/payment-list"
                      ? dashboardIconActive_5
                      : dashboardIcon_5
                  }
                  alt=""
                />
                <span>Thanh toán</span>
              </Link>
            </li>
            <li className="bottom-line pt-30 lg-pt-20 mb-40 lg-mb-30"></li>
            <li>
              <div className="nav-title">Quản lý Tài khoản</div>
            </li>
            <li className="plr">
              <Link
                href="/dashboard/profile"
                className={`d-flex w-100 align-items-center ${
                  pathname === "/dashboard/profile" ? "active" : ""
                }`}
              >
                <Image
                  src={
                    pathname === "/dashboard/profile"
                      ? dashboardIconActive_3
                      : dashboardIcon_3
                  }
                  alt=""
                />
                <span>Tài khoản</span>
              </Link>
            </li>
            <li className="plr">
              <Link
                href="/dashboard/account-settings"
                className={`d-flex w-100 align-items-center ${
                  pathname === "/dashboard/account-settings" ? "active" : ""
                }`}
              >
                <Image
                  src={
                    pathname === "/dashboard/account-settings"
                      ? dashboardIconActive_4
                      : dashboardIcon_4
                  }
                  alt=""
                />
                <span>Cài đặt tài khoản</span>
              </Link>
            </li>
            <li className="plr">
              <Link
                href="/dashboard/recharge"
                className={`d-flex w-100 align-items-center ${
                  pathname === "/dashboard/recharge" ? "active" : ""
                }`}
              >
                <Image
                  src={
                    pathname === "/dashboard/recharge"
                      ? dashboardIconActive_5
                      : dashboardIcon_5
                  }
                  alt=""
                />
                <span>Mua gói</span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="plr">
          <button
            onClick={handleLogout}
            className="d-flex w-100 align-items-center logout-btn"
          >
            <div className="icon tran3s d-flex align-items-center justify-content-center rounded-circle">
              <Image src={dashboardIcon_11} alt="" />
            </div>
            <span>Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSiteBar;
