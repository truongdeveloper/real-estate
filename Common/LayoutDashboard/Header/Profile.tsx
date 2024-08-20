import Link from "next/link";
import Image from "next/image";

import profileIcon_1 from "@/assets/images/dashboard/icon/icon_23.svg";
import profileIcon_2 from "@/assets/images/dashboard/icon/icon_24.svg";
import profileIcon_3 from "@/assets/images/dashboard/icon/icon_25.svg";
import { signOut } from "next-auth/react";

const Profile = ({ data }: any) => {
  function handleLogout() {
    signOut({ callbackUrl: "/" });
  }
  return (
    <>
      <div className="user-name-data">
        <ul className="dropdown-menu" aria-labelledby="profile-dropdown">
          <li>
            <Link
              className="dropdown-item d-flex align-items-center"
              href="/profile"
            >
              <Image src={profileIcon_1} alt="" className="lazy-img" />
              <span className="ms-2 ps-1">Tài khoản</span>
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item d-flex align-items-center"
              href="/account-settings"
            >
              <Image src={profileIcon_2} alt="" className="lazy-img" />
              <span className="ms-2 ps-1">Cài đặt</span>
            </Link>
          </li>
          <li>
            <div className="d-flex align-items-center dropdown-item">
              <i className="fa-solid fa-dollar-sign"></i>
              <div className="dropdown-item d-flex align-items-center text-success fw-600">
                {Number(data?.user?.taiKhoan.soDu).toLocaleString("vi-VN")}đ
              </div>
            </div>
          </li>
          <li>
            <button
              className=" dropdown-item d-flex align-items-center"
              onClick={() => handleLogout()}
            >
              <Image src={profileIcon_3} alt="" className="lazy-img" />
              <span className="ms-2 ps-1">Đăng xuất</span>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Profile;
