// atoms.js
import { atom } from "recoil";
import { typeListRealEstate } from "../../Models/common";

const compareData: typeListRealEstate[] = [];

export const compareDataState = atom({
  key: "compareDataState",
  default: compareData,
});
export const compareModalState = atom({
  key: "compareModalState",
  default: true, // Modal compare mặc định là ẩn
});
