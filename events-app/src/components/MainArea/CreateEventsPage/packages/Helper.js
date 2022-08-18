import React from "react";
import TextArea from "antd/lib/input/TextArea";
import { Button, Col, DatePicker, Form, Input, Row, Select } from "antd";

const { Option } = Select;

export const EventsForm = () => {
  return (
    <Row>
      <Col>
        <h1>Create New Event</h1>
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
            <Input allowClear />
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
            <TextArea allowClear />
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
            <Select allowClear>
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
            <Select allowClear>
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
            <Select allowClear>
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
            <Button type="primary" htmlType="create">
              Create
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};
