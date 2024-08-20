"use client";
import { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { getSession, signIn } from "next-auth/react";
import OpenEye from "@/assets/images/icon/icon_68.svg";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { loginModalState } from "../../../Recoil/atoms/modal";
import FavouriteService from "../../../services/favouriteService";
import { isEmpty } from "lodash";

interface FormData {
  username: string;
  password: string;
}

const LoginForm = () => {
  const router = useRouter();
  const setShowLoginModal = useSetRecoilState(loginModalState);

  const schema = yup
    .object({
      username: yup
        .string()
        .required("Trường này không được để trống")
        .min(6, "Tài khoản phải có 6 ký tự trở lên")
        .label("Tài khoản"),
      password: yup
        .string()
        .required("Trường này không được để trống")
        .min(6, "Mật khẩu phải có 6 ký tự trở lên")
        .label("Mật khẩu"),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });
  const onSubmit = async (data: FormData) => {
    const res = await signIn("credentials", {
      email: data.username,
      password: data.password,
      redirect: false,
    });
    if (!res?.ok) {
      toast("Sai tên đăng nhâp hoặc mật khẩu", {
        type: "warning",
      });
    } else {
      toast("Đăng nhập thành công", {
        type: "success",
      });
      const session = await getSession();
      if (session) {
        new FavouriteService()
          .getListFavourite(session.user.id)
          ?.then((res: any) => {
            if (res) {
              localStorage.setItem("favourites", JSON.stringify(res));
            }
          });
      }
      setShowLoginModal(false);
      // setTimeout(() => {
      //   window.location.reload();
      // }, 500);
    }
  };

  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!isPasswordVisible);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-12">
          <div className="input-group-meta position-relative mb-25">
            <label>Tên tài khoản*</label>
            <input
              type="text"
              {...register("username")}
              placeholder="Tên tài khoản"
            />
            <small className="form_error">{errors.username?.message}</small>
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta position-relative mb-20">
            <label>Mật khẩu*</label>
            <input
              type={isPasswordVisible ? "text" : "password"}
              {...register("password")}
              placeholder="Mật khẩu"
              className="pass_log_id"
            />
            <span className="placeholder_icon">
              <span
                className={`passVicon ${isPasswordVisible ? "eye-slash" : ""}`}
              >
                <Image
                  onClick={togglePasswordVisibility}
                  src={OpenEye}
                  alt=""
                />
              </span>
            </span>
            <small className="form_error">{errors.password?.message}</small>
          </div>
        </div>
        <div className="col-12">
          <div className="agreement-checkbox d-flex justify-content-between align-items-center">
            {/* <div>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Nhớ tài khoản</label>
            </div> */}
            <Link href="/dashboard/account-setting">Quên mật khẩu?</Link>
          </div>
        </div>
        <div className="col-12">
          <button
            type="submit"
            className="btn-two w-100 text-uppercase d-block mt-20"
          >
            Đăng nhập
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
