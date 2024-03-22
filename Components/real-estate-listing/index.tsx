import { useRouter } from "next/router";
import FancyBanner from "../../Common/FancyBanner";
import ListingArea from "./ListingArea";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ListingRealEstate = () => {
  const router = useRouter();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { category, province, keyword } = router.query;
        const response = await axios.get(
          "http://localhost:8082/baidang-management/search",
          {
            params: {
              tenLoaiBDS: category || "",
              tinhTp: province || "",
              keyword: keyword || "",
            },
          }
        );
        setData(response.data);
      } catch (error) {
        toast(
          `Lỗi không gọi được
        ${error}`,
          {
            type: "error",
            delay: 1000,
          }
        );
      }
    };

    fetchData();
  }, [router.query]);

  return (
    <>
      <ListingArea style={false} ListingData={data} />
      <FancyBanner />
    </>
  );
};

export default ListingRealEstate;
