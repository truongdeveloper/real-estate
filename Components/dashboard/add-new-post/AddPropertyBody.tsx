"use client";

import ListingDetails from "./ListingDetails";
import Link from "next/link";
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

interface TienNghi {
  dieuHoa: boolean;
  mayGiat: boolean;
  hoBoi: boolean;
  wifi: boolean;
  baiDoXe: boolean;
  thangMay: boolean;
  vuon: boolean;
  gara: boolean;
}

interface PostBDS {
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
  tenLoaiBDS: string;
  tinhTp: string;
  quanHuyen: string;
  xaPhuong: string;
  urls: string[];
  tienNghi: TienNghi;
}

const AddPropertyBody = () => {
  const schema = yup.object().shape({
    maTaiKhoan: yup.number().required(),
    tieuDe: yup.string().required(),
    noiDung: yup.string().required(),
    sdt: yup.string().required(),
    tenBDS: yup.string().required(),
    dienTich: yup.number().required(),
    giaThue: yup.number().required(),
    diaChi: yup.string().required(),
    phongNgu: yup.number().required(),
    phongTam: yup.number().required(),
    phongBep: yup.number().required(),
    soTang: yup.number().required(),
    namXayDung: yup.number().required(),
    moTa: yup.string().required(),
    kinhDo: yup.number().required(),
    viDo: yup.number().required(),
    tenLoaiBDS: yup.string().required(),
    tinhTp: yup.string().required(),
    quanHuyen: yup.string().required(),
    xaPhuong: yup.string().required(),
    urls: yup.array().of(yup.string()).required(),
    tienNghi: yup
      .object()
      .shape({
        dieuHoa: yup.boolean().required(),
        mayGiat: yup.boolean().required(),
        hoBoi: yup.boolean().required(),
        wifi: yup.boolean().required(),
        baiDoXe: yup.boolean().required(),
        thangMay: yup.boolean().required(),
        vuon: yup.boolean().required(),
        gara: yup.boolean().required(),
      })
      .required(),
  });
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm<any>({
    // resolver: yupResolver(schema),
    defaultValues: {
      maTaiKhoan: 1,
    },
  });

  const onSubmit: SubmitHandler<PostBDS> = async () => {
    try {
      // Lấy danh sách các URL từ form
      console.log(watch());
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
    } catch (error) {
      toast("Lỗi không tải được ảnh");
    }
    // console.log(watch());
    try {
      // Gửi dữ liệu POST lên máy chủ
      const response = await axiosService({
        url: POST_ADD_NEW_POST.url, // Đổi thành URL của endpoint bạn muốn gửi yêu cầu POST đến
        method: "post",
        body: watch(), // Sử dụng dữ liệu từ form
      });

      // Xử lý response sau khi gửi yêu cầu POST thành công
      console.log("Response from server:", response);
    } catch (error) {
      console.error("Lỗi khi gửi yêu cầu POST:", error);
      toast.error("Đã xảy ra lỗi khi gửi yêu cầu POST");
    }
  };

  const ClearData = () => {
    reset({});
    window.location.reload();
  };

  return (
    <div className="dashboard-body">
      <div className="position-relative">
        <DashboardHeader title="Thêm bài đăng" />
        <h2 className="main-title d-block d-lg-none">Thêm bài đăng</h2>

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
    </div>
  );
};

export default AddPropertyBody;
