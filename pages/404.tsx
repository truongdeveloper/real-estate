import Link from "next/link";
import Image from "next/image";

import titleShape from "@/assets/images/shape/title_shape_02.svg";
import errorImg from "@/assets/images/assets/ils_08.svg";

function NotFound(props: any) {
  const {} = props;

  return (
    <div className="error-section position-relative z-1 bg-pink">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-xl-6 col-lg-7 col-md-8 m-auto">
            <div className="title-one text-center mb-75 lg-mb-20 wow fadeInUp">
              <h2>
                <span>
                  Oops! <Image src={titleShape} alt="" className="lazy-img" />
                </span>
                Lạc rồi nè :))))
              </h2>
              <p className="fs-20 pb-45">
                Trang của bạn đang tìm không tồn tại hoặc đang được phát triển
              </p>
              <Link href="/" className="btn-five sm fw-normal text-uppercase">
                Trở về Trang chủ
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={errorImg}
        alt=""
        className="lazy-img w-100 position-absolute bottom-0 start-0 z-n1"
      />
    </div>
  );
}

export default NotFound;
