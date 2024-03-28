"use client";
import Image, { StaticImageData } from "next/image";

import listImg_1 from "@/assets/images/dashboard/img_01.jpg";
import listImg_2 from "@/assets/images/dashboard/img_02.jpg";
import listImg_3 from "@/assets/images/dashboard/img_03.jpg";
import listImg_4 from "@/assets/images/dashboard/img_04.jpg";
import listImg_5 from "@/assets/images/dashboard/img_05.jpg";

interface DataType {
  id: number;
  title: string;
  address: string;
  price: number;
  date: string;
  view: number;
  img: StaticImageData;
  status: string;
  status_bg?: string;
}

export const list_data: DataType[] = [
  {
    id: 1,
    title: "Galaxy Flat",
    address: "Mirpur 10, dhaka, BD",
    price: 32800,
    date: "13 Jan, 2023",
    view: 1210,
    img: listImg_1,
    status: "Active",
  },
  {
    id: 2,
    title: "White House villa",
    address: "Ranchview, California, USA",
    price: 42130,
    date: "09 Jan, 2023",
    view: 0,
    img: listImg_2,
    status: "Pending",
    status_bg: "pending",
  },
  {
    id: 3,
    title: "Luxury villa in Dal lake",
    address: "Muza link road, ca, usa",
    price: 2370,
    date: "17 Oct, 2022",
    view: 0,
    img: listImg_3,
    status: "Processing",
    status_bg: "processing",
  },
  {
    id: 4,
    title: "Wooden World",
    address: "Board Baxar, Califronia, USA",
    price: 63300,
    date: "23 Sep, 2022",
    view: 970,
    img: listImg_4,
    status: "Active",
  },
  {
    id: 5,
    title: "Orkit Villa",
    address: "Green Road, Uttara, BD",
    price: 72000,
    date: "15 Aug, 2022",
    view: 2320,
    img: listImg_5,
    status: "Active",
  },
];
