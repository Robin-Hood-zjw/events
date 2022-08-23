import React from "react";
import "antd/dist/antd.css";
import { Button, Form, Input, Modal } from "antd";

const LoginModalContent = (visibility) => (
  <Modal visible={visibility}>
    <Form>
      {/* username */}
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input placeholder="input with clear icon" allowClear />
      </Form.Item>

      {/* password */}
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      {/* create button */}
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  </Modal>
);

export default LoginModalContent;
