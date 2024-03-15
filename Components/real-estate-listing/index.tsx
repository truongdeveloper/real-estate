import { useRouter } from "next/router";
import FancyBanner from "../../Common/FancyBanner";
import ListingArea from "./ListingArea";
import { useEffect, useState } from "react";
import axios from "axios";

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
        console.log(response);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
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
