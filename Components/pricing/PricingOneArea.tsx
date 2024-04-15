"use client";
import { uniqueId } from "lodash";
import Link from "next/link";
import { useState } from "react";
import axiosService from "../../Common/api/AxiosServices";
import { GET_URL_PAYMENT } from "../../Common/api/apiEndPoints";

const pricing_data = [
  {
    id: 1,
    class_name: "active",
    plan: "FREE PLAN",
    price: "50.000đ",
    value: "50000",
    desc: "Great for Individual Person",
    icon_details: [
      { icon: "fa-sharp fa-regular fa-xmark" },
      { icon: "fa-sharp fa-regular fa-xmark" },
      { icon: "fa-sharp fa-regular fa-xmark" },
      { icon_class: "available", icon: "fa-sharp fa-regular fa-check" },
      { icon_class: "available", icon: "fa-sharp fa-regular fa-check" },
      { icon_class: "available", icon: "fa-sharp fa-regular fa-check" },
    ],
    btn: "active",
  },
  {
    id: 2,
    plan: "Gold Plan",
    price: "100.000đ",
    value: "100000",
    desc: "Great for Startup",
    icon_details: [
      { icon: "fa-sharp fa-regular fa-xmark" },
      { icon: "fa-sharp fa-regular fa-xmark" },
      { icon_class: "available", icon: "fa-sharp fa-regular fa-check" },
      { icon_class: "available", icon: "fa-sharp fa-regular fa-check" },
      { icon_class: "available", icon: "fa-sharp fa-regular fa-check" },
      { icon_class: "available", icon: "fa-sharp fa-regular fa-check" },
    ],
    btn: "Get Started",
  },
  {
    id: 3,
    plan: "Business Plan",
    price: "200.000đ",
    sale: "180.000đ",
    value: "180000",
    desc: "Great for Large Business",
    icon_details: [
      { icon_class: "available", icon: "fa-sharp fa-regular fa-check" },
      { icon_class: "available", icon: "fa-sharp fa-regular fa-check" },
      { icon_class: "available", icon: "fa-sharp fa-regular fa-check" },
      { icon_class: "available", icon: "fa-sharp fa-regular fa-check" },
      { icon_class: "available", icon: "fa-sharp fa-regular fa-check" },
      { icon_class: "available", icon: "fa-sharp fa-regular fa-check" },
    ],
    btn: "Get Started",
  },
];

const list: string[] = [
  "All Operating Supported",
  "Multiple User",
  "Refund",
  "12 months duration",
  "Live Chat",
  "Send invite via Link",
];

const PricingArea = () => {
  const selectHandler = (e: any) => {};
  const [activeTab, setActiveTab] = useState(0);

  const handleSelectItem = (item: any) => {
    axiosService({
      url: GET_URL_PAYMENT.url,
      method: "get",
      params: {
        amounts: item.value,
      },
    });
  };

  return (
    <div className="pricing-section-one mt-150 xl-mt-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 m-auto">
            <div className="title-one text-center mb-40 lg-mb-30 wow fadeInUp">
              <h3>Unbeatable prices, no contracts, simple & easy</h3>
              <p className="fs-24">
                Try Team plan features for 14 days · No credit card required
              </p>
            </div>
          </div>
        </div>

        <div className="pr-table-one">
          {/* <nav className="pricing-nav-one d-flex justify-content-center">
            <div className="nav nav-tabs" role="tablist">
              {tab_title.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => handleTabClick(index)}
                  className={`nav-link ${activeTab === index ? "active" : ""}`}
                  id="buy-tab"
                  type="button"
                >
                  {tab}
                </button>
              ))}
            </div>
          </nav> */}
          <div className="discount-text mt-15 text-center">
            Save 30% on Annual plan
          </div>

          <div className="dot-bg-wrapper mt-60 lg-mt-40 mb-60">
            <div className="tab-content">
              <div id="monthly">
                <div className="main-bg d-flex flex-wrap justify-content-end position-relative">
                  <div className="left-panel d-none d-lg-block">
                    <ul className="style-none">
                      {list.map((list, i) => (
                        <li key={i}>{list}</li>
                      ))}
                    </ul>
                  </div>
                  {pricing_data.map((item: any) => (
                    <div
                      key={item.id}
                      className={`pr-column-wrapper ${item.class_name}`}
                    >
                      <div className="pr-header text-center">
                        <div className="plan text-uppercase">{item.plan}</div>
                        {item?.sale ? (
                          <div>
                            <strong className="price fw-500 mb-0">
                              {item.sale}
                            </strong>
                            <p
                              className="fw-500 m-0 p-0"
                              style={{
                                color: "red",
                                textDecorationLine: "line-through",
                              }}
                            >
                              {item.price}
                            </p>
                          </div>
                        ) : (
                          <strong className="price fw-500">{item.price}</strong>
                        )}

                        <p className="fs-16">{item.desc}</p>
                      </div>
                      <ul className="style-none text-center">
                        {item.icon_details.map((icon: any, i: any) => (
                          <li key={uniqueId()}>
                            <span className="fw-500 color-dark">
                              All Operating Supported
                            </span>
                            <div
                              className={`icon d-flex align-items-center justify-content-center rounded-circle ${icon.icon_class}`}
                            >
                              <i className={icon.icon}></i>
                            </div>
                          </li>
                        ))}
                      </ul>
                      <div className="pr-footer text-center">
                        <button
                          onClick={() => handleSelectItem(item)}
                          className="btn-twelve sm"
                        >
                          {item.btn}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingArea;
