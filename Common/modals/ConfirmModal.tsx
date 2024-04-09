import Image from "next/image";
import Link from "next/link";

import deleteIcon from "@/assets/images/dashboard/icon/icon_22.svg";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

interface IConfirmModal {
  setIsOpen: (value: boolean) => void;
  isOpen: boolean;
  title?: string;
  content?: string;
  icon?: any;
  handleAcceptEvent?: any;
  args?: any;
}

const ConfirmModal = (props: IConfirmModal) => {
  const { setIsOpen, isOpen, handleAcceptEvent, title, icon, content, args } =
    props;
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Modal isOpen={isOpen} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>
          <div className=" d-flex align-items-center gap-4">
            {icon ? (
              <Image src={icon} alt="" className="lazy-img m-auto" />
            ) : (
              <Image src={deleteIcon} alt="" className="lazy-img m-auto" />
            )}
            <p>{content}</p>
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

export default ConfirmModal;
