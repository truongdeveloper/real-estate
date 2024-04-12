"use client";

import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { POST_SEND_REQUEST } from "../../../Common/api/apiEndPoints";
import axiosService from "../../../Common/api/AxiosServices";
import { toast } from "react-toastify";

const ScheduleForm = ({ idPost }: { idPost: number }) => {
  const { data } = useSession();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      maBD: idPost,
      maTK: data?.user?.id,
      tieuDe: "",
      noiDung: "",
    },
  });

  const onSubmit = (dataForm: any) => {
    axiosService({
      url: POST_SEND_REQUEST.url,
      method: "post",
      body: dataForm,
      // token: data?.user?.token,
    })?.then((res: any) => {
      if (res.maBD == idPost) {
        toast("Đăng yêu cầu thành công", {
          type: "success",
        });
      }
      if ((res.status = 500)) {
        toast("Trạng thái bài đăng không cho phép gửi yêu cầu", {
          type: "warning",
        });
      }
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="input-box-three mb-25">
        <div className="label">Tiêu dề yêu cầu*</div>
        <input
          type="text"
          placeholder="Yê cầu thuê BĐS 123"
          className="type-input"
          {...register("tieuDe")}
        />
      </div>
      <div className="input-box-three mb-15">
        <div className="label">Nội dung yêu cầu*</div>
        <textarea
          placeholder="Xin chào, Bất động sản của bạn rất đẹp tôi muốn thuê nó"
          {...register("noiDung")}
        ></textarea>
      </div>
      <button
        type="submit"
        className="btn-nine text-uppercase rounded-3 w-100 mb-10"
      >
        Gửi
      </button>
    </form>
  );
};

export default ScheduleForm;
