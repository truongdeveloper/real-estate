import { tienNghi } from "../../Models/common";

const ammenities_data: string[] = [
  "Điện",
  "Nước",
  "Wifi",
  "Chỗ đậu xe",
  "Bảo vệ",
];

const CommonAmenities = ({ item }: { item: tienNghi }) => {
  const amenities = Object.entries(item)
    .filter(([key, value]) => value === 1) // Lọc các cặp key-value với value là 1 (true)
    .map(([key, value]) => key); // Chỉ lấy key của các cặp key-value đã lọc

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
          <li key={i}>{amenity}</li>
        ))}
      </ul>
    </>
  );
};

export default CommonAmenities;
