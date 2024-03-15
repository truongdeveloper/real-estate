import SelectCustom from "../../../Helper/ui/SelectCustom";
import category_data from "../../../data/home-data/CategoryData";

const Overview = () => {
  const selectHandler = (e: any) => {};

  const categroryData = category_data.map((category) => {
    return {
      value: category.id,
      text: category.name,
    };
  });

  return (
    <div className="bg-white card-box border-20">
      <h4 className="dash-title-three">Tổng quan</h4>
      <div className="dash-input-wrapper mb-30">
        <label htmlFor="">Tiêu đề *</label>
        <input type="text" placeholder="Tên BĐS" />
      </div>
      <div className="dash-input-wrapper mb-30">
        <label htmlFor="">Mô tả*</label>
        <textarea
          className="size-lg"
          placeholder="Viết về BĐS của bạn..."
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
              name=""
              placeholder=""
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="dash-input-wrapper mb-30">
            <label htmlFor="">Gía thuê*</label>
            <input type="text" placeholder="Giá thuê" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
