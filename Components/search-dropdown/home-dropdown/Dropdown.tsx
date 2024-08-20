"use client";
import { useRouter } from "next/router";
import SelectCustom from "../../../Helper/ui/SelectCustom";
import { Provinces } from "../../../data/home-data/Location";
import category_data from "../../../data/home-data/CategoryData";
import clsx from "clsx";
import { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import ListingDropdownModal from "../../../Common/modals/ListingDropdownModal";

const DropdownHome = (props: any) => {
  const { isListing } = props;
  const router = useRouter();
  const query = router.query;

  const [formData, setFormData] = useState({
    category: query.category ? query.category : "",
    province: query.province ? query.province : "",
    keyword: query.keyword ? query.keyword : "",
    priceFrom: query.priceFrom ? query.priceFrom : "",
    priceTo: query.priceTo ? query.priceTo : "",
    areaFrom: query.areaFrom ? query.areaFrom : "",
    areaTo: query.areaTo ? query.areaTo : "",
    district: query.district ? query.district : "",
    commune: query.commune ? query.commune : "",
  });

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const queryParams = new URLSearchParams();
  const selectHandler = (e: any) => {
    const { name, value } = e.target;
    console.log(name, value);
    if (name == "province") {
      setFormData({ ...formData, province: value, district: "", commune: "" });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const clearSearchSubmit = () => {
    setFormData({
      category: "",
      province: "",
      keyword: "",
      priceFrom: "",
      priceTo: "",
      areaFrom: "",
      areaTo: "",
      district: "",
      commune: "",
    });
    router.push(`/real-estate-listing`);
  };

  const searchSubmit = (e: any) => {
    const formDataValues = Object.values(formData);
    const formDataKeys = Object.keys(formData);
    formDataKeys.forEach((key, index) => {
      if (formDataValues[index]) {
        queryParams.set(key, formDataValues[index] as string);
      } else {
        queryParams.delete(key);
      }
    });
    router.push(`/real-estate-listing?${queryParams.toString()}`);
  };

  const province_list = Provinces.map((province) => {
    return {
      value: province.code,
      text: province.name,
    };
  });

  const categroryData = category_data.map((category) => {
    return {
      value: category.id,
      text: category.name,
    };
  });

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          searchSubmit(e);
        }}
      >
        <div className="row gx-0 align-items-center">
          <div className="col-xl-3 col-lg-4">
            <div className="input-box-one border-left">
              <div className="label">Loại BĐS</div>
              <SelectCustom
                className={`nice-select`}
                options={categroryData}
                defaultCurrent={categroryData.find(
                  (item) => item.value == (formData.category as any)
                )}
                onChange={selectHandler}
                name="category"
                placeholder="Tất cả các loại, ..."
              />
            </div>
          </div>
          <div className={clsx(`col-xl-3 col-lg-4`)}>
            <div className="input-box-one border-left">
              <div className="label">Địa điểm</div>
              <SelectCustom
                className={`nice-select `}
                options={province_list}
                defaultCurrent={province_list.find(
                  (item) => item.value == formData.province
                )}
                onChange={selectHandler}
                name="province"
                placeholder="Hà Nội,...."
              />
            </div>
          </div>
          <div className="col-xl-3 col-lg-4">
            <div className="input-box-one border-left">
              <div className="label">Từ khóa</div>
              <input
                type="text"
                placeholder="nhà, căn hộ, ..."
                className="type-input"
                name="keyword"
                defaultValue={formData.keyword}
                onChange={selectHandler}
              />
            </div>
          </div>
          <div className={`col-xl-3`}>
            <div className="input-box-one lg-mt-10">
              <div className="d-flex align-items-center">
                {isListing ? (
                  <button
                    onClick={toggle}
                    className="search-modal-btn sm tran3s text-uppercase fw-500 d-inline-flex align-items-center me-3"
                  >
                    <i className="fa-light fa-sliders-up"></i>
                  </button>
                ) : (
                  ""
                )}

                <button
                  className="fw-500 text-uppercase tran3s search-btn"
                  type="submit"
                >
                  Tìm kiếm
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Modal isOpen={isOpen} toggle={toggle} centered size="lg">
        <ModalHeader toggle={toggle}>Tìm kiếm</ModalHeader>
        <ModalBody>
          <ListingDropdownModal
            selectedHandle={selectHandler}
            searchSubmit={searchSubmit}
            formData={formData}
            clearSearchSubmit={clearSearchSubmit}
          />
        </ModalBody>
      </Modal>
    </>
  );
};

export default DropdownHome;
