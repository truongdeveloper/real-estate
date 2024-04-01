import Image from "next/image";

import titleShape from "@/assets/images/shape/title_shape_03.svg";
import { listingData } from "../../data/inner-data/ListingData";
import ShortCard from "../../Helper/ShortCard";
import { uniqueId } from "lodash";

const Property = () => {
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
            {listingData.slice(0, 9).map((item) => (
              <ShortCard key={uniqueId()} itemPost={item}></ShortCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
