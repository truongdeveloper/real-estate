import { useRouter } from "next/router";
import FancyBanner from "../../Common/FancyBanner";
import ListingArea from "./ListingArea";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { GET_LISTING_SEARCH } from "../../Common/api/apiEndPoints";
import axiosService from "../../Common/api/AxiosServices";
import { list_data } from "../dashboard/post-list/PropertyTableBody";
import ListData from "../../data/list-real-estates/ListData";

const ListingRealEstate = () => {
  const router = useRouter();
  const LIMIT_PAGE = 20;
  const [data, setData] = useState<any>();
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    const {
      page,
      keyword,
      category,
      province,
      district,
      commune,
      priceTo,
      priceFrom,
      areaTo,
      areaFrom,
    } = router.query;
    axiosService({
      url: GET_LISTING_SEARCH.url,
      method: "get",
      params: {
        trang: page ? Number(page) - 1 : 0,
        kichThuoc: LIMIT_PAGE,
        loaiBDS: category ? category : "",
        tinhTp: province ? province : "",
        quanHuyen: district ? district : "",
        xaPhuong: commune ? commune : "",
        giaThueTo: priceTo ? priceTo : "",
        giaThueFrom: priceFrom ? priceFrom : "",
        dienTichTo: areaTo ? areaTo : "",
        dienTichFrom: areaFrom ? areaFrom : "",
      },
      body: {
        tieuDe: keyword ? keyword : "",
      },
    })?.then((res) => {
      if (res) {
        res = ListData;
        setTotalPage(res.tongSoTrang);
        setData(res.danhSach.filter((item: any) => item.trangThai == 2));
      }
    });
  }, [router.query]);

  // Hàm xử lý thay đổi tìm kiếm
  const handleSearchChange = () => {
    toast("Lọc");
  };

  // Hàm xử lý thay đổi giá tiền
  const handlePriceChange = () => {
    toast("Lọc");
  };

  // Hàm xử lý thiết lập lại bộ lọc
  const handleResetFilter = () => {
    toast("Lọc");
  };

  // Hàm xử lý thay đổi tiện ích đã chọn
  const handleAmenityChange = () => {
    toast("Lọc");
  };

  // Hàm xử lý thay đổi vị trí
  const handleLocationChange = () => {
    toast("Lọc");
  };

  // Hàm xử lý thay đổi trạng thái
  const handleStatusChange = () => {
    toast("Lọc");
  };

  return (
    <>
      <ListingArea style={false} totalPage={totalPage} ListingData={data} />
      <FancyBanner />
    </>
  );
};

export default ListingRealEstate;
