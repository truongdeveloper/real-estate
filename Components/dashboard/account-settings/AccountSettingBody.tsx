"use client";
import Link from "next/link";
import DashboardHeader from "../../../Common/LayoutDashboard/Header/DashboardHeader";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import SelectCustom from "../../../Helper/ui/SelectCustom";
import axiosService from "../../../Common/api/AxiosServices";

const AccountSettingBody = () => {
  const { data } = useSession();
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      tenTk: data?.user.name,
      quyen: "admin",
      trangThai: 1,
      soDu: 0,
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className="dashboard-body">
      <div className="position-relative">
        <DashboardHeader title="Cài đặt tài khoản" />
        <h2 className="main-title d-block d-lg-none">Cài đặt tài khoản</h2>
        <div className="bg-white card-box border-20">
          <h4 className="dash-title-three">Sửa và cập nhật</h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-lg-6">
                <div className="dash-input-wrapper mb-20">
                  <label htmlFor="">Tên tài khoản</label>
                  <input
                    type="text"
                    placeholder="Rashed"
                    {...register("tenTk")}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="dash-input-wrapper mb-20">
                  <label htmlFor="">Quyền</label>
                  <input
                    type="text"
                    placeholder="Kabir"
                    disabled
                    {...register("quyen")}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="dash-input-wrapper">
                  <label htmlFor="">Trạng thái</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    style={{ height: "55px" }}
                    {...register("trangThai")}
                  >
                    <option value={0}>Ẩn</option>
                    <option value={1}>Hoạt dộng</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="dash-input-wrapper mb-20">
                  <label htmlFor="">Số dư</label>
                  <input
                    type="text"
                    placeholder="Kabir"
                    disabled
                    {...register("soDu")}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="dash-input-wrapper mb-20">
                  <label htmlFor="">Mật khẩu</label>
                  <input type="password" placeholder="********" disabled />

                  <div className="info-text fs-6 d-sm-flex align-items-center justify-content-between mt-5">
                    <p className="m-0">
                      Bạn muốn thay đổi mật khẩu?
                      <Link href="/dashboard/account-settings/password-change">
                        Ở đây
                      </Link>
                    </p>
                    <Link
                      href="/dashboard/account-settings/password-change"
                      className="chng-pass"
                    >
                      Đổi mật khẩu
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="button-group d-inline-flex align-items-center mt-30">
              <button className="dash-btn-two tran3s me-3">Lưu thay đổi</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccountSettingBody;
