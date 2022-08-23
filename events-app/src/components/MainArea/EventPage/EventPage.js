import moment from "moment";
import "antd/dist/antd.css";
import { Row, Col, Calendar } from "antd";
import React, { useEffect, useState } from "react";

import EventsArea from "./EventsArea/EventsArea";
// import PaginationArea from "./PaginationArea/PaginationArea";

const EventPage = () => {
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));

  useEffect(() => setDate(moment().format("YYYY-MM-DD")), [date]);

  return (
    <Row>
      <Col>
        <EventsArea date={date} />
      </Col>
      <Col>
        <Calendar
          fullscreen={false}
          onPanelChange={(date) => setDate(moment(date).format("YYYY-MM-DD"))}
        />
      </Col>
    </Row>
  );
};

export default EventPage;
