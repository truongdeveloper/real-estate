import Link from "next/link";
import isAuthen from "../../../libs/hooks/isAuthen";
import axiosService from "../../../Common/api/AxiosServices";
import { GET_URL_PAYMENT } from "../../../Common/api/apiEndPoints";

interface DataType {
  id: number;
  title: string;
  price: string;
  desc: string;
  list_details: {
    list: string;
    disable?: string;
  }[];
  class_name: string;
  btn: string;
}

const pricing_data = [
  {
    id: 1,
    class_name: "",
    plan: "Lần đầu",
    price: "50.000đ",
    value: "50000",
    desc: "Phù hợp với lần đầu",

    btn: "Mua",
  },
  {
    id: 2,
    plan: "Cá nhân",
    price: "100.000đ",
    value: "100000",
    desc: "Phù hợp với cá nhân",

    btn: "Mua",
  },
  {
    id: 3,
    plan: "Môi giới",
    price: "200.000đ",
    sale: "180.000đ",
    value: "180000",
    desc: "Phù hợp với người có nhiều BĐS",

    btn: "Mua",
  },
];

const Pricing = () => {
  const handleSelectItem = (item: any) => {
    axiosService({
      url: GET_URL_PAYMENT.url,
      method: GET_URL_PAYMENT.method,
      params: {
        soTien: item.value,
      },
    })?.then((res: any) => {
      if (res) {
        window.location.href = res.url;
      }
    });
  };
  return (
    <div className="pricing-section-two">
      <div className="row gx-xxl-4">
        {pricing_data.map((item) => (
          <div key={item.id} className="col-xl-4 col-lg-6">
            <div
              className={`pr-column-wrapper bg-white rounded-5 ${item.class_name} mt-30`}
            >
              <div className="pr-header text-center mb-55">
                <strong className="price fw-500" style={{ fontSize: "38px" }}>
                  {item.price}
                </strong>
                <p className="fs-17">{item.desc}</p>
              </div>
              <div className="pr-footer text-center border-0">
                <button
                  onClick={() => handleSelectItem(item)}
                  className="btn-twelve sm w-100"
                >
                  {item.btn}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
