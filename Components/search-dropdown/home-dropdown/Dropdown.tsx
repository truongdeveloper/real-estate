import { Router, useRouter } from "next/router";
import SelectCustom from "../../../Helper/ui/SelectCustom";
import { Provinces } from "../../../data/home-data/Location";
import category_data from "../../../data/home-data/CategoryData";
import { isEmpty } from "lodash";

const DropdownHome = () => {
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
        <div className={`col-xl-4 col-lg-4`}>
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
            />
          </div>
        </div>
        <div className={`col-xl-2`}>
          <div className="input-box-one lg-mt-10">
            <button className={`fw-500 tran3s text-uppercase search-btn`}>
              Tìm kiếm
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default DropdownHome;
