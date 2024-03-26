"use client";
import { Router, useRouter } from "next/router";
import SelectCustom from "../../../Helper/ui/SelectCustom";
import { Provinces } from "../../../data/home-data/Location";
import category_data from "../../../data/home-data/CategoryData";
import { debounce, isEmpty } from "lodash";
import ListingDropdownModal from "../../../Common/modals/ListingDropdownModal";
import { toast } from "react-toastify";
import Link from "next/link";
import clsx from "clsx";
import {
  searchAddressGoongIo,
  searchAddressLocation,
} from "../../../libs/map/MapSearch";
import { ReactNode, useState } from "react";
import { useDebounce, useDebouncedCallback } from "use-debounce";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

const DropdownHome = (props: any) => {
  const { isListing } = props;

  const DelaySearch = 500;
  const maxPrice = 100000;
  const priceValue = 10000;
  // Hàm xử lý thay đổi tìm kiếm
  const handleSearchChange = () => {
    toast("Lọc");
  };

  // Hàm xử lý thay đổi giá tiền
  const handlePriceChange = () => {
    toast("Lọc");
  };

  // Hàm xử lý thiết lập lại bộ lọc
  const handleResetFilter = () => {
    toast("Lọc");
  };

  // Hàm xử lý thay đổi tiện ích đã chọn
  const handleAmenityChange = () => {
    toast("Lọc");
  };

  // Hàm xử lý thay đổi vị trí
  const handleLocationChange = () => {
    toast("Lọc");
  };

  // Hàm xử lý thay đổi trạng thái
  const handleStatusChange = () => {
    toast("Lọc");
  };
  const router = useRouter();
  const queryParams = new URLSearchParams();
  const selectHandler = (e: any) => {
    queryParams.append(e.target.name, e.target.value);
  };

  const searchHandler = (e: any) => {
    const keyword = e.target.elements.keyword.value;
    if (keyword) {
      queryParams.append("keyword", keyword);
    }
    router.push(`/real-estate-listing?${queryParams.toString()}`);
  };

  const [searchSelect, setSearchSeleact] = useState([]);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const debounced = useDebouncedCallback((value) => {
    setDropdownOpen(false);
    const result = searchAddressGoongIo(value);
    result.then((value: any) => {
      const searchList = value.map((item: any) => {
        return {
          value: item.formatted_address,
          text: item.formatted_address,
        };
      });
      setSearchSeleact(searchList);
      setDropdownOpen(true);
      if (isEmpty(searchList)) {
        setDropdownOpen(false);
      }
      console.log(searchList, dropdownOpen);
    });
  }, DelaySearch);

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
          searchHandler(e);
        }}
      >
        <div className="row gx-0 align-items-center">
          <div className="col-xl-3 col-lg-4">
            <div className="input-box-one border-left">
              <div className="label">Loại BĐS</div>
              <SelectCustom
                className={`nice-select`}
                options={categroryData}
                defaultCurrent={0}
                onChange={selectHandler}
                name="category"
                placeholder=""
              />
            </div>
          </div>
          <div className={clsx(`col-xl-3 col-lg-4`)}>
            <div className="input-box-one border-left">
              <div className="label">Địa điểm</div>
              <SelectCustom
                className={`nice-select `}
                options={province_list}
                defaultCurrent={0}
                onChange={selectHandler}
                name="province"
                placeholder=""
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
                // onChange={(e) => debounced(e.target.value)}
              />
              {/* <Dropdown
                isOpen={dropdownOpen}
                toggle={toggle}
                // direction={direction}
              >
                <DropdownToggle caret>Dropdown</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>Dropdown</DropdownItem>
                  {searchSelect.map((item: any): any => {
                    <DropdownItem text>
                      <p>{item.text}</p>
                    </DropdownItem>;
                  })}

                  <DropdownItem>Some Action</DropdownItem>
                  <DropdownItem text>Dropdown Item Text</DropdownItem>
                  <DropdownItem disabled>Action (disabled)</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Foo Action</DropdownItem>
                  <DropdownItem>Bar Action</DropdownItem>
                  <DropdownItem>Quo Action</DropdownItem>
                </DropdownMenu>
              </Dropdown> */}
            </div>
          </div>
          <div className={`col-xl-3`}>
            <div className="input-box-one lg-mt-10">
              <div className="d-flex align-items-center">
                {isListing ? (
                  <Link
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#advanceFilterModal"
                    className="search-modal-btn sm tran3s text-uppercase fw-500 d-inline-flex align-items-center me-3"
                  >
                    <i className="fa-light fa-sliders-up"></i>
                  </Link>
                ) : (
                  ""
                )}

                <button className="fw-500 text-uppercase tran3s search-btn">
                  Tìm kiếm
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <ListingDropdownModal
        handleSearchChange={handleSearchChange}
        handlePriceChange={handlePriceChange}
        maxPrice={maxPrice}
        priceValue={priceValue}
        handleResetFilter={handleResetFilter}
        handleAmenityChange={handleAmenityChange}
        handleLocationChange={handleLocationChange}
        handleStatusChange={handleStatusChange}
      />
    </>
  );
};

export default DropdownHome;
