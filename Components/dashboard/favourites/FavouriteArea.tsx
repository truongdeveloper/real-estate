"use client";

import ShortCard from "../../../Helper/ShortCard";

import { isEmpty, uniqueId } from "lodash";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import FavouriteService from "../../../services/favouriteService";

const FavouriteArea = () => {
  const { data } = useSession();
  const [favouriteList, setFavoriteList] = useState<any>([]);
  useEffect(() => {
    new FavouriteService().getListFavourite(data?.user.id)?.then((res: any) => {
      if (res) {
        setFavoriteList(res);
      }
    });
  }, []);

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
