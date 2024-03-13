"use client";
import React, { ReactElement } from "react";
import Head from "next/head";
import DashboardSiteBar from "./Header/DashboardSiteBar";
import DashboardHeader from "./Header/DashboardHeader";

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
        <link rel="icon" href="/admin.webp" />
      </Head>
      <DashboardSiteBar />
      <main>{children}</main>

      <footer></footer>
    </>
  );
}

export default LayoutDashboard;
