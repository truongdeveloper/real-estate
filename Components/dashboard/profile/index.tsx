"use client";

import Image from "next/image";
import avatar_1 from "@/assets/images/dashboard/avatar_02.jpg";
import DashboardHeader from "../../../Common/LayoutDashboard/Header/DashboardHeader";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";
import UserSetting from "./UserSetting";
import axiosService from "../../../Common/api/AxiosServices";
import {
  GET_USER_INFO,
  UPDATE_USER_INFO,
} from "../../../Common/api/apiEndPoints";
import { useSession } from "next-auth/react";
import { uploadImageToCloudinary } from "../../../services/UpLoadImage";

export interface User {
  id: number;
  hoTen: string;
  anhDaiDien: string;
  sdt: string;
  email: string;
  cmnd: string;
  vaiTro: string;
  ngaySinh: Date;
  gioiTinh: string;
  diaChi: string;
  gioiThieu: string;
  ghiChu: string;
}

const ProfileBody = () => {
  const schema = yup.object().shape({
    hoTen: yup.string(),
    anhDaiDien: yup.string(),
    sdt: yup.string(),
    email: yup.string(),
    cmnd: yup.string(),
    vaiTro: yup.string(),
    ngaySinh: yup.date(),
    gioiTinh: yup.string(),
    gioiThieu: yup.string(),
    ghiChu: yup.string(),
  });

  const { data } = useSession();
  const [userData, setUserData] = useState<User>({
    id: 0,
    hoTen: "",
    anhDaiDien: "",
    sdt: "",
    email: "",
    cmnd: "",
    diaChi: "",
    vaiTro: "",
    ngaySinh: new Date(),
    gioiTinh: "",
    gioiThieu: "",
    ghiChu: "",
  });

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<User>({
    // resolver: yupResolver<any>(schema),
    defaultValues: {
      hoTen: "",
      anhDaiDien: "",
      sdt: "",
      email: "",
      cmnd: "",
      diaChi: "",
      vaiTro: "",
      ngaySinh: new Date(),
      gioiTinh: "",
      gioiThieu: "",
      ghiChu: "",
    },
  });

  useEffect(() => {
    axiosService({
      url: GET_USER_INFO.url,
      method: "get",
      params: {
        maTK: data?.user?.id,
      },
      token: data?.user?.token,
    })
      ?.then((res) => {
        setUserData(res);
        setValue("hoTen", res.hoTen);
        setValue("anhDaiDien", res.anhDaiDien);
        setValue("sdt", res.sdt);
        setValue("email", res.email);
        setValue("cmnd", res.cmnd);
        setValue("vaiTro", res.vaiTro);
        setValue("ngaySinh", res.ngaySinh);
        setValue("gioiTinh", res.gioiTinh);
        setValue("gioiThieu", res.gioiThieu);
        setValue("ghiChu", res.ghiChu);
        setValue("diaChi", res.diaChi);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [data, setValue]);
  //Hiện ảnh đại diện khi người dùng chọn ảnh đại diện
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const url = URL.createObjectURL(e.target.files[0]);
      setValue("anhDaiDien", url);
    }
  };

  const onSubmit = async (dataForm: any) => {
    try {
      const uploadImageUrls = watch("anhDaiDien");
      const response = await fetch(uploadImageUrls);
      const blob = await response.blob();
      const file = new File([blob], "image.jpg", { type: blob.type });

      // Gửi các tập tin ảnh lên máy chủ và nhận lại đường dẫn đã lưu
      await uploadImageToCloudinary(file).then((res) => {
        setValue("anhDaiDien", res);
      });
    } catch (error) {
      console.log(error);
    }

    try {
      const response = await axiosService({
        url: `${UPDATE_USER_INFO.url}?maTK=${data?.user?.id}`,
        method: "put",
        body: {
          hoTen: dataForm.hoTen,
          anhDaiDien: watch("anhDaiDien"),
          sdt: dataForm.sdt,
          email: dataForm.email,
          cmnd: dataForm.cmnd,
          diaChi: dataForm.diaChi,
          vaiTro: dataForm.vaiTro,
          ngaySinh: dataForm.ngaySinh,
          gioiTinh: dataForm.gioiTinh,
          gioiThieu: dataForm.gioiThieu,
          ghiChu: dataForm.ghiChu,
        },
        token: data?.user?.token,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="dashboard-body" style={{ paddingBottom: "100px" }}>
      <DashboardHeader title="Người dùng" />
      <h2 className="main-title d-block d-lg-none">Người dùng</h2>
      <form className="position-relative" onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-white card-box border-20">
          <div className="user-avatar-setting d-flex align-items-center mb-30">
            <Image
              width={100}
              height={100}
              src={watch("anhDaiDien") || avatar_1}
              alt=""
              className="lazy-img user-img"
            />
            <div className="upload-btn position-relative tran3s ms-4 me-3">
              Tải ảnh đại diện
              <input
                type="file"
                id="uploadImg"
                name="uploadImg"
                onChange={handleImageChange}
                accept="image/png, image/gif, image/jpeg"
                placeholder=""
              />
            </div>
            <button
              className="delete-btn tran3s"
              onClick={() => {
                setValue("anhDaiDien", "");
              }}
            >
              Xóa
            </button>
          </div>
          <UserSetting register={register} />
        </div>
        {/* <AddressAndLocation
          register={register}
          disableMap={true}
          setValue={setValue}
        /> */}

        <div className="button-group d-inline-flex align-items-center mt-30">
          <button type="submit" className="dash-btn-two tran3s me-3">
            Lưu
          </button>
          <button
            className="dash-cancel-btn tran3s"
            onClick={() => {
              reset();
            }}
          >
            Hủy
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileBody;
