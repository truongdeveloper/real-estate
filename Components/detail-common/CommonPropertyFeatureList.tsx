import { BatDongSan, typeListRealEstate } from "../../Models/common";
import property_feature_list from "../../data/inner-data/PropertyFeatureListData";

const CommonPropertyFeatureList = ({ item }: { item: BatDongSan }) => {
  return (
    <div className="accordion" id="accordionTwo">
      <div className="accordion-item">
        <h4 className="accordion-header">Các thông số của BĐS</h4>
        <div
          className={`accordion-collapse collapse show`}
          data-bs-parent="#accordionTwo"
        >
          <div className="accordion-body">
            <div className="feature-list-two">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td>
                        <strong>Tên BDS</strong>
                      </td>
                      <td>{item.tenBDS}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Loại BĐS</strong>
                      </td>
                      <td>{item.loaiBDS.tenLoaiBDS}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Diện tích</strong>
                      </td>
                      <td>{item.dienTich}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Giá thuê</strong>
                      </td>
                      <td>{item.giaThue}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Địa chỉ</strong>
                      </td>
                      <td>{item.diaChi}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Phòng ngủ</strong>
                      </td>
                      <td>{item.phongNgu}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Phòng tắm</strong>
                      </td>
                      <td>{item.phongTam}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Phòng bếp</strong>
                      </td>
                      <td>{item.phongBep}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Số tầng</strong>
                      </td>
                      <td>{item.soTang}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Năm xây dựng</strong>
                      </td>
                      <td>{item.namXayDung}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonPropertyFeatureList;
