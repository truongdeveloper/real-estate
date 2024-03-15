import { StaticImageData } from "next/image";

import categoryIcon_1 from "@/assets/images/icon/icon_15.svg";
import categoryIcon_2 from "@/assets/images/icon/icon_16.svg";
import categoryIcon_3 from "@/assets/images/icon/icon_17.svg";
import categoryIcon_4 from "@/assets/images/icon/icon_18.svg";
import categoryIcon_5 from "@/assets/images/icon/icon_19.svg";
import categoryIcon_6 from "@/assets/images/icon/icon_20.svg";
import categoryIcon_7 from "@/assets/images/icon/icon_21.svg";
import categoryIcon_8 from "@/assets/images/icon/icon_22.svg";

interface DataType {
  id: string;
  name: string;
  icon?: string;
}
[];

const category_data: DataType[] = [
  { id: "1", name: "Tất cả nhà đất", icon: categoryIcon_1 },
  { id: "2", name: "Căn hộ chung cư", icon: categoryIcon_2 },
  { id: "3", name: "Nhà riêng", icon: categoryIcon_3 },
  { id: "4", name: "Nhà biệt thự, liền kề", icon: categoryIcon_4 },
  { id: "5", name: "Nhà mặt phố", icon: categoryIcon_5 },
  { id: "6", name: "Nhà trọ, phòng trọ", icon: categoryIcon_6 },
  { id: "7", name: "Shophouse, nhà phố thương mại", icon: categoryIcon_7 },
  { id: "8", name: "Văn phòng", icon: categoryIcon_8 },
  { id: "9", name: "Cửa hàng, ki ốt", icon: categoryIcon_6 },
  { id: "10", name: "Kho, nhà xưởng, đất", icon: categoryIcon_7 },
  { id: "11", name: "Bất động sản khác", icon: "" },
];

export default category_data;
