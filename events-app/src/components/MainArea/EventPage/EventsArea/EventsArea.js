import React, { useEffect } from "react";
import { Avatar, List, Rate, Space } from "antd";
import { MessageOutlined, LikeOutlined } from "@ant-design/icons";

import { calcAverageRate, iconInfo, retrieveImg } from "./Helper";
import { fetchEvents } from "../../../../redux/ActionCreators";
import { useSelector } from "react-redux";

const renderListItem = (item) => {
  <List.Item
    actions={[
      <Rate
        disabled
        allowHalf
        defaultValue={3}
        value={calcAverageRate(item.rate)}
      />,
      iconInfo({ icon: LikeOutlined, text: "200" }),
      iconInfo({ icon: MessageOutlined, text: "300" }),
    ]}
    extra={retrieveImg(item)}
  >
    <List.Item.Meta
      title={item.title}
      avatar={<Avatar src={item.avatar} />}
      description={item.description}
    />
  </List.Item>;
};

const EventsArea = (date) => {
  const products = useSelector((state) => state);
  console.log(products);

  useEffect(() => {
    fetchEvents(date);
  }, [date]);

  return (
    <List
      size="large"
      itemLayout="vertical"
      // dataSource={data}
      pagination={{ pageSize: 3 }}
      footer={<>Let's meet up!</>}
      renderItem={(item) => renderListItem(item)}
    />
  );
};

export default EventsArea;
