import { useRouter } from "next/router";
import FancyBanner from "../../Common/FancyBanner";
import Breadcrumb from "../../Helper/Breadcrumb";
import AgencyDetailsArea from "./AgencyDetailsArea";
import { useEffect, useState } from "react";
import axiosService from "../../Common/api/AxiosServices";
import { GET_ACCOUNT_INFO, GET_USER_INFO } from "../../Common/api/apiEndPoints";
import { toast } from "react-toastify";
import { Account, User } from "../../Models/common";

const UserDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [dataUser, setDataUser] = useState<User>({} as User);
  const [dataAccount, setDataAccount] = useState<Account>({} as Account);
  useEffect(() => {
    axiosService({
      url: GET_USER_INFO.url,
      method: "get",
      params: {
        maTK: id,
      },
    })?.then((res) => {
      if (res.id == id) {
        setDataUser(res);
      } else {
        toast("Lấy thông tin người dùng Thất bại");
      }
    });
    axiosService({
      url: GET_ACCOUNT_INFO.url,
      method: "get",
      params: {
        maTK: id,
      },
    })?.then((res) => {
      if (res.id == id) {
        setDataAccount(res);
      } else {
        toast("Lấy thông tin tài khoản Thất bại");
      }
    });
  }, [router.query, id]);
  return (
    <>
      <Breadcrumb
        title="Thông tin người dùng"
        link="/user-profile"
        link_title="Người dùng"
        sub_title={dataUser.hoTen ? dataUser.hoTen : dataAccount.tenTK}
        style={false}
      />
      <AgencyDetailsArea dataAccount={dataAccount} dataUser={dataUser} />
      <FancyBanner />
    </>
  );
};

export default UserDetails;
