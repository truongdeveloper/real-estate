"use client";
// import menu_data from "@/data/home-data/MenuData";
import Link from "next/link.js";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

import logo from "@/assets/images/logo/logo_01.svg";

const NavMenu = () => {
  // const pathname = usePathname();
  // const currentRoute = usePathname();
  // const [navTitle, setNavTitle] = useState("");

  // const isMenuItemActive = (menuLink: string) => {
  //   return currentRoute === menuLink;
  // };

  // const isSubMenuItemActive = (subMenuLink: string) => {
  //   return currentRoute === subMenuLink;
  // };

  //openMobileMenu
  // const openMobileMenu = (menu: any) => {
  //   if (navTitle === menu) {
  //     setNavTitle("");
  //   } else {
  //     setNavTitle(menu);
  //   }
  // };

  return (
    <ul className="navbar-nav align-items-lg-center">
      <li className="d-block d-lg-none">
        <div className="logo">
          <Link href="/" className="d-block">
            <Image src={logo} alt="" />
          </Link>
        </div>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/dashboard">
          Dashboard
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/">
          Trang chủ
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/recharge">
          Bảng giá
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/">
          Về chúng tôi
        </Link>
      </li>
    </ul>
  );
};

export default NavMenu;
