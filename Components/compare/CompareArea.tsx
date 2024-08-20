import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import compareLogo from "@/assets/images/logo/logo_08.svg";

import compareThumb_1 from "@/assets/images/listing/img_66.jpg";
import compareThumb_2 from "@/assets/images/listing/img_67.jpg";
import compareThumb_3 from "@/assets/images/listing/img_68.jpg";
import { typeListRealEstate } from "../../Models/common";
import { getNameOfProvince } from "../../Constants/conversionAdress";
import transformPriceToString from "../../Constants/conversionNumberToPrice";
import conversionRealEstateStatus from "../../Constants/conversionRealEstateStatus";
import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  compareDataState,
  compareModalState,
} from "../../Recoil/atoms/compare";
import { uniqueId } from "lodash";

interface TableData {
  table_head: string;
  table_data: string[];
}
[];

const CompareArea = () => {
  const [compareDataGlobal, setCompareDataGlobal] =
    useRecoilState(compareDataState);
  const [showCompareModal, setShowCompareModal] =
    useRecoilState(compareModalState);

  const compare_data = compareDataGlobal;
  console.log(showCompareModal);
  setShowCompareModal(false);
  useEffect(() => () => setShowCompareModal(true), [setShowCompareModal]);

  const table_row_data: TableData[] = [
    {
      table_head: "Mã Bất Động Sản",
      table_data: compare_data.map((item: any) => item.id),
    },
    {
      table_head: "Loại Bất Động Sản",
      table_data: compare_data.map(
        (item: any) => item.batDongSan?.loaiBDS?.tenLoaiBDS
      ),
    },
    {
      table_head: "Diện Tích",
      table_data: compare_data.map(
        (item: any) => item.batDongSan?.dienTich + " m²"
      ),
    },
    {
      table_head: "Giá",
      table_data: compare_data.map((item: any) =>
        transformPriceToString(item.batDongSan?.giaThue)
      ),
    },
    {
      table_head: "Phòng Ngủ",
      table_data: compare_data.map((item: any) => item.batDongSan?.phongNgu),
    },
    {
      table_head: "Nhà bếp",
      table_data: compare_data.map(
        (item: typeListRealEstate) => item.batDongSan?.phongBep
      ),
    },
    {
      table_head: "Số tầng",
      table_data: compare_data.map(
        (item: typeListRealEstate) => item.batDongSan?.soTang
      ),
    },
    {
      table_head: "Năm xây dựng",
      table_data: compare_data.map(
        (item: typeListRealEstate) => item.batDongSan?.namXayDung
      ),
    },
    {
      table_head: "Phòng Tắm",
      table_data: compare_data.map((item: any) => item.batDongSan?.phongTam),
    },

    {
      table_head: "Tiện ích",
      table_data: compare_data.map((item: any) => {
        const features = [];
        if (item.batDongSan?.tienNghi?.tuLanh) features.push("Điều hòa");
        if (item.batDongSan?.tienNghi?.mayGiat) features.push("Máy giặt");
        if (item.batDongSan?.tienNghi?.hoBoi) features.push("Hồ bơi");
        if (item.batDongSan?.tienNghi?.wifi) features.push("Wifi");
        if (item.batDongSan?.tienNghi.baiDoXe) features.push("Bãi đỗ xe");
        if (item.batDongSan?.tienNghi.thangMay) features.push("Thang máy");
        if (item.batDongSan?.tienNghi.vuon) features.push("Vườn");
        if (item.batDongSan?.tienNghi.gara) features.push("Garage");
        return features.join(", ");
      }),
    },
    {
      table_head: "Địa Điểm",
      table_data: compare_data.map(
        (item: any) =>
          `${item.batDongSan?.diaChi}, ${getNameOfProvince(
            item.batDongSan?.viTri.tinhTp
          )}`
      ),
    },
  ];
  return (
    <div className="compare-section mt-150 xl-mt-100 mb-150 xl-mb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="title-one">
              <h3>So sánh Bất động sản </h3>
            </div>
          </div>
        </div>

        <div className="compare-table mt-60 lg-mt-40">
          <div className="table-responsive table-bg bg-white">
            <table className="table">
              <thead>
                <tr>
                  <td>
                    <Image
                      src={compareLogo}
                      alt=""
                      className="lazy-img mt-50"
                    />
                  </td>
                  {compare_data.map((item: any) => (
                    <td key={uniqueId()}>
                      <div className="listing-card-one style-two shadow-none">
                        <div className="img-gallery">
                          <div className="position-relative overflow-hidden">
                            <div className="tag fw-500">
                              {conversionRealEstateStatus(
                                item.batDongSan?.trangThai
                              )}
                            </div>

                            <Link href="#" className="d-block">
                              <Image
                                src={item.batDongSan?.hinhAnhList[0].url}
                                className="w-100"
                                alt="..."
                                width={200}
                                height={200}
                                style={{
                                  objectFit: "cover",
                                  height: "200px",
                                }}
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="property-info pt-10">
                          <Link
                            href="#"
                            className="title tran3s title-card-slice"
                          >
                            {item.batDongSan?.tenBDS}
                          </Link>
                          {/* <div className="address">{item.desc}</div> */}
                        </div>
                      </div>
                    </td>
                  ))}
                </tr>
              </thead>

              <tbody>
                {table_row_data.map((item, index) => (
                  <tr key={index}>
                    <th>{item.table_head}</th>
                    {item.table_data.map((data, i) => (
                      <td key={i}>
                        {item.table_head === "Tiện ích" ? (
                          <div>
                            {data.split(", ").map((feature, j) => (
                              <div key={j}>{feature}</div>
                            ))}
                          </div>
                        ) : (
                          data
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareArea;
