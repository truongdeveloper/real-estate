const ammenities_data: string[] = [
  "Điện",
  "Nước",
  "Wifi",
  "Chỗ đậu xe",
  "Bảo vệ",
];

const CommonAmenities = () => {
  return (
    <>
      <h4 className="mb-20">Giới thiệu</h4>
      <p className="fs-20 lh-lg pb-25">
        Homyland Riverside bán giá cực tốt vì là sản phẩm thực, giá trị thực,
        đáp ứng được nhu cầu của phần đông dân số ở Sài Gòn. Căn hộ đã hình
        thành, an toàn để mua.
      </p>
      <ul className="style-none d-flex flex-wrap justify-content-between list-style-two">
        {ammenities_data.map((list, i) => (
          <li key={i}>{list}</li>
        ))}
      </ul>
    </>
  );
};

export default CommonAmenities;
