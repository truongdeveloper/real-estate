"use client";

import { useRouter } from "next/router";
import FancyBanner from "../../../Common/FancyBanner";
import Breadcrumb from "../../../Helper/Breadcrumb";
import { useEffect } from "react";
import axiosService from "../../../Common/api/AxiosServices";
import { POST_SAVE_PAYMENT } from "../../../Common/api/apiEndPoints";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { debounce } from "lodash";

const PricingResultBody = () => {
  //Lấy ra các ttrường trên Params
  const router = useRouter();
  const { data } = useSession();
  const {
    vnp_BankCode,
    vnp_PayDate,
    vnp_OrderInfo,
    vnp_TransactionStatus,
    vnp_TxnRef,
    vnp_Amount,
  } = router.query;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(
    debounce(() => {
      axiosService({
        url: POST_SAVE_PAYMENT.url,
        method: POST_SAVE_PAYMENT.method,
        body: {
          maTK: data?.user.id,
          maGoi: "1",
          vnp_Amount,
          vnp_BankCode,
          vnp_PayDate,
          vnp_OrderInfo,
          trangThai: vnp_TransactionStatus,
          vnp_TxnRef,
        },
      })?.then((res: any) => {
        if (res) {
          toast(res);
        }
      });
    }, 500),
    []
  );

  return (
    <>
      <div className="pt-200">
        <div className="container d-flex align-items-center justify-content-center">
          {vnp_TransactionStatus === "00" ? (
            <div className="d-flex flex-column align-items-center justify-content-center">
              <i
                className="fa-regular fa-circle-check text-success mb-20"
                style={{ fontSize: "120px" }}
              ></i>
              <div>Thanh toán thành công</div>
              <h4 className="text-center mt-40 mb-50">
                Cảm ơn bạn đã sử dụng dịch vụ
              </h4>
            </div>
          ) : (
            <div className="d-flex flex-column align-items-center justify-content-center">
              <i
                className="fa-solid fa-triangle-exclamation text-warning mb-20"
                style={{ fontSize: "120px" }}
              ></i>

              <div>Thanh toán thất bại</div>
              <h4 className="text-center mt-40 mb-50">
                Bạn có thể thực hiện mua gói lại!
              </h4>
            </div>
          )}
        </div>
        <FancyBanner />
      </div>
    </>
  );
};

export default PricingResultBody;
