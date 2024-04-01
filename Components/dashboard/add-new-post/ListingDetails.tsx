import NumberNiceSelect from "../../../Helper/ui/NumberNiceSelect";

const ListingDetails = ({ register }: any) => {
  const selectHandler = (e: any) => {};

  return (
    <div className="bg-white card-box border-20 mt-40">
      <h4 className="dash-title-three">Listing Details</h4>
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
              {...register("phongNgu")}
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
              {...register("phongTam")}
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
              {...register("phongBep")}
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
              type="text"
              className="form-control"
              placeholder="2024"
              {...register("namXayDung")}
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
              {...register("soTang")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetails;
