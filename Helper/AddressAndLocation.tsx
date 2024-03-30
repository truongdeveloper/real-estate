"use client";
import Image from "next/image";
import locationImage from "@/assets/images/dashboard/icon/icon_16.svg";
import SelectCustom from "./ui/SelectCustom";
import { getListQuanHuyen } from "../Constants/getListQuanHuyen";
import { useEffect, useState } from "react";
import { getProvinceList } from "../Constants/getProvince";
import { getListXaPhuong } from "../Constants/getListXaPhuong";
import GoogleMapComponent from "./GoogleMapComponent";

const AddressAndLocation = () => {
  const selectHandler = (e: any) => {
    switch (e.target.name) {
      case "province": {
        return setProvince(e.target.value);
      }
      case "district": {
        return setDistrict(e.target.value);
      }
    }
  };

  const [province, setProvince] = useState("01");
  const [district, setDistrict] = useState("001");

  const [location, setLocation] = useState<{ lat: number; lng: number }>({
    lat: 0,
    lng: 0,
  });

  const [districtList, setDistrictList] = useState<any>(null);
  const [communeList, setCommuneList] = useState<any>(null);

  const provinceList = getProvinceList();

  useEffect(() => {
    getListQuanHuyen(province.toString()).then((data) => {
      setDistrictList(data);
    });
  }, [province]);

  useEffect(() => {
    getListXaPhuong(district.toString()).then((data) => {
      setCommuneList(data);
    });
  }, [district]);

  function handleTakeLatLng(location: { lat: number; lng: number }) {
    setLocation(location);
  }

  return (
    <div className="bg-white card-box border-20 mt-40">
      <h4 className="dash-title-three">Address & Location</h4>
      <div className="row">
        <div className="col-12">
          <div className="dash-input-wrapper mb-25">
            <label htmlFor="">Địa chỉ*</label>
            <input type="text" placeholder="19 Yawkey Way" />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="dash-input-wrapper mb-25">
            <label htmlFor="">Tỉnh*</label>
            <SelectCustom
              className="nice-select"
              options={provinceList}
              defaultCurrent={0}
              onChange={selectHandler}
              name="province"
              placeholder="Hà Nội,..."
            />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="dash-input-wrapper mb-25">
            <label htmlFor="">Quận/Huyện*</label>
            <SelectCustom
              className="nice-select"
              options={districtList}
              defaultCurrent={0}
              onChange={selectHandler}
              name="district"
              placeholder="Ba Đình, ..."
            />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="dash-input-wrapper mb-25">
            <label htmlFor="">Xã/Phường*</label>
            <SelectCustom
              className="nice-select"
              options={communeList}
              defaultCurrent={0}
              onChange={selectHandler}
              name=""
              placeholder="Kim Mã, ..."
            />
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="dash-input-wrapper mb-25">
          <label htmlFor="">Map Location*</label>
          <div className="position-relative">
            <input
              type="text"
              placeholder="XC23+6XC, Moiran, N105"
              value={`${location.lat.toString()}, ${location.lng.toString()}`}
              readOnly
            />
            {/* <div className=" form-select-lg nice-select w-100 text-body">
              {`${location.lat.toString()}, ${location.lng.toString()}`}
            </div> */}
            <button className="location-pin tran3s">
              <Image src={locationImage} alt="" className="lazy-img m-auto" />
            </button>
          </div>

          <div className="map-frame mt-30">
            <div className="gmap_canvas h-100 w-100">
              <GoogleMapComponent handleTakeLatLng={handleTakeLatLng} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressAndLocation;
