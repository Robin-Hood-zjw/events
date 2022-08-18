import { Button } from "antd";
import React, { useState } from "react";

import SignipModalContent from "./SignipModalContent";

const SignupButtonComponent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
    return <SignipModalContent visibility={isModalVisible} />;
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Button
      type="primary"
      onClick={() => showModal()}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      Login
    </Button>
  );
};

export default SignupButtonComponent;
