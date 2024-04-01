import { isEmpty } from "lodash";
import queryString from "query-string";
import axios from "axios";
import { toast } from "react-toastify";
import { DELETE, GET, OPTIONS, POST } from "../../Constants";

type Methods = "head" | "options" | "put" | "post" | "patch" | "delete" | "get";
interface IAxios {
  url: string;
  method?: Methods;
  body?: any;
  headers?: any;
  params?: object;
}

const axiosService = (props: IAxios) => {
  const { url, method = GET, body, headers, params } = props;

  let uri = url;
  if (method == GET && !isEmpty(params)) {
    uri = `${url}?${queryString.stringify(params)}`;
  }

  let headersConfig = {
    accept: "application/json",
  };
  if (headers) {
    headersConfig = {
      ...headersConfig,
      ...headers,
    };
  }

  // Xử lý yêu cầu POST
  if (method === POST) {
    return axios
      .post(uri, body, { headers: headersConfig })
      .then((res: any) => {
        if (isEmpty(res.data)) {
          toast.error("Server đang quá tải");
        }
        return res.data;
      })
      .catch((err: any) => {
        toast.error("Server đang quá tải");
        return err;
      });
  }

  if (method == GET || DELETE || OPTIONS) {
    return axios[method](uri, headersConfig)
      .then((res: any) => {
        if (isEmpty(res.data)) {
          toast.error("Server đang quá tải");
        }
        return res.data;
      })
      .catch((err: any) => {
        toast.error("Server đang quá tải");
        return err;
      });
  }
};
export default axiosService;
