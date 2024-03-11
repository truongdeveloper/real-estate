"use client";
import React, { ReactElement } from "react";
import Head from "next/head";

type Props = {
  title?: "Bất động sản";
  children?: React.ReactNode;
};
function LayoutDashboard(props: Props) {
  const { title, children } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Trang web Thuê và cho thuê bất động sản của Văn Minh Trường và Đoàn Phương Thảo"
        />
        <link rel="icon" href="/admin.webp" />
      </Head>

      <main>{children}</main>

      <footer></footer>
    </>
  );
}

export default LayoutDashboard;
