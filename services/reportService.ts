import axiosService from "../Common/api/AxiosServices";
import { POST_NEW_REPORT } from "../Common/api/apiEndPoints";

class ReportServices {
  postNewReport(
    accountId: number | undefined,
    postId: number | undefined,
    reason: string,
    email?: string,
    phoneNumber?: string
  ) {
    return axiosService({
      url: POST_NEW_REPORT.url,
      method: POST_NEW_REPORT.method,
      body: {
        maTK: accountId,
        maBaiDang: postId,
        lyDo: reason,
        email: email,
        sdt: phoneNumber,
      },
    });
  }
}

export default ReportServices;
