import React from "react";
import { Button, DatePicker, Form, Input, Modal, Select } from "antd";

const { TextArea } = Input;
const { Option } = Select;

const LoginModalContent = (visibility) => (
  <Modal visible={visibility}>
    <Form>
      {/* title */}
      <Form.Item
        label="Title"
        name="title"
        rules={[
          {
            required: true,
            message: "Please input your title!",
          },
        ]}
      >
        <Input placeholder="input with clear icon" allowClear />
      </Form.Item>

      {/* description */}
      <Form.Item
        label="Description"
        name="description"
        rules={[
          {
            required: true,
            message: "Please input your descriptions!",
          },
        ]}
      >
        <TextArea placeholder="textarea with clear icon" allowClear />
      </Form.Item>

      {/* category */}
      <Form.Item
        label="Category"
        name="category"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select a option and change input text above"
          allowClear
        >
          <Option value="culture">Culture</Option>
          <Option value="film">Film</Option>
          <Option value="food">Food</Option>
          <Option value="music">Music</Option>
          <Option value="travel">Travel</Option>
        </Select>
      </Form.Item>

      {/* city */}
      <Form.Item
        label="City"
        name="city"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select a option and change input text above"
          allowClear
        >
          <Option value=""></Option>
        </Select>
      </Form.Item>

      {/* venue */}
      <Form.Item
        label="Venue"
        name="venue"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select a option and change input text above"
          allowClear
        >
          <Option value=""></Option>
        </Select>
      </Form.Item>

      {/* date */}
      <Form.Item
        label="Date"
        name="date"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <DatePicker
          style={{
            width: "50%",
          }}
        />
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
