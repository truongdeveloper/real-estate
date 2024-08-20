import axiosService from "../Common/api/AxiosServices";
import { GET_FAVOURITE_LIST } from "../Common/api/apiEndPoints";

class FavouriteService {
  getListFavourite = (AccountId: number | undefined) => {
    return axiosService({
      url: GET_FAVOURITE_LIST.url,
      method: GET_FAVOURITE_LIST.method,
      params: {
        maTK: AccountId,
      },
    });
  };
}

export default FavouriteService;
