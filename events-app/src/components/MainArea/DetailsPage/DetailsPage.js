import { Col, Row } from "antd";
import React from "react";

import TitleArea from "./TitleArea/TitleArea";
import BodyArea from "./BodyArea/BodyArea";
import HostArea from "./HostArea/HostArea";
import BottomArea from "./BottomArea/BottomArea";

const DetailsPage = () => {
  return (
    <>
      <Row>
        <Col>
          <div>
            <TitleArea />
          </div>

          <div>
            <BodyArea />
          </div>

          <div>
            <BottomArea />
          </div>
        </Col>

        <Col>
          <div>
            <HostArea />
          </div>
        </Col>
      </Row>
    </>
  );
};
