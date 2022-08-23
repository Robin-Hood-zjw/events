import React from "react";
import "antd/dist/antd.css";
import { Badge, Card } from "antd";

const HostArea = () => {
  return (
    <div>
      <Card title="Event Host">
        <Badge.Ribbon text="Host">
          <img />
          {}
        </Badge.Ribbon>
      </Card>
    </div>
  );
};

export default HostArea;
