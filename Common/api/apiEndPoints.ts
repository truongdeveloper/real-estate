import { GET, POST } from "../../Constants";
import { BASE_URL } from "./config";

// ========= GET LIST ======== //
export const GET_LISTING = {
  key: "/real-estate-listing",
  url:
    BASE_URL +
    `/baidang-management/search?tenLoaiBDS=&tinhTp=&quanHuyen=&xaPhong=&giaThueFrom=&giaThueTo=&dienTichFrom=&dienTichTo=`,
  method: GET,
};

export const POST_ADD_NEW_POST = {
  key: "/dashboard/add-new-post",
  url: BASE_URL + `/quan-ly-bai-dang/baidang`,
  method: "post",
};

export const LOGIN = {
  url: BASE_URL + `/quan-ly-tai-khoan/dang-nhap`,
  method: "post",
};

export const REGISTER = {
  url: BASE_URL + "/quan-ly-tai-khoan/dang-ky",
  method: "post",
};
