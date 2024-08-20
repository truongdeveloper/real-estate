import Link from "next/link";
import SelectCustom from "../../Helper/ui/SelectCustom";
import { useEffect, useState } from "react";
import { getListQuanHuyen } from "../../Constants/getListQuanHuyen";
import { getListXaPhuong } from "../../Constants/getListXaPhuong";

const ListingDropdownModal = ({
  selectedHandle,
  searchSubmit,
  formData,
  clearSearchSubmit,
}: any) => {
  const [districtList, setDistrictList] = useState<any>(null);
  const [communeList, setCommuneList] = useState<any>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    getListQuanHuyen(
      formData.province.toString() ? formData.province.toString() : "01"
    ).then((data) => {
      setDistrictList(data);
    });
  }, [formData.province]);

  useEffect(() => {
    getListXaPhuong(
      formData.district.toString() ? formData.district.toString() : "001"
    ).then((data) => {
      setCommuneList(data);
    });
  }, [formData.district]);
  return (
    <div className="advance-search-panel">
      <div className="main-bg border-0">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="row gx-lg-5">
            <div className="col-md-6">
              <div className="input-box-one mb-35">
                <div className="label">Quận/huyện</div>
                <SelectCustom
                  className="nice-select fw-normal"
                  options={districtList}
                  defaultCurrent={
                    districtList &&
                    districtList.find(
                      (item: any) => item.value == formData.district
                    )
                  }
                  onChange={selectedHandle}
                  name="district"
                  disable={formData.province ? false : true}
                  placeholder=""
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-box-one mb-35">
                <div className="label">Xã/phường</div>
                <SelectCustom
                  className="nice-select fw-normal"
                  options={communeList}
                  defaultCurrent={
                    communeList &&
                    communeList.find(
                      (item: any) => item.value == formData.commune
                    )
                  }
                  onChange={selectedHandle}
                  name="commune"
                  disable={formData.district ? false : true}
                  placeholder=""
                />
              </div>
            </div>
            <div className="col-md-8">
              <h6 className="block-title mt-45 mb-20">Giá tiền</h6>
              <div className="price-ranger">
                <div className="price-input d-flex align-items-center justify-content-between pt-5">
                  <div className="field d-flex align-items-center ">
                    <input
                      type="number"
                      className="input-min"
                      value={formData.priceFrom ? formData.priceFrom : ""}
                      onChange={selectedHandle}
                      name="priceFrom"
                    />
                  </div>
                  <div className="divider-line"></div>
                  <div className="field d-flex flex-column align-items-center">
                    <input
                      type="number"
                      className="input-max"
                      value={formData.priceTo ? formData.priceTo : ""}
                      onChange={selectedHandle}
                      name="priceTo"
                    />
                    {Number(formData.priceTo) != 0 &&
                      Number(formData.priceTo) < Number(formData.priceFrom) && (
                        <small className=" text-danger">
                          Số tiền đến phải lớn hơn
                        </small>
                      )}
                  </div>

                  <div className="currency fs-6">VNĐ</div>
                </div>
              </div>
              <h6 className="block-title mt-45 mb-20">Diện tích</h6>
              <div className="price-ranger">
                <div className="price-input d-flex align-items-center justify-content-between pt-5">
                  <div className="field d-flex align-items-center">
                    <input
                      type="number"
                      className="input-min"
                      value={formData.areaFrom ? formData.areaFrom : ""}
                      onChange={selectedHandle}
                      name="areaFrom"
                    />
                  </div>
                  <div className="divider-line"></div>
                  <div className="field d-flex flex-column align-items-center">
                    <input
                      type="number"
                      className="input-max"
                      value={formData.areaTo ? formData.areaTo : ""}
                      onChange={selectedHandle}
                      name="areaTo"
                    />
                    {Number(formData.areaTo) != 0 &&
                      Number(formData.areaTo) < Number(formData.areaFrom) && (
                        <small className=" text-danger">
                          Diện tích đến lớn hơn
                        </small>
                      )}
                  </div>
                  <div className="currency fs-6">
                    m<sup>2</sup>{" "}
                  </div>
                </div>
              </div>

              <div className="d-flex align-items-center justify-content-between gap-4">
                <div className="col-md-6">
                  <button
                    className={`fw-500 text-uppercase tran3s apply-search w-100 mt-25 mb-25 `}
                    onClick={searchSubmit}
                  >
                    <i className="fa-light fa-magnifying-glass"></i>
                    <span>Tìm</span>
                  </button>
                </div>
                <div className="col-md-6">
                  <div className="d-flex justify-content-between form-widget">
                    <button
                      onClick={clearSearchSubmit}
                      style={{ cursor: "pointer" }}
                      className="tran3s"
                    >
                      <i className="fa-regular fa-arrows-rotate me-3"></i>
                      <span>Xóa các trường</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ListingDropdownModal;
