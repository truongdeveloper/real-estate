"use client";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import ReportServices from "../../services/reportService";

const ReportModal = ({ idPost }: { idPost: number }) => {
  const { data } = useSession();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      maTK: data?.user?.id,
      maBaiDang: idPost,
      lyDo: "",
      email: data?.user?.taiKhoan.email ? data?.user?.taiKhoan.email : "",
      sdt: data?.user?.taiKhoan.sdt ? data?.user?.taiKhoan.sdt : "",
    },
  });

  const onSubmit = (dataForm: any) => {
    new ReportServices()
      .postNewReport(
        dataForm?.maTK,
        dataForm?.maBaiDang,
        dataForm?.lyDo,
        dataForm?.email,
        dataForm?.sdt
      )
      ?.then((res: any) => {
        if (res != "Bạn đã báo cáo bài đăng này!") {
          toast("Gửi báo cáo thành công", {
            type: "success",
          });
        } else {
          if (res == "Bạn đã báo cáo bài đăng này!") {
            toast(res, {
              type: "warning",
            });
          } else {
            if (res.status === 500) {
              toast("Gửi báo cáo thất bại, kiểm tra mạng", {
                type: "warning",
              });
            } else {
              toast("Lỗi server hãy thử lại lần sau", {
                type: "warning",
              });
            }
          }
        }
      });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="input-box-three mb-25">
        <div className="label">Email*</div>
        <input
          type="text"
          placeholder="Email"
          className="type-input"
          autoComplete="off"
          {...register("email")}
        />
      </div>
      <div className="input-box-three mb-15">
        <div className="label">Số điện thoại*</div>
        <input
          type="text"
          className="type-input"
          placeholder="Số điện thoại"
          autoComplete="off"
          {...register("sdt")}
        ></input>
      </div>
      <div className="input-box-three mb-15">
        <div className="label">Lý do*</div>
        <textarea
          placeholder="Xin chào, Bất động sản của bạn rất đẹp tôi muốn thuê nó"
          {...register("lyDo")}
        ></textarea>
      </div>
      <button
        type="submit"
        className="btn-nine text-uppercase rounded-3 w-100 mb-10"
      >
        Gửi báo cáo sai phạm
      </button>
    </form>
  );
};

export default ReportModal;
