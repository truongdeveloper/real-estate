import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement } from "react";

export type PropsLayout = {
  children?: ReactElement;
};

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  Layout?: (props: PropsLayout) => ReactElement;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export interface typeListRealEstate {
  id: number;
  maBDS: number;
  maNguoiDung: number;
  tieuDe: string;
  noiDung: string;
  ngayDangBai: string;
  ngayHetHan: string;
  sdt: string;
  trangThai: number;
  batDongSan: BatDongSan;
}

export interface BatDongSan {
  id: number;
  maLoaiBDS: number;
  maNguoiThue?: any;
  maViTri: number;
  tenBDS: string;
  dienTich: number;
  moTa: string;
  giaThue: number;
  trangThai: number;
  diaChi: string;
  phongNgu: number | null;
  phongTam: number | null;
  phongBep: number | null;
  soTang: number | null;
  namXayDung: number | null;
  kinhDo?: number | null;
  viDo?: number | null;
  loaiBDS: LoaiBds;
  viTri: ViTri;
  hinhAnhList: HinhAnhList[];
  tienNghi: tienNghi;
}

export interface LoaiBds {
  id: number;
  tenLoaiBDS: string;
}

export interface ViTri {
  id: number;
  tinhTp: string;
  quanHuyen: string;
  xaPhuong: string;
}

export interface HinhAnhList {
  id: number;
  maBDS: number;
  url: string;
}

export interface tienNghi {
  id: number;
  tuLanh: number;
  mayGiat: number;
  hoBoi: number;
  wifi: number;
  baiDoXe: number;
  thangMay: number;
  vuon: number;
  gara: number;
}
