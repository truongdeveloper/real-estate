import axiosService from "../Common/api/AxiosServices";
import { GET_LIST_PAYMENT } from "../Common/api/apiEndPoints";

class PaymentServices {
  getListPaymentById = (accountId: number | undefined) => {
    return axiosService({
      url: GET_LIST_PAYMENT.url,
      method: GET_LIST_PAYMENT.method,
      params: {
        maTK: accountId,
      },
    });
  };
}
export default PaymentServices;
