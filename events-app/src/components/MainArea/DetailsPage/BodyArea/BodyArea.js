import {
  CalendarOutlined,
  CompassOutlined,
  InfoOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import moment from "moment";
import React, { useState } from "react";

const BodyArea = () => {
  const [showMap, setShowMap] = useState(true);

  toggleMap = () => setShowMap(!showMap);

  showGoogleMap = () => {
    <GoogleMap></GoogleMap>;
  };

  return (
    <div>
      <section>
        <InfoOutlined />
        <div>
          <p>{}</p>
        </div>
      </section>

      <section>
        <div>
          <CalendarOutlined />
        </div>
        <div>{moment().format("YYYY-MM-DD")}</div>
      </section>

      <section>
        <div>
          <CompassOutlined />
        </div>
        <div>{}</div>
        <div>
          <Button type="primary" onClick={toggleMap}>
            {showMap ? "Hide Map" : "Show Map"}
          </Button>
        </div>
      </section>

      {/* Map Element */}
      {/* <section>{showMap &&  />}</section> */}

      <section>
        <div>
          <h5>Who's coming?</h5>
        </div>
        <div></div>
      </section>
    </div>
  );
};

export default BodyArea;
