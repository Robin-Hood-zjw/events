import { Col, Row } from "antd";
import React from "react";

import TitleArea from "./TitleArea/TitleArea";
import BodyArea from "./BodyArea/BodyArea";
import HostArea from "./HostArea/HostArea";

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
