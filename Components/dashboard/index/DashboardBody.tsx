"use client";
import Image, { StaticImageData } from "next/image";
import icon_1 from "@/assets/images/dashboard/icon/icon_12.svg";
import icon_2 from "@/assets/images/dashboard/icon/icon_13.svg";
import icon_3 from "@/assets/images/dashboard/icon/icon_14.svg";
import icon_4 from "@/assets/images/dashboard/icon/icon_15.svg";
import DashboardChart from "./DashboardChart";
import DashboardHeader from "../../../Common/LayoutDashboard/Header/DashboardHeader";
import SelectCustom from "../../../Helper/ui/SelectCustom";
import { useEffect, useState } from "react";
import FavouriteService from "../../../services/favouriteService";
import { useSession } from "next-auth/react";
import PaymentServices from "../../../services/paymentService";
import RealEstateService from "../../../services/realEstateService";

interface DataType {
  id: number;
  icon: StaticImageData;
  title: string;
  value: string;
  class_name?: string;
}

const DashboardBody = () => {
  const selectHandler = (e: any) => {};
  const { data } = useSession();

  const [numberLove, setNumberLove] = useState(0);
  const [numberPayment, setNumberPayment] = useState(0);
  const [numberRealEstate, setNumberRealEstate] = useState(0);
  useEffect(() => {
    new FavouriteService().getListFavourite(data?.user.id)?.then((res: any) => {
      if (res) {
        setNumberLove(res.length);
      }
    });
    new PaymentServices()
      .getListPaymentById(data?.user.id)
      ?.then((res: any) => {
        if (res) {
          setNumberPayment(res.length);
        }
      });
    new RealEstateService()
      .getListRealEstate(data?.user.id)
      ?.then((res: any) => {
        if (res) {
          setNumberRealEstate(res.length);
        }
      });
  }, []);

  const dashboard_card_data: DataType[] = [
    {
      id: 1,
      icon: icon_1,
      title: "Tất cả bất động sản",
      value: numberRealEstate.toString(),
      class_name: "skew-none",
    },
    {
      id: 2,
      icon: icon_2,
      title: "Chờ duyệt",
      value: "01",
    },
    {
      id: 3,
      icon: icon_3,
      title: "Tổng số giao dịch",
      value: numberPayment.toString(),
    },
    {
      id: 4,
      icon: icon_4,
      title: "Bài đăng yêu thích",
      value: numberLove.toString(),
    },
  ];

  return (
    <div className="dashboard-body">
      <div className="position-relative">
        <DashboardHeader title="Thống kê" />

        <h2 className="main-title d-block d-lg-none">Thống kê</h2>
        <div className="bg-white border-20">
          <div className="row">
            {dashboard_card_data.map((item) => (
              <div key={item.id} className="col-lg-3 col-6">
                <div
                  className={`dash-card-one bg-white border-30 position-relative mb-15 ${item.class_name}`}
                >
                  <div className="d-sm-flex align-items-center justify-content-between">
                    <div className="icon rounded-circle d-flex align-items-center justify-content-center order-sm-1">
                      <Image src={item.icon} alt="" className="lazy-img" />
                    </div>
                    <div className="order-sm-0">
                      <div className="title fw-500">{item.title}</div>
                      <div className="value fw-500">{item.value}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="row gx-xxl-5 d-flex pt-15 lg-pt-10">
          <div className="col-xl-7 col-lg-6 d-flex flex-column">
            <div className="user-activity-chart bg-white border-20 mt-30 h-100">
              <div className="d-flex align-items-center justify-content-between plr">
                <h5 className="dash-title-two">Property View</h5>
                <div className="short-filter d-flex align-items-center">
                  <div className="fs-16 me-2">Short by:</div>
                  <SelectCustom
                    className="nice-select fw-normal"
                    options={[
                      { value: "1", text: "Weekly" },
                      { value: "2", text: "Daily" },
                      { value: "3", text: "Monthly" },
                    ]}
                    defaultCurrent={0}
                    onChange={selectHandler}
                    name=""
                    placeholder=""
                  />
                </div>
              </div>
              <div className="plr mt-50">
                <div className="chart-wrapper">
                  <DashboardChart />
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default DashboardBody;
