import SelectCustom from "../../../Helper/ui/SelectCustom";
import category_data from "../../../data/home-data/CategoryData";

const OverviewRealEstate = ({ register, setValue }: any) => {
  const selectHandler = (e: any) => {
    setValue(e.target.name, e.target.value);
  };

  const categroryData = category_data.map((category) => {
    return {
      value: category.id,
      text: category.name,
    };
  });

  return (
    <div className="bg-white card-box border-20 mt-40">
      <h4 className="dash-title-three">Tổng quan bất động sản</h4>
      <div className="dash-input-wrapper mb-30">
        <label htmlFor="">Tên BĐS*</label>
        <input type="text" placeholder="Tên BĐS" {...register("tenBDS")} />
      </div>
      <div className="dash-input-wrapper mb-30">
        <label htmlFor="">Mô tả BĐS*</label>
        <textarea
          className="size-lg"
          placeholder="Viết về BĐS của bạn..."
          {...register("moTa")}
        ></textarea>
      </div>
      <div className="row align-items-end">
        <div className="col-md-6">
          <div className="dash-input-wrapper mb-30">
            <label htmlFor="">Loại BĐS*</label>
            <SelectCustom
              className="nice-select"
              options={categroryData}
              defaultCurrent={0}
              onChange={selectHandler}
              name="tenLoaiBDS"
              placeholder=""
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="dash-input-wrapper mb-30">
            <label htmlFor="">
              Diện tích*(m <sup>2</sup>)
            </label>
            <input type="text" placeholder="100" {...register("dienTich")} />
          </div>
        </div>
      </div>

      <div className="row align-items-end">
        {/* <div className="col-md-6">
          <div className="dash-input-wrapper mb-30">
            <label htmlFor="">Loại BĐS*</label>
            <SelectCustom
              className="nice-select"
              options={categroryData}
              defaultCurrent={0}
              onChange={selectHandler}
              name=""
              placeholder=""
            />
          </div>
        </div> */}
        <div className="col-md-6">
          <div className="dash-input-wrapper mb-30">
            <label htmlFor="" className="text-danger">
              Giá thuê*(VNĐ)
            </label>
            <input type="text" placeholder="100000" {...register("giaThue")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewRealEstate;
