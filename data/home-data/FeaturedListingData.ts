import typeListingRealEstate from "../../Components/real-estate-listing";
import { typeListRealEstate } from "../../Models/common";

interface DataType {
  id: number;
  page: string;
  tag: string;
  title: string;
  address: string;
  data_delay_time?: string;
  item_bg_img: string;
  property_info: {
    feature: string;
    total_feature: number;
  }[];
}
[];

const feature_listing_data: DataType[] = [
  {
    id: 1,
    page: "home_5",
    tag: "Rent",
    item_bg_img: "item-bg-1",
    title: "Blueberry villa.",
    address: "Mirpur 10, Stadium dhaka 1208",
    property_info: [
      { feature: "sqft", total_feature: 2137 },
      { feature: "bed", total_feature: 0o3 },
      { feature: "kitchen", total_feature: 0o1 },
      { feature: "bath", total_feature: 0o2 },
    ],
  },
  {
    id: 2,
    page: "home_5",
    tag: "Sell",
    item_bg_img: "item-bg-2",
    title: "Swimming Pool Villa",
    address: "127 green road, California, USA",
    data_delay_time: "0.1s",
    property_info: [
      { feature: "sqft", total_feature: 2137 },
      { feature: "bed", total_feature: 0o3 },
      { feature: "kitchen", total_feature: 0o1 },
      { feature: "bath", total_feature: 0o2 },
    ],
  },
  {
    id: 3,
    page: "home_5",
    tag: "Rent",
    item_bg_img: "item-bg-3",
    title: "Modern Duplex",
    address: "Twin tower, 32 street, Florida",
    data_delay_time: "0.2s",
    property_info: [
      { feature: "sqft", total_feature: 2137 },
      { feature: "bed", total_feature: 0o3 },
      { feature: "kitchen", total_feature: 0o1 },
      { feature: "bath", total_feature: 0o2 },
    ],
  },
];

const listingData: typeListRealEstate[] = [
  {
    id: 4,
    maBDS: 3,
    maNguoiDung: 1,
    tieuDe: "Hải Âu Đông Nam Vinhomes Ocean Park 2",
    noiDung: `
    - Thanh toán sớm chiết khấu 19,3%.
    - Thanh toán tiến độ chiết khấu 18%.
    - Ngoài ra có thể chọn phương thức miễn lãi 36 tháng, miễn lãi 24 tháng chiết khấu 8%.`,
    ngayDangBai: "2024-03-09T17:00:00.000+00:00",
    ngayHetHan: "2024-10-09T17:00:00.000+00:00",
    sdt: "0987654321",
    trangThai: 0,
    batDongSan: {
      id: 3,
      maLoaiBDS: 1,
      maNguoiThue: null,
      maViTri: 1,
      tenBDS: " Vinhomes Ocean Park 2",
      dienTich: 300,
      moTa: ` Bể bơi Pha Lê bốn mùa 2000m siêu VIP, bao gồm mái kính trong suốt, Bể bơi được chia làm hai phần: Bể bơi theo tiêu chuẩn olympic dành cho người lớn có diện tích 1000m, Bể bơi trẻ em rộng khoảng 120m và khu vực dành cho cảnh quan và chức năng phụ trợ rộng hơn 700m. Đặc biệt, nguyên vật liệu sử dụng tại Bể bơi đều đạt chuẩn Châu Âu và đều được nhập từ các thương hiệu lớn của các nước như Tây Ban Nha, Pháp, Đức, Anh,...
    
      * Căn góc biệt thự đơn lập một trong số căn Vip nhất dự án hiếm hoi trên thị trường.
      
      - Lô góc 2 mặt tiền. Diện tích 203m². Xây dựng 4 tầng.`,
      giaThue: 1000000,
      trangThai: 0,
      diaChi: "Khu Vinhome",
      kinhDo: 20.9512135,
      viDo: 105.982102,
      loaiBDS: {
        id: 1,
        tenLoaiBDS: "Căn hộ chung cư",
      },
      viTri: {
        id: 1,
        tinhTp: "Hưng Yên",
        quanHuyen: "Văn Giang",
        xaPhuong: "Nghĩa Trụ",
      },
      hinhAnhList: [
        {
          id: 1,
          maBDS: 3,
          url: "url",
        },
        {
          id: 2,
          maBDS: 3,
          url: "url2",
        },
        {
          id: 3,
          maBDS: 3,
          url: "url2",
        },
      ],
    },
  },
];

export default listingData;
