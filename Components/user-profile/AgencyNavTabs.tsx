"use client";
import { useEffect, useRef, useState } from "react";
import React from "react";
import axiosService from "../../Common/api/AxiosServices";
import { GET_POST_FOR_USER } from "../../Common/api/apiEndPoints";
import { toast } from "react-toastify";
import ShortCard from "../../Helper/ShortCard";
import { Account } from "../../Models/common";

const AgencyNavTabs = ({ data }: { data: Account }) => {
  const isotope = useRef<{ arrange?: Function; destroy?: Function } | null>(
    null
  );
  const [filterKey, setFilterKey] = useState("*");
  const [isotopeData, setListData] = useState<any[]>([]);

  useEffect(() => {
    axiosService({
      url: GET_POST_FOR_USER.url,
      method: "get",
      params: {
        maTK: data?.id,
        trang: 0,
        kichThuoc: 30,
        trangThai: 2,
      },
    })
      ?.then((res) => {
        if (res) {
          setListData(res.danhSach);
        }
        setTimeout(() => {
          if (typeof window !== "undefined") {
            const Isotope = require("isotope-layout");
            isotope.current = new Isotope(".isotop-gallery-wrapper", {
              itemSelector: ".isotop-item",
              layoutMode: "fitRows",
            });
          }
        }, 500);
      })
      .catch((error) => {
        toast(error?.message);
      });

    return () => {
      if (typeof window !== "undefined") {
        isotope.current?.destroy?.();
      }
    };
  }, [data?.id]);

  useEffect(() => {
    if (filterKey === "*") isotope.current?.arrange?.({ filter: "*" });
    else isotope.current?.arrange?.({ filter: `.status-${filterKey}` });
  }, [filterKey]);

  const [selectedFilter, setSelectedFilter] = useState<any>("*");

  const handleFilterKeyChange = (key: any) => () => {
    setFilterKey(key);
    setSelectedFilter(key);
  };

  return (
    <div className="agent-property-listing bottom-line-dark pb-20 mb-80 xl-mb-50">
      <div className="d-sm-flex justify-content-between align-items-center mb-40 xs-mb-20">
        <h4 className="mb-10">Danh sách BĐS</h4>
        <div className="filter-nav-one xs-mt-40">
          <ul className="style-none d-flex justify-content-center flex-wrap isotop-menu-wrapper">
            <li
              className={selectedFilter === "*" ? "is-checked" : ""}
              onClick={handleFilterKeyChange("*")}
            >
              Tất cả
            </li>
            <li
              className={selectedFilter == 1 ? "is-checked" : ""}
              onClick={handleFilterKeyChange(1)}
            >
              Đã cho thuê
            </li>
            <li
              className={selectedFilter == 0 ? "is-checked" : ""}
              onClick={handleFilterKeyChange(0)}
            >
              Chưa cho thuê
            </li>
          </ul>
        </div>
      </div>

      <div
        id="isotop-gallery-wrapper"
        className="isotop-gallery-wrapper grid-2column"
      >
        {isotopeData &&
          isotopeData.map((item) => (
            <div
              key={item.id}
              className={`isotop-item status-${item.batDongSan.trangThai}`}
            >
              <ShortCard itemPost={item} oneCol />
            </div>
          ))}
      </div>
    </div>
  );
};

export default AgencyNavTabs;
