import { tienNghi } from "../../Models/common";

const amenities_text = [
  {
    name: "tuLanh",
    text: "Điều hòa",
  },
  {
    name: "mayGiat",
    text: "Máy giặt",
  },
  {
    name: "hoBoi",
    text: "Hồ bơi",
  },
  {
    name: "wifi",
    text: "Wifi",
  },
  {
    name: "baiDoXe",
    text: "Bãi đỗ xe",
  },
  {
    name: "thangMay",
    text: "Thang máy",
  },
  {
    name: "vuon",
    text: "Vườn",
  },
  {
    name: "gara",
    text: "Gara",
  },
];

const CommonAmenities = ({ item }: { item: tienNghi }) => {
  const amenities = Object.entries(item)
    .filter(([key, value]) => value === 1) // Lọc các cặp key-value với value là 1 (true)
    .map(([key, value]) => key); // Chỉ lấy key của các cặp key-value đã lọc

  const getAmenitiesText = (name: string) => {
    return amenities_text.find((item) => item.name === name)?.text;
  };

  return (
    <>
      <h4 className="mb-20">Tiện nghi</h4>
      <p className="fs-20 lh-lg pb-25">
        Homyland Riverside bán giá cực tốt vì là sản phẩm thực, giá trị thực,
        đáp ứng được nhu cầu của phần đông dân số ở Sài Gòn. Căn hộ đã hình
        thành, an toàn để mua.
      </p>
      <ul className="style-none d-flex flex-wrap justify-content-between list-style-two">
        {amenities.map((amenity, i) => (
          <li key={i}>{getAmenitiesText(amenity)}</li>
        ))}
      </ul>
    </>
  );
};

export default CommonAmenities;
