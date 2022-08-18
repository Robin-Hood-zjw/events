import React from "react";
import { Avatar, List, Rate, Space } from "antd";
import { MessageOutlined, LikeOutlined } from "@ant-design/icons";

// export const retrieveImg = (event) => {
//   switch (event.type) {
//     case "culture":
//         return <img width={} height={} src='../../../public/images/' alt="culture" />
//     case 'film':
//         return <img width={} height={} src='../../../public/images/' alt="film" />
//     case "food":
//         return <img width={} height={} src='../../../public/images/' alt="food" />
//     case 'music':
//         return <img width={} height={} src='../../../public/images/' alt="music" />
//     case 'travel':
//         return <img width={} height={} src='../../../public/images/' alt="travel" />
//     default:
//         return null;
//   }
// };

export const calcAverageRate = (data) =>
  data.map((info) => info.rating).reduce((total, rating) => total + rating, 0) /
  data.length;

const iconInfo = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

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
      extra={item.picture}
    >
      <List.Item.Meta
        title={item.title}
        avatar={<Avatar src={item.avatar} />}
        description={item.description}
      />
    </List.Item>
  );
};
