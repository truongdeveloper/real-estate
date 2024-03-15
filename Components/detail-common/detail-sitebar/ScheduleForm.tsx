"use client";
const ScheduleForm = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="input-box-three mb-25">
        <div className="label">Tên của bạn*</div>
        <input type="text" placeholder="Họ và tên" className="type-input" />
      </div>
      <div className="input-box-three mb-25">
        <div className="label">Email*</div>
        <input type="email" placeholder="Tên email" className="type-input" />
      </div>
      <div className="input-box-three mb-25">
        <div className="label">Số điẹn thoại*</div>
        <input type="tel" placeholder="Số điện thoại " className="type-input" />
      </div>
      <div className="input-box-three mb-15">
        <div className="label">Tin nhắn*</div>
        <textarea placeholder="Xin chào, Bất động sản của bạn rất đẹp tôi muốn thuê nó"></textarea>
      </div>
      <button className="btn-nine text-uppercase rounded-3 w-100 mb-10">
        Gửi
      </button>
    </form>
  );
};

export default ScheduleForm;
