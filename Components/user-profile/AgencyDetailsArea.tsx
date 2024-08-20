"use client";
import Image from "next/image";
import Link from "next/link";

import agencyDetailsLogo from "@/assets/images/logo/p_logo_22.png";
import AgencyNavTabs from "./AgencyNavTabs";
import AgencyDetailsSidebar from "./AgencyDetailsSidebar";
import { Account, User } from "../../Models/common";
import { conversionGender } from "../../Constants/conversionGender";
import conversionDate from "../../Constants/conversionDate";

const AgencyDetailsArea = ({
  dataAccount,
  dataUser,
}: {
  dataAccount: Account;
  dataUser: User;
}) => {
  const selectHandler = (e: any) => {};

  return (
    <div className="agency-details theme-details-one mt-130 xl-mt-100 pb-150 xl-pb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className={`info-pack-one mb-80 xl-mb-50 `}>
              <div className="row">
                <div className="col-xl-6 d-flex">
                  <Image
                    width={400}
                    height={500}
                    style={{ objectFit: "cover", borderRadius: "15px" }}
                    src={
                      dataUser.anhDaiDien
                        ? dataUser.anhDaiDien
                        : agencyDetailsLogo
                    }
                    alt="Ảnh đại diện"
                  ></Image>
                </div>

                <div className="col-xl-6">
                  <div className="ps-xxl-3 pe-xxl-3 pt-40 lg-pt-30 pb-45 lg-pb-10">
                    <h4>{dataUser.hoTen}</h4>
                    <div>{dataAccount.tenTK}</div>
                    <div className="table-responsive">
                      <table className="table">
                        <tbody>
                          <tr>
                            <th>Địa chỉ</th>
                            <td>{dataUser.diaChi} </td>
                          </tr>
                          <tr>
                            <th>Email</th>
                            <td>{dataUser.email} </td>
                          </tr>
                          <tr>
                            <th>Số điện thoại</th>
                            <td>{dataUser.sdt} </td>
                          </tr>
                          <tr>
                            <th>Giới tính</th>
                            <td>{conversionGender(dataUser.gioiTinh)} </td>
                          </tr>
                          <tr>
                            <th>Ngày sinh</th>
                            <td>
                              {conversionDate(dataUser.ngaySinh).formattedDate}{" "}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="agency-overview bottom-line-dark pb-40 mb-80 xl-mb-50">
              <h4 className="mb-20">Giới thiệu</h4>
              {dataUser.gioiThieu && (
                <p
                  className="fs-20 lh-lg pb-15"
                  dangerouslySetInnerHTML={{
                    __html: dataUser.gioiThieu.replace(/\n/g, "<br>"),
                  }}
                ></p>
              )}
            </div>
            <AgencyNavTabs data={dataAccount} />
          </div>
          <AgencyDetailsSidebar data={dataUser} />
        </div>
      </div>
    </div>
  );
};

export default AgencyDetailsArea;
