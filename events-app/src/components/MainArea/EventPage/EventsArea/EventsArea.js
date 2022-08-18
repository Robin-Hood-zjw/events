import { List } from "antd";
import React, { useEffect } from "react";

import { renderListItem } from "./Helper";

const EventsArea = (date) => {
  useEffect(() => {}, [date]);

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
