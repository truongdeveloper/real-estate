import { GET, POST } from "../../Constants";
import { BASE_URL } from "./config";

// ======== Tài khoản ==========
export const LOGIN = {
  url: BASE_URL + `/quan-ly-tai-khoan/v1/dang-nhap`,
  method: "post",
};

export const REGISTER = {
  url: BASE_URL + "/quan-ly-tai-khoan/v1/dang-ky",
  method: "post",
};

// ========== Real-estate ==========
export const GET_LISTING = {
  key: "/real-estate-listing",
  url: BASE_URL + `quan-ly-bai-dang/v1/tim-kiem`,
  method: GET,
};

export const POST_ADD_NEW_POST = {
  key: "/dashboard/add-new-post",
  url: BASE_URL + `/quan-ly-bai-dang/bai-dang`,
  method: "post",
};

export const REQUEST_LIST = {
  key: "/dashboard/request-list",
  url: BASE_URL + `/quan-ly-yeu-cau/danh-sach-yeu-cau`,
  method: "get",
};

export const GET_POST_FOR_USER = {
  key: "/dashboard/post-list",
  url: BASE_URL + `/quan-ly-bai-dang/danh-sach-bai-dang`,
  method: "get",
};

export const GET_REQUEST_FOR_USER = {
  key: "/dashboard/request-list",
  url: BASE_URL + `/quan-ly-yeu-cau/danh-sach-yeu-cau`,
  method: "get",
};

export const GET_SIMPLE_POST = {
  url: BASE_URL + `/quan-ly-bai-dang/v1/bai-dang`,
  method: "get",
};

export const GET_LIST_PROPERTY = {
  key: "/dashboard/properties-list",
  url: BASE_URL + `/quan-ly-bat-dong-san/danh-sach-bat-dong-san`,
  method: "get",
};

export const GET_DETAIL_PROPERTY = {
  key: "/dashboard/properties-detail",
  url: BASE_URL + `/quan-ly-bat-dong-san/v1/bat-dong-san`,
  method: "get",
};

export const CHANGE_PASSWORD = {
  key: "/dashboard/account-settings/password-change",
  url: BASE_URL + `/quan-ly-tai-khoan/doi-mat-khau`,
  method: "post",
};
