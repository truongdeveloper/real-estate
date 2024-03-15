import { GET } from "../../Constants";
import { BASE_URL } from "./config";

// ========= GET LIST ======== //
export const GET_LISTING = {
  key: "/real-estate-listing",
  url:
    BASE_URL +
    `/baidang-management/search?tenLoaiBDS=&tinhTp=&quanHuyen=&xaPhong=&giaThueFrom=&giaThueTo=&dienTichFrom=&dienTichTo=`,
  method: GET,
};
