// atoms.js
import { atom } from "recoil";

export const loginModalState = atom({
  key: "loginModalState",
  default: false, // Modal đăng nhập mặc định là ẩn
});
