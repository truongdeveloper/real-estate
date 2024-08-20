"use client";
import Image from "next/image";
import icon from "@/assets/images/icon/icon_46.svg";

import DashboardHeader from "../../../Common/LayoutDashboard/Header/DashboardHeader";
import { toast } from "react-toastify";
import { uniqueId } from "lodash";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PaymentListTableRow from "../../../Helper/TableRow/PaymentListTableRow";
import PaymentServices from "../../../services/paymentService";
import { useSession } from "next-auth/react";

const PaymentListBody = () => {
  const router = useRouter();
  const selectHandler = (e: any) => {};
  const [dataList, setDataList] = useState([]);
  const { data } = useSession();

  // const [page, setPage] = useState(0);

  useEffect(() => {
    new PaymentServices()
      .getListPaymentById(data?.user.id)
      ?.then((res: any) => {
        if (res) {
          setDataList(res);
        }
      });
  }, []);

  function handlePageClick(page: any) {
    toast(`page Change ${page.selected}`);
    const { pathname } = router;
    const nextPage = `${pathname}?page=${page.selected + 1}`;
    router.push(nextPage);
  }

  return (
    <div className="dashboard-body">
      <div className="position-relative">
        <DashboardHeader title="Thanh toán" />
        <h2 className="main-title d-block d-lg-none">Thanh toán</h2>
        <div className="d-sm-flex align-items-center justify-content-between mb-25">
          <div className="fs-16">
            Hiện <span className="color-dark fw-500"></span>
            <span className="color-dark fw-500">{dataList.length}</span> kết quả
          </div>
          <div className="d-flex ms-auto xs-mt-30"></div>
        </div>

        <div className="bg-white card-box p0 border-20">
          <div className="table-responsive pt-25 pb-25 pe-4 ps-4">
            <table className="table property-list-table">
              <thead>
                <tr>
                  <th scope="col">Mã thanh toán</th>
                  <th scope="col">Loại thanh toán</th>
                  <th scope="col">Ngày thanh toán</th>
                  <th scope="col">Trạng thái</th>
                  <th scope="col">Số tiền</th>
                  <th scope="col">Hành động</th>
                </tr>
              </thead>
              <tbody className="border-0">
                {dataList &&
                  dataList
                    .toReversed()
                    .map((item) => (
                      <PaymentListTableRow key={uniqueId()} item={item} />
                    ))}
              </tbody>
            </table>
            {/* <ReactPaginate
              breakLabel="..."
              nextLabel={<Image src={icon} alt="" className="ms-2" />}
              onPageChange={handlePageClick}
              pageCount={10}
              previousLabel={<Image src={icon} alt="" className="ms-2" />}
              renderOnZeroPageCount={null}
              className="pagination-one square d-flex align-items-center justify-content-center style-none pt-30"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentListBody;
