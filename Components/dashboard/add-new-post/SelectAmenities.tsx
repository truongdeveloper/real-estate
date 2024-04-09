const amenities: { name: string; text: string }[] = [
  {
    name: "dieuHoa",
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

const SelectAmenities = ({ register }: any) => {
  return (
    <div className="bg-white card-box border-20 mt-40">
      <h4 className="dash-title-three m0 pb-5">Chọn tiện ích</h4>
      <ul className="style-none d-flex flex-wrap filter-input">
        {amenities.map((amenity, index) => (
          <li key={index} className="fs-4">
            <input
              type="checkbox"
              name="Amenities"
              {...register(`tienNghi.${amenity.name}`)}
            />
            <label>{amenity.text}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectAmenities;
