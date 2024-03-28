"use client";
import Image from "next/image";
import icon from "@/assets/images/icon/icon_46.svg";

import DashboardHeader from "../../../Common/LayoutDashboard/Header/DashboardHeader";
import SelectCustom from "../../../Helper/ui/SelectCustom";
import ReactPaginate from "react-paginate";
import { toast } from "react-toastify";
import PostListTableRow from "../../../Helper/TableRow/PostListTableRow";
import { uniqueId } from "lodash";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { list_data } from "../post-list/PropertyTableBody";
import PaymentListTableRow from "../../../Helper/TableRow/PaymentListTableRow";

const PaymentListBody = () => {
  const router = useRouter();
  const selectHandler = (e: any) => {};
  // const [page, setPage] = useState(0);

  useEffect(() => {
    const { page } = router.query;
    if (page) {
      const pageNumber = parseInt(page as string, 10);
      if (!isNaN(pageNumber) && pageNumber >= 1) {
        console.log(pageNumber);
      }
    }
  }, [router.query]);

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
            Showing <span className="color-dark fw-500">1–5</span> of{" "}
            <span className="color-dark fw-500">40</span> results
          </div>
          <div className="d-flex ms-auto xs-mt-30">
            <div className="short-filter d-flex align-items-center ms-sm-auto">
              <div className="fs-16 me-2">Short by:</div>
              <SelectCustom
                className="nice-select"
                options={[
                  { value: "1", text: "Newest" },
                  { value: "2", text: "Best Seller" },
                  { value: "3", text: "Best Match" },
                  { value: "4", text: "Price Low" },
                  { value: "5", text: "Price High" },
                ]}
                defaultCurrent={0}
                onChange={selectHandler}
                name=""
                placeholder=""
              />
            </div>
          </div>
        </div>

        <div className="bg-white card-box p0 border-20">
          <div className="table-responsive pt-25 pb-25 pe-4 ps-4">
            <table className="table property-list-table">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Date</th>
                  <th scope="col">View</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody className="border-0">
                {list_data.map((item) => (
                  <PaymentListTableRow key={uniqueId()} item={item} />
                ))}
              </tbody>
            </table>
            <ReactPaginate
              breakLabel="..."
              nextLabel={<Image src={icon} alt="" className="ms-2" />}
              onPageChange={handlePageClick}
              pageCount={10}
              previousLabel={<Image src={icon} alt="" className="ms-2" />}
              renderOnZeroPageCount={null}
              className="pagination-one square d-flex align-items-center justify-content-center style-none pt-30"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentListBody;
