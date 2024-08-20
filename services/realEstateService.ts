import axiosService from "../Common/api/AxiosServices";
import { GET_LIST_REAL_ESTATE } from "../Common/api/apiEndPoints";

class RealEstateService {
  getListRealEstate = (accountId: number | undefined) => {
    return axiosService({
      url: GET_LIST_REAL_ESTATE.url,
      method: GET_LIST_REAL_ESTATE.method,
      params: {
        maTK: accountId,
      },
    });
  };
}

export default RealEstateService;
