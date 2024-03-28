import Image from "next/image";
import Link from "next/link";

import deleteIcon from "@/assets/images/dashboard/icon/icon_22.svg";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

interface IDeleteModal {
  setIsOpen: (value: boolean) => void;
  isOpen: boolean;
  handleAcceptEvent?: any;
  args?: any;
}

const DeleteModal = (props: IDeleteModal) => {
  const { setIsOpen, isOpen, handleAcceptEvent, args } = props;
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Modal isOpen={isOpen} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Bạn chắn chắn muốn xóa?</ModalHeader>
        <ModalBody>
          <div className=" d-flex align-items-center">
            <Image src={deleteIcon} alt="" className="lazy-img m-auto" />
            <p>Tất cả dữ liệu sẽ bị xóa khỏi hệ thống.</p>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            className="btn-two"
            onClick={() => {
              handleAcceptEvent();
              toggle();
            }}
          >
            Đồng ý
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Thoát
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default DeleteModal;
