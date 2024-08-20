/* eslint-disable @next/next/no-page-custom-font */
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <HeaderDefault />

      <main>{children}</main>

      <FooterDefault />
    </Loading>
  );
}

export default LayoutDefault;
