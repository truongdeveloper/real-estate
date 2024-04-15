import Image from "next/image";

import titleShape from "@/assets/images/shape/title_shape_03.svg";
import ShortCard from "../../Helper/ShortCard";
import { uniqueId } from "lodash";
import { useEffect, useState } from "react";
import axiosService from "../../Common/api/AxiosServices";
import { GET_LISTING_SEARCH } from "../../Common/api/apiEndPoints";

const Property = () => {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    axiosService({
      url: GET_LISTING_SEARCH.url,
      method: "get",
      params: {
        trang: 0,
        kichThuoc: 20,
      },
    })?.then((res) => {
      if (res) {
        setData(res.danhSach);
      }
    });
  }, []);
  return (
    <div className="property-listing-one bg-pink-two mt-150 xl-mt-120 pt-140 xl-pt-120 lg-pt-80 pb-180 xl-pb-120 lg-pb-100">
      <div className="container">
        <div className="position-relative">
          <div className="title-one text-center text-lg-start mb-45 xl-mb-30 lg-mb-20 wow fadeInUp">
            <h3>
              Danh sách{" "}
              <span>
                mới <Image src={titleShape} alt="" className="lazy-img" />
              </span>
            </h3>
            <p className="fs-22 mt-xs">
              Khám phá các BĐS mới nhất và nổi bật để thuê.
            </p>
          </div>

          <div className="row gx-xxl-5">
            {data.slice(0, 9).map((item: any) => (
              <ShortCard key={uniqueId()} itemPost={item}></ShortCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
