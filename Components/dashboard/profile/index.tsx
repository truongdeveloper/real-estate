"use client";

import Image from "next/image";

import avatar_1 from "@/assets/images/dashboard/avatar_02.jpg";
import DashboardHeader from "../../../Common/LayoutDashboard/Header/DashboardHeader";
import AddressAndLocation from "../add-new-post/AddressAndLocation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";
import UserSetting from "./UserSetting";

export interface User {
  HoTen: string;
  Avatar: string;
  SoDienThoai: string;
  Email: string;
  CMND: string;
  VaiTro: string;
  NgaySinh: Date;
  GioiTinh: string;
  GioiThieu: string;
  GhiChu: string;
}

const ProfileBody = () => {
  const schema = yup.object().shape({
    HoTen: yup.string(),
    Avatar: yup.string(),
    SoDienThoai: yup.string(),
    Email: yup.string(),
    CMND: yup.string(),
    VaiTro: yup.string(),
    NgaySinh: yup.date(),
    GioiTinh: yup.string(),
    GioiThieu: yup.string(),
    GhiChu: yup.string(),
  });

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm<User>({
    resolver: yupResolver<any>(schema),
    defaultValues: {},
  });

  //Hiện ảnh đại diện khi người dùng chọn ảnh đại diện
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      //Chuyển file sang dạng url
      const url = URL.createObjectURL(e.target.files[0]);
      setValue("Avatar", url);
    }
  };
  useEffect(() => {
    console.log(watch());
  });

  return (
    <div className="dashboard-body" style={{ paddingBottom: "100px" }}>
      <form className="position-relative">
        <DashboardHeader title="Người dùng" />
        <h2 className="main-title d-block d-lg-none">Người dùng</h2>

        <div className="bg-white card-box border-20">
          <div className="user-avatar-setting d-flex align-items-center mb-30">
            <Image
              width={100}
              height={100}
              src={watch("Avatar")}
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
            <button className="delete-btn tran3s">Xóa</button>
          </div>
          <UserSetting register={register} />
        </div>
        <AddressAndLocation
          register={register}
          disableMap={true}
          setValue={setValue}
        />

        <div className="button-group d-inline-flex align-items-center mt-30">
          <button type="submit" className="dash-btn-two tran3s me-3">
            Save
          </button>
          <button className="dash-cancel-btn tran3s">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default ProfileBody;
