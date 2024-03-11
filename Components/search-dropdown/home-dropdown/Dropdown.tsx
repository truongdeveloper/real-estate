import { Router } from "next/router";
import SelectCustom from "../../../Helper/ui/SelectCustom";
import Link from "next/link";

const DropdownHome = ({ style }: any) => {
  const selectHandler = (e: any) => {};

  const searchHandler = () => {
    window.location.href = "/listing_0";
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        searchHandler();
      }}
    >
      <div className="row gx-0 align-items-center">
        <div className="col-xl-3 col-lg-4">
          <div className="input-box-one border-left">
            <div className="label">Loại BĐS</div>
            <SelectCustom
              className={`nice-select`}
              options={[
                { value: "apartments", text: "Buy Apartments" },
                { value: "condos", text: "Rent Condos" },
                { value: "houses", text: "Sell Houses" },
                { value: "industrial", text: "Rent Industrial" },
                { value: "villas", text: "Sell Villas" },
                { value: "apartments", text: "Buy Apartments" },
                { value: "condos", text: "Rent Condos" },
                { value: "houses", text: "Sell Houses" },
                { value: "industrial", text: "Rent Industrial" },
                { value: "villas", text: "Sell Villas" },
                { value: "apartments", text: "Buy Apartments" },
                { value: "condos", text: "Rent Condos" },
                { value: "houses", text: "Sell Houses" },
                { value: "industrial", text: "Rent Industrial" },
                { value: "villas", text: "Sell Villas" },
                { value: "apartments", text: "Buy Apartments" },
                { value: "condos", text: "Rent Condos" },
                { value: "houses", text: "Sell Houses" },
                { value: "industrial", text: "Rent Industrial" },
                { value: "villas", text: "Sell Villas" },
                { value: "apartments", text: "Buy Apartments" },
                { value: "condos", text: "Rent Condos" },
                { value: "houses", text: "Sell Houses" },
                { value: "industrial", text: "Rent Industrial" },
                { value: "villas", text: "Sell Villas" },
                { value: "apartments", text: "Buy Apartments" },
                { value: "condos", text: "Rent Condos" },
                { value: "houses", text: "Sell Houses" },
                { value: "industrial", text: "Rent Industrial" },
                { value: "villas", text: "Sell Villas" },
                { value: "apartments", text: "Buy Apartments" },
                { value: "condos", text: "Rent Condos" },
                { value: "houses", text: "Sell Houses" },
                { value: "industrial", text: "Rent Industrial" },
                { value: "villas", text: "Sell Villas" },
                { value: "apartments", text: "Buy Apartments" },
                { value: "condos", text: "Rent Condos" },
                { value: "houses", text: "Sell Houses" },
                { value: "industrial", text: "Rent Industrial" },
                { value: "villas", text: "Sell Villas" },
                { value: "apartments", text: "Buy Apartments" },
                { value: "condos", text: "Rent Condos" },
                { value: "houses", text: "Sell Houses" },
                { value: "industrial", text: "Rent Industrial" },
                { value: "villas", text: "Sell Villas" },
                { value: "apartments", text: "Buy Apartments" },
                { value: "condos", text: "Rent Condos" },
                { value: "houses", text: "Sell Houses" },
                { value: "industrial", text: "Rent Industrial" },
                { value: "villas", text: "Sell Villas" },
              ]}
              defaultCurrent={0}
              onChange={selectHandler}
              name=""
              placeholder=""
            />
          </div>
        </div>
        <div className={`col-xl-4 col-lg-4`}>
          <div className="input-box-one border-left">
            <div className="label">Địa điểm</div>
            <SelectCustom
              className={`nice-select location `}
              options={[
                { value: "germany", text: "Berlin, Germany" },
                { value: "dhaka", text: "Dhanmondi, Dhaka" },
                { value: "mexico", text: "Acapulco, Mexico" },
                { value: "france", text: "Cannes, France" },
                { value: "india", text: "Delhi, India" },
                { value: "giza", text: "Giza, Egypt" },
                { value: "cuba", text: "Havana, Cuba" },
              ]}
              defaultCurrent={0}
              onChange={selectHandler}
              name=""
              placeholder=""
            />
          </div>
        </div>
        <div className="col-xl-3 col-lg-4">
          <div className="input-box-one border-left">
            <div className="label">Từ khóa</div>
            <input
              type="text"
              placeholder="buy, home, loft, apartment"
              className="type-input"
            />
          </div>
        </div>
        <div className={`col-xl-2`}>
          <div className="input-box-one lg-mt-10">
            <button
              className={`fw-500 tran3s ${
                style
                  ? "w-100 tran3s search-btn-three"
                  : "text-uppercase search-btn"
              }`}
            >
              <Link href={"/real-estate-listing"}>Tìm kiếm</Link>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default DropdownHome;
