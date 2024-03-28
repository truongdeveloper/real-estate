"use client";

import Link from "next/link";

const Breadcrumb = ({ title, link, link_title, sub_title, style }: any) => {
  const selectHandler = (e: any) => {};

  return (
    <div
      className={`inner-banner-two inner-banner position-relative ${"pt-160 lg-pt-130 pb-160 xl-pb-120 md-pb-80"}`}
      style={{ backgroundImage: `url(/assets/images/media/img_49.jpg)` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h3
              className={`${
                style ? "xl-mb-30 md-mb-20" : "xl-mb-20 pt-15"
              } mb-35`}
            >
              {title}
            </h3>
            <ul className="theme-breadcrumb style-none d-inline-flex align-items-center justify-content-center position-relative z-1 bottom-line">
              <li>
                <Link href="/">Trang chủ</Link>
              </li>
              <li>/</li>
              <li>
                <Link href={link}>{link_title}</Link>
              </li>
              <li>/</li>
              <li>{sub_title}</li>
            </ul>
          </div>
          <div className="col-lg-6">
            <p className="sub-heading">
              Over 745,000 listings, apartments, lots and plots available now!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
