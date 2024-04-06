"use client";
import { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";

import OpenEye from "@/assets/images/icon/icon_68.svg";
import axiosService from "../../../Common/api/AxiosServices";
import { REGISTER } from "../../../Common/api/apiEndPoints";
import { Method } from "axios";
import { Button } from "reactstrap";
import { Account } from "../../../Models/common";

interface FormData {
  name: string;
  email: string;
  password: string;
  rePassword: string;
}

const RegisterForm = ({ setIndexLogin }: any) => {
  const schema = yup
    .object({
      name: yup
        .string()
        .required("Không để trống")
        .min(6, "Tài khoản phải có 6 ký tự trở lên")
        .label("Name"),
      email: yup
        .string()
        .required("Không để trống")
        .email("Phải là định dạng email")
        .label("Email"),
      password: yup
        .string()
        .required("Không để trống")
        .min(6, "Mật khẩu phải có 6 ký tự trở lên")
        .label("Password"),
      rePassword: yup
        .string()
        .required("Không để trống")
        .oneOf([yup.ref("password")], "Nhập lại mật khẩu không trùng mhau")
        .label("rePassword"),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });
  const onSubmit = (data: FormData) => {
    const res = axiosService({
      url: REGISTER.url,
      method: "post",
      body: {
        tenTK: data.name,
        email: data.email,
        matKhau: data.password,
      },
    });

    res
      ?.then((res) => {
        if (res === "Tên tài khoản đã tồn tại!") {
          toast("Tên tài khoản đã tồn tại!", {
            type: "warning",
          });
        }
        if (res.tenTK === data.name) {
          toast("Đăng ký tài khoản thành công", {
            type: "success",
          });
          setIndexLogin(0);
        }
      })
      .catch((error) => {
        toast(
          `Đăng ký thất bại
      ${error}`,
          {
            type: "error",
          }
        );
      });
  };

  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  const [isAgree, setIsAgree] = useState(false);
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
              {...register("name")}
              placeholder="Phương Thảo"
              autoComplete="off"
            />
            {errors.name && (
              <p className="form_error">{errors.name?.message}</p>
            )}
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta position-relative mb-25">
            <label>Email*</label>
            <input
              type="email"
              {...register("email")}
              placeholder="email@gmail.com"
            />
            <p className="form_error">{errors.email?.message}</p>
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta position-relative mb-20">
            <label>Mật khẩu*</label>
            <input
              type={isPasswordVisible ? "text" : "password"}
              {...register("password")}
              placeholder="Nhập mật kkhẩu"
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
            <p className="form_error">{errors.password?.message}</p>
          </div>
        </div>
        <div className="col-12 mt-3">
          <div className="input-group-meta position-relative mb-20">
            <label>Nhập lại mật khẩu*</label>
            <input
              type={isPasswordVisible ? "text" : "password"}
              {...register("rePassword")}
              placeholder="Nhập lại mật khẩu"
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
            <p className="form_error">{errors.rePassword?.message}</p>
          </div>
        </div>
        <div className="col-12 mt-2">
          <div className="agreement-checkbox d-flex justify-content-between align-items-center ms-3">
            <input
              type="checkbox"
              id="remember2"
              onChange={() => {
                setIsAgree(!isAgree);
              }}
            />
            <label htmlFor="remember2">
              Đồng ý với các <Link href="#">Điều khoản và điều kiện</Link> &{" "}
              <Link href="#">Chính sách bảo mật</Link>
            </label>
          </div>
        </div>
        <div className="col-12">
          <Button
            type="submit"
            className="btn-two w-100 text-uppercase d-block mt-20"
            disabled={!isAgree}
          >
            ĐĂNG KÝ
          </Button>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
