"use client";
import React, { ReactElement } from "react";
import Head from "next/head";
import DashboardSiteBar from "./Header/DashboardSiteBar";

type Props = {
  title?: string;
  children?: React.ReactNode;
};
function LayoutDashboard(props: Props) {
  const { title, children } = props;
  return (
    <>
      <Head>
        <title>Quản trị</title>
        <meta
          name="description"
          content="Trang Quản trị web Thuê và cho thuê bất động sản của Văn Minh Trường và Đoàn Phương Thảo"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        ></link>

        <link rel="icon" href="/admin.webp" />
      </Head>
      <DashboardSiteBar />
      <main>{children}</main>

      <footer></footer>
    </>
  );
}

export default LayoutDashboard;
