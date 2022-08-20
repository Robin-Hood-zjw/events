import React from "react";
import { Avatar, List, Rate, Space } from "antd";
import { MessageOutlined, LikeOutlined } from "@ant-design/icons";

const calcAverageRate = (data) =>
  data.map((info) => info.rating).reduce((total, rating) => total + rating, 0) /
  data.length;

const iconInfo = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const retrieveImg = (event) => {
  switch (event.type) {
    case "celebration":
      return (
        <img
          width={200}
          height={150}
          src="../../../public/images/celebration.jpeg"
          alt="celebration"
        />
      );
    case "movie":
      return (
        <img
          width={200}
          height={150}
          src="../../../public/images/movie.jpeg"
          alt="movie"
        />
      );
    case "ceremony":
      return (
        <img
          width={200}
          height={150}
          src="../../../public/images/ceremony.jpeg"
          alt="ceremony"
        />
      );
    case "landmark":
      return (
        <img
          width={200}
          height={150}
          src="../../../public/images/landmark.jpeg"
          alt="landmark"
        />
      );
    case "travel":
      return (
        <img
          width={200}
          height={150}
          src="../../../public/images/"
          alt="travel"
        />
      );
    default:
      return null;
  }
};

export const renderListItem = (item) => {
  return (
    <List.Item
      actions={[
        <Rate
          disabled
          allowHalf
          defaultValue={3}
          value={calcAverageRate(item.rate)}
        />,
        iconInfo(LikeOutlined, "200"),
        iconInfo(MessageOutlined, "300"),
      ]}
      extra={retrieveImg(item)}
    >
      <List.Item.Meta
        title={item.title}
        avatar={<Avatar src={item.avatar} />}
        description={item.description}
      />
    </List.Item>
  );
};
