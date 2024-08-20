import NumberNiceSelect from "../../../Helper/ui/NumberNiceSelect";

const ListingDetails = ({ register }: any) => {
  const selectHandler = (e: any) => {};

  return (
    <div className="bg-white card-box border-20 mt-40">
      <h4 className="dash-title-three">Chi tiết BĐS</h4>
      <div className="row align-items-end">
        {/* <div className="col-md-6">
          <div className="dash-input-wrapper mb-30">
            <label htmlFor="">Size in ft*</label>
            <input type="text" placeholder="Ex: 3,210 sqft" />
          </div>
        </div> */}
        <div className="col-md-6">
          <div className="dash-input-wrapper mb-30 form-group">
            <label htmlFor="">Số phòng ngủ*</label>
            <input
              type="number"
              min={0}
              className="form-control"
              placeholder="Số phòng ngủ"
              {...register("phongNgu", { valueAsNumber: true })}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="dash-input-wrapper mb-30 form-group">
            <label htmlFor="">Số Nhà vệ sinh*</label>
            <input
              type="number"
              min={0}
              className="form-control"
              placeholder="Số nhà vệ sinh"
              {...register("phongTam", { valueAsNumber: true })}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="dash-input-wrapper mb-30 form-group">
            <label htmlFor="">Số phòng ăn*</label>
            <input
              type="number"
              min={0}
              className="form-control"
              placeholder="Số phòng ăn"
              {...register("phongBep", { valueAsNumber: true })}
            />
          </div>
        </div>
        {/* <div className="col-md-6">
          <div className="dash-input-wrapper mb-30 form-group">
            <label htmlFor="">Chỗ để xe*</label>
            <input
              type="number"
              min={0}
              className="form-control"
              placeholder="Số chỗ để xe"
            />
          </div>
        </div> */}
        <div className="col-md-6">
          <div className="dash-input-wrapper mb-30 form-group">
            <label htmlFor="">Năm xây dựng*</label>
            <input
              type="number"
              className="form-control"
              placeholder="2024"
              {...register("namXayDung", { valueAsNumber: true })}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="dash-input-wrapper mb-30">
            <label htmlFor="">Số tầng*</label>
            <input
              type="number"
              min={0}
              className="form-control"
              placeholder="Số tầng"
              {...register("soTang", { valueAsNumber: true })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetails;
