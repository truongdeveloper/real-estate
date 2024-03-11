"use client";

import React, { ReactElement } from "react";

import Head from "next/head";
import Loading from "../../Helper/Loading";
import HeaderDefault from "./Header";
import FooterDefault from "./Footer";

interface Props {
  title?: "Bất động sản";
  children?: ReactElement;
}
function LayoutDefault(props: Props) {
  const { title, children } = props;
  return (
    <Loading>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Trang web Thuê và cho thuê bất động sản của Văn Minh Trường và Đoàn Phương Thảo"
        />
        <link rel="icon" href="/real-estate.webp" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,500&display=swap"
        />
      </Head>
      <HeaderDefault />

      <main>{children}</main>

      <FooterDefault />
    </Loading>
  );
}

export default LayoutDefault;
