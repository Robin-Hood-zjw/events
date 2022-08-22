import React from "react";
import { Button, Modal } from "antd";

const TitleArea = () => {
  onJoinEvent = () => {
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
    </div>
  );
};

export default TitleArea;
