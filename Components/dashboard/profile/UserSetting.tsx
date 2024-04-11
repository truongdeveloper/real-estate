"use client";

const UserSetting = ({ register, setValue }: any) => {
  const selectHandler = (e: any) => {};

  return (
    <div className="row">
      <div className="col-12">
        <div className="dash-input-wrapper mb-30">
          <label htmlFor="">Họ và tên*</label>
          <input type="text" placeholder="Đoàn Thảo" {...register("hoTen")} />
        </div>
      </div>
      <div className="col-12">
        <div className="dash-input-wrapper mb-30">
          <label htmlFor="">Địa chỉ*</label>
          <input
            type="text"
            placeholder="96 Định Công, Hoàng Mai, Hà Nội"
            {...register("diaChi")}
          />
        </div>
      </div>
      <div className="col-sm-6">
        <div className="dash-input-wrapper mb-30">
          <label htmlFor="">Số điên thoại*</label>
          <input type="text" placeholder="03176238787" {...register("sdt")} />
        </div>
      </div>
      <div className="col-sm-6">
        <div className="dash-input-wrapper mb-30">
          <label htmlFor="">CMND/CCCD*</label>
          <input type="text" placeholder="026201004378" {...register("cmnd")} />
        </div>
      </div>
      <div className="col-sm-6">
        <div className="dash-input-wrapper mb-30">
          <label htmlFor="">Email*</label>
          <input
            type="email"
            placeholder="companyinc@mail.com"
            {...register("email")}
          />
        </div>
      </div>
      <div className="col-sm-6">
        <div className="dash-input-wrapper mb-30">
          <label htmlFor="">Vai Trò*</label>
          <input
            type="text"
            placeholder="Người dùng"
            disabled
            {...register("vaiTro")}
          />
        </div>
      </div>
      <div className="col-sm-6">
        <div className="dash-input-wrapper mb-30">
          <label htmlFor="">Ngày sinh*</label>
          <input
            type="date"
            placeholder="07/11/2001"
            {...register("ngaySinh")}
          />
        </div>
      </div>
      <div className="col-sm-6">
        <div className="dash-input-wrapper mb-30">
          <label htmlFor="">Giới tính*</label>
          <select
            className="form-select"
            style={{ height: "55px" }}
            aria-label="Default select example"
            {...register("gioiTinh")}
          >
            <option value={0}>Nữ</option>
            <option value={1}>Nam</option>
          </select>
        </div>
      </div>
      <div className="col-12">
        <div className="dash-input-wrapper">
          <label htmlFor="">Giới thiệu*</label>
          <textarea
            className="size-lg"
            {...register("gioiThieu")}
            placeholder="Tôi là nhà môi giới Bất động sản đã làm việc được 4 năm trong ngành, chữ tin luôn được đặt lên hàng đầu, ...."
          ></textarea>
          <div className="alert-text">
            Hãy viết nhưng gì tốt nhất của bạn người dùng có thể thấy nó trên
            trang web
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSetting;
