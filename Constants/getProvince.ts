import { Provinces } from "../data/home-data/Location";

export function getProvinceList() {
  return Provinces.map((province) => {
    return {
      value: province.code,
      text: province.name,
    };
  });
}
