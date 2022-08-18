import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Card, Col, Divider, Row, Table } from "antd";

import { dataSource, columns } from "./packages/Helper";

const ProfilePage = () => {
  return (
    <Row>
      <Col>
        <h1>My Profile</h1>
        <Card bordered={true}>
          <Avatar icon={<UserOutlined />} />
        </Card>
      </Col>

      <Col>
        <div>
          <h2>User Name</h2>
          <p>{}</p>
        </div>

        <div>
          <h2>Email Address</h2>
          <p>{}</p>
        </div>

        <Divider />
      </Col>
      <Col>
        <h2>My Events</h2>
        {/* <Table columns={columns()} dataSource={dataSource() ? data : []} /> */}
      </Col>
    </Row>
  );
};

export default ProfilePage;
