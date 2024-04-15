"use client";
// import UseShortedProperty from "@/hooks/useShortedProperty";
import Link from "next/link";
import Image from "next/image";
import ReactPaginate from "react-paginate";

import icon from "@/assets/images/icon/icon_46.svg";
import featureIcon_1 from "@/assets/images/icon/icon_04.svg";
import featureIcon_2 from "@/assets/images/icon/icon_05.svg";
import featureIcon_3 from "@/assets/images/icon/icon_06.svg";
import ShortCard from "../../../Helper/ShortCard";

import { isEmpty, uniqueId } from "lodash";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const FavouriteArea = () => {
  const itemsPerPage = 9;
  const page = "listing_4";

  const { data } = useSession();
  const [favouriteList, setFavoriteList] = useState<any>([]);
  useEffect(() => {
    console.log(data);
    setFavoriteList(data?.user?.baiDangUaThich);
  }, [data]);

  return (
    <>
      {!isEmpty(favouriteList) ? (
        <div className="row gx-xxl-5">
          {favouriteList.map((item: any) => (
            <ShortCard key={uniqueId()} itemPost={item}></ShortCard>
          ))}
        </div>
      ) : (
        <div className="text-center mt-20">
          <h4>Chưa có bài đăng yêu thích nào</h4>

          <h3>
            <i className="fa-regular fa-face-sad-tear"></i>
          </h3>
        </div>
      )}

      {/* <ReactPaginate
            breakLabel="..."
            nextLabel={<Image src={icon} alt="" className="ms-2" />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={pageCount}
            pageCount={pageCount}
            previousLabel={<Image src={icon} alt="" className="ms-2" />}
            renderOnZeroPageCount={null}
            className="pagination-one d-flex align-items-center style-none pt-20"
         /> */}
    </>
  );
};

export default FavouriteArea;
