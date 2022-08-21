import { Button } from "antd";
import React, { useState } from "react";

import LoginModalContent from "./LoginModal";

const LoginButtonComponent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
    return <LoginModalContent visibility={isModalVisible} />;
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

export default LoginButtonComponent;
