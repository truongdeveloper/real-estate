import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Progress,
} from "reactstrap";

// interface IUpLoadProgess {
//   open: boolean;
//   setOpen: any;
// }

const UpLoadProgress = () => {
  const [progressValue, setProgressValue] = useState(0);

  // Function to toggle modal
  const toggleModal = () => {
    // setOpen(!open);
  };

  // Function to update progress value
  useEffect(() => {
    const interval = setInterval(() => {
      setProgressValue((prevValue) => {
        const newValue = prevValue + 10;
        return newValue <= 100 ? newValue : 100;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* <Button color="primary" onClick={toggleModal}>
        Open Modal
      </Button> */}
      <Modal isOpen={true} toggle={toggleModal} centered>
        <ModalHeader toggle={toggleModal}>Đang đăng bài</ModalHeader>
        <ModalBody>
          <Progress value={progressValue} />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>
            Hủy
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default UpLoadProgress;
