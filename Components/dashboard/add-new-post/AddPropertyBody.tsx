"use client";

import ListingDetails from "./ListingDetails";
import DashboardHeader from "../../../Common/LayoutDashboard/Header/DashboardHeader";
import AddressAndLocation from "./AddressAndLocation";
import OverviewPost from "./OverviewPost";
import OverviewRealEstate from "./OverviewRealEstate";
import SelectAmenities from "./SelectAmenities";
import { SubmitHandler, useForm } from "react-hook-form";
import UploadImage from "./UploadImage";
import { uploadImageToCloudinary } from "../../../services/UpLoadImage";
import { toast } from "react-toastify";
import axiosService from "../../../Common/api/AxiosServices";
import { POST_ADD_NEW_POST } from "../../../Common/api/apiEndPoints";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import UpLoadProgress from "../../../Helper/LoadingUpload";
import { useState } from "react";
import { useSession } from "next-auth/react";

export interface PostBDS {
  maTaiKhoan: number;
  tieuDe: string;
  noiDung: string;
  sdt: string;
  tenBDS: string;
  dienTich: number;
  giaThue: number;
  diaChi: string;
  phongNgu: number;
  phongTam: number;
  phongBep: number;
  soTang: number;
  namXayDung: number;
  moTa: string;
  kinhDo: number;
  viDo: number;
  loaiBDS: string;
  tinhTp: string;
  quanHuyen: string;
  xaPhuong: string;
  urls: string[];
  tienNghi: {
    dieuHoa: boolean;
    mayGiat: boolean;
    hoBoi: boolean;
    wifi: boolean;
    baiDoXe: boolean;
    thangMay: boolean;
    vuon: boolean;
    gara: boolean;
  };
}

const AddPropertyBody = () => {
  const schema = yup.object().shape({
    maTaiKhoan: yup.number(),
    tieuDe: yup.string(),
    noiDung: yup.string(),
    sdt: yup.string(),
    tenBDS: yup.string(),
    dienTich: yup.number(),
    giaThue: yup.number(),
    diaChi: yup.string(),
    phongNgu: yup.number(),
    phongTam: yup.number(),
    phongBep: yup.number(),
    soTang: yup.number(),
    namXayDung: yup.number(),
    moTa: yup.string(),
    kinhDo: yup.number(),
    viDo: yup.number(),
    oaiBDS: yup.string(),
    tinhTp: yup.string(),
    quanHuyen: yup.string(),
    xaPhuong: yup.string(),
    urls: yup.array(),
    tienNghi: yup.object().shape({
      dieuHoa: yup.boolean(),
      mayGiat: yup.boolean(),
      hoBoi: yup.boolean(),
      wifi: yup.boolean(),
      baiDoXe: yup.boolean(),
      thangMay: yup.boolean(),
      vuon: yup.boolean(),
      gara: yup.boolean(),
    }),
  });

  const { data } = useSession();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm<PostBDS>({
    resolver: yupResolver<any>(schema),
    mode: "onSubmit",
    defaultValues: {
      maTaiKhoan: data?.user.id,
    },
  });
  const onSubmit: SubmitHandler<PostBDS> = async () => {
    try {
      const uploadImageUrls = watch("urls");
      const imageFiles = await Promise.all(
        uploadImageUrls.map(async (imageUrl: string) => {
          const response = await fetch(imageUrl);
          const blob = await response.blob();
          return new File([blob], "image.jpg", { type: blob.type });
        })
      );

      // Gửi các tập tin ảnh lên máy chủ và nhận lại đường dẫn đã lưu
      const uploadedImagePaths = await Promise.all(
        imageFiles.map(uploadImageToCloudinary)
      ).then((res) => {
        return res;
      });
      setValue("urls", uploadedImagePaths);

      //Chuyển dữ liệu tienIch sang dang number 0 hoặc 1
      const tienIch = watch("tienNghi");
      const newTienIch = {
        dieuHoa: tienIch.dieuHoa ? 1 : 0,
        mayGiat: tienIch.mayGiat ? 1 : 0,
        hoBoi: tienIch.hoBoi ? 1 : 0,
        wifi: tienIch.wifi ? 1 : 0,
        baiDoXe: tienIch.baiDoXe ? 1 : 0,
        thangMay: tienIch.thangMay ? 1 : 0,
        vuon: tienIch.vuon ? 1 : 0,
        gara: tienIch.gara ? 1 : 0,
      };
      setValue("tienNghi", newTienIch as any);
    } catch (error) {
      toast("Lỗi không tải được ảnh");
    }
    try {
      // Gửi dữ liệu POST lên máy chủ
      const response = await axiosService({
        url: POST_ADD_NEW_POST.url,
        method: "post",
        body: watch(),
        token: data?.user.token,
      });

      if (response.id) {
        toast.success("Đăng tin thành công");
        ClearData();
      } else {
        toast(response, {
          type: "warning",
        });
      }
    } catch (error) {
      console.error("Lỗi khi gửi yêu cầu POST:", error);
      toast.error("Đã xảy ra lỗi khi gửi yêu cầu POST");
    }
  };

  const ClearData = () => {
    reset({});
  };

  return (
    <div className="dashboard-body">
      <div className="position-relative">
        <DashboardHeader title="Thêm bài đăng" />
        <h2 className="main-title d-block d-lg-none">Thêm bài đăng</h2>
        <div className="dropdown-item d-flex align-items-center text-success fw-600 mb-20 ps-4">
          Số dư: {Number(data?.user?.taiKhoan.soDu).toLocaleString("vi-VN")}đ
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <OverviewPost register={register} />
          <OverviewRealEstate register={register} setValue={setValue} />
          <ListingDetails register={register} />
          <SelectAmenities register={register} />
          <UploadImage register={register} setValue={setValue} />
          <AddressAndLocation register={register} setValue={setValue} />
          <div className="button-group d-inline-flex align-items-center mt-30">
            <button type="submit" className="dash-btn-two tran3s me-3">
              Đăng bài bất động sản
            </button>
            <button onClick={ClearData} className="dash-cancel-btn tran3s">
              Hủy
            </button>
          </div>
        </form>
      </div>
      {/* {loading ? <UpLoadProgress /> : ""} */}
    </div>
  );
};

export default AddPropertyBody;
