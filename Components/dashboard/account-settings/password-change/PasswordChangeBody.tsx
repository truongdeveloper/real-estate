"use client";
import Link from "next/link";
import DashboardHeader from "../../../../Common/LayoutDashboard/Header/DashboardHeader";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import axiosService from "../../../../Common/api/AxiosServices";
import { CHANGE_PASSWORD } from "../../../../Common/api/apiEndPoints";
import { toast } from "react-toastify";
import { useCallback, useState } from "react";
import Image from "next/image";
import OpenEye from "@/assets/images/icon/icon_68.svg";

const PasswordChangeBody = () => {
  const { data } = useSession();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: data?.user.tenTK,
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (dataForm: any) => {
    axiosService({
      url: CHANGE_PASSWORD.url,
      body: {
        tenTk: dataForm.username,
        mkCu: dataForm.currentPassword,
        mkMoi: dataForm.newPassword,
      },
      token: data?.user.token,
    })?.then((res) => {
      if (res.status !== 200) {
      } else {
        if (res) {
          toast("Thay đổi mật khẩu thành công", {
            type: "success",
          });
        }
      }
    });
  };

  return (
    <div className="dashboard-body">
      <div className="position-relative">
        <DashboardHeader title="Đổi mật khẩu" />
        <div className="bg-white card-box border-20">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-12">
                <div className="dash-input-wrapper mb-20">
                  <label htmlFor="">Tên tài khoản</label>
                  <input
                    type="text"
                    disabled
                    placeholder="Tên tài khoản"
                    {...register("username")}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="dash-input-wrapper position-relative mb-20">
                  <label htmlFor="">Mật khẩu cũ*</label>
                  <input
                    type="password"
                    placeholder="Mật khẩu cũ"
                    {...register("currentPassword")}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="dash-input-wrapper position-relative mb-20">
                  <label htmlFor="">Mật khẩu mới*</label>
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder="Mật khẩu mới"
                    {...register("newPassword")}
                  />
                  <button
                    className="placeholder_icon"
                    style={{
                      width: "20px",
                      height: "20px",
                      position: "absolute",
                      right: "20px",
                      bottom: "20px",
                    }}
                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                  >
                    {isPasswordVisible ? (
                      <i className="fa-solid fa-eye"></i>
                    ) : (
                      <i className="fa-solid fa-eye-slash"></i>
                    )}
                  </button>
                </div>
              </div>
              <div className="col-12">
                <div className="dash-input-wrapper mb-20">
                  <label htmlFor="">Nhập lại mật khẩu mới*</label>
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder="Nhập lại mật khẩu mới"
                    {...register("confirmPassword")}
                  />
                </div>
              </div>
            </div>

            <div className="button-group d-inline-flex align-items-center">
              <button type="submit" className="dash-btn-two tran3s">
                Đổi mật khẩu
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordChangeBody;
