import Image from "next/image";
import Link from "next/link";

import footerLogo_1 from "@/assets/images/logo/logo_01.svg";
import footerLogo_2 from "@/assets/images/logo/logo_03.svg";
import footerShape_1 from "@/assets/images/shape/shape_32.svg";
import footerShape_2 from "@/assets/images/shape/shape_33.svg";
import footer_data from "../../../data/home-data/FooterData";

const icon_1: string[] = ["facebook", "twitter", "instagram"];

const FooterDefault = ({ style }: any) => {
  return (
    <div className={`footer-one ${style ? "dark-bg" : ""}`}>
      <div className="position-relative z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4">
              <div
                className={`footer-intro ${
                  style ? "position-relative z-1" : ""
                }`}
              >
                <div className="bg-wrapper">
                  <div className="logo mb-20">
                    <Link href="/">
                      <Image src={style ? footerLogo_2 : footerLogo_1} alt="" />
                    </Link>
                  </div>
                  <p className="mb-60 lg-mb-40 md-mb-20">
                    96 Định Công, Hoàng Mai, Hà Nội <br /> Khoa Công Nghệ Thông
                    Tin
                  </p>
                  <h6>Liên hệ</h6>
                  <Link
                    href="#"
                    className={`email tran3s mb-70 lg-mb-50 ${
                      style
                        ? "font-garamond"
                        : "fs-24 text-decoration-underline"
                    }`}
                  >
                    vanminhtruong678@gmail.com <br />
                    thaodoan542001@gmail.com
                  </Link>
                  <ul className="style-none d-flex align-items-center social-icon">
                    {icon_1.map((icon, i) => (
                      <li key={i}>
                        <Link href="#">
                          <i
                            className={`fa-brands fa${
                              style ? "" : "-square"
                            }-${icon}`}
                          ></i>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                {style && (
                  <Image
                    src={footerShape_1}
                    alt=""
                    className="lazy-img shapes shape_01"
                  />
                )}
              </div>
            </div>

            <div className="col-lg-8">
              <div className={`d-flex flex-wrap`}>
                {footer_data
                  .filter((items) => items.page === "home_1")
                  .map((item) => (
                    <div
                      key={item.id}
                      className={`footer-nav mt-100 lg-mt-80 ${item.widget_class}`}
                    >
                      <h5 className={`footer-title`}>{item.widget_title}</h5>
                      <ul className="footer-nav-link style-none">
                        {item.footer_link.map((li, i) => (
                          <li key={i}>
                            <Link href={li.link}>{li.link_title}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterDefault;
