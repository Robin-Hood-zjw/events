import React from "react";
import { Button, Card, Modal } from "antd";
import { useState } from "react";

const TitleArea = () => {
  const onJoinEvent = () => {
    Modal.confirm({
      title: "Do you want to join this event?",
      okText: "Comfirm",
      onOk: () => {},
      onCancel: () => {},
    });
  };

  onRateEvent = () => {};

  return (
    <div>
      <Card>
        <section>
          <h5>{}</h5>
          <p>{}</p>
          <p>Host by {}</p>
        </section>

        <section>
          <Button type="primaty" onClick={onJoinEvent}>
            JOIN THIS EVENT
          </Button>

          <Button type="primaty" onClick={onRateEvent}>
            RATE THIS EVENT
          </Button>
        </section>
      </Card>
    </div>
  );
};

export default TitleArea;
