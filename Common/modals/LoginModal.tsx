import Image from "next/image";
import Link from "next/link";
// import LoginForm from "@/components/forms/LoginForm";
import { useState } from "react";

import loginIcon_1 from "@/assets/images/icon/google.png";
import loginIcon_2 from "@/assets/images/icon/facebook.png";
import LoginForm from "../../Components/forms/LoginForm/LoginForm";
import RegisterForm from "../../Components/forms/RegisterForm/RegisterForm";
import { useRecoilState } from "recoil";
import { loginModalState } from "../../Recoil/atoms/modal";
import { Modal, ModalBody } from "reactstrap";

const tab_title: string[] = ["Đăng nhập", "Đăng ký"];

const LoginModal = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: any) => {
    setActiveTab(index);
  };

  const [showLoginModal, setShowLoginModal] = useRecoilState(loginModalState);

  const toggle = () => {
    setShowLoginModal(!showLoginModal);
  };

  return (
    <>
      <Modal
        isOpen={showLoginModal}
        toggle={toggle}
        fullscreen
        centered
        contentClassName="bg-transparent container"
      >
        <ModalBody>
          <div className="user-data-form modal-content ">
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={toggle}
            ></button>
            <div className="form-wrapper m-auto">
              <ul className="nav nav-tabs w-100">
                {tab_title.map((tab, index) => (
                  <li
                    key={index}
                    onClick={() => handleTabClick(index)}
                    className="nav-item"
                  >
                    <button
                      className={`nav-link ${
                        activeTab === index ? "active" : ""
                      }`}
                    >
                      {tab}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="tab-content mt-30">
                <div
                  className={`tab-pane fade ${
                    activeTab === 0 ? "show active" : ""
                  }`}
                >
                  <div className="text-center mb-20">
                    <h2>Chào mừng trở lại!</h2>
                    <p className="fs-20 color-dark">
                      Bạn chưa có tài khoản? <Link href="#">Đăng ký</Link>
                    </p>
                  </div>
                  <LoginForm />
                </div>

                <div
                  className={`tab-pane fade ${
                    activeTab === 1 ? "show active" : ""
                  }`}
                >
                  <div className="text-center mb-20">
                    <h2>Đăng ký</h2>
                    <p className="fs-20 color-dark">
                      Bạn đã có tài khoản? <Link href="#">Đăng nhập</Link>
                    </p>
                  </div>
                  <RegisterForm setIndexLogin={setActiveTab} />
                </div>
              </div>

              {/* <div className="d-flex align-items-center mt-30 mb-10">
                  <div className="line"></div>
                  <span className="pe-3 ps-3 fs-6">Hoặc</span>
                  <div className="line"></div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <Link
                      href="#"
                      className="social-use-btn d-flex align-items-center justify-content-center tran3s w-100 mt-10"
                    >
                      <Image src={loginIcon_1} alt="" />
                      <span className="ps-3">Signup with Google</span>
                    </Link>
                  </div>
                  <div className="col-sm-6">
                    <Link
                      href="#"
                      className="social-use-btn d-flex align-items-center justify-content-center tran3s w-100 mt-10"
                    >
                      <Image src={loginIcon_2} alt="" />
                      <span className="ps-3">Signup with Facebook</span>
                    </Link>
                  </div>
                </div> */}
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default LoginModal;
