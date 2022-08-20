import { List } from "antd";
import React, { useEffect } from "react";

import { renderListItem } from "./Helper";
import { fetchEvents } from "../../../../redux/ActionCreators";

const EventsArea = (date) => {
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
