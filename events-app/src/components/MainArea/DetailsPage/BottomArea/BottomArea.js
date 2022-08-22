import React from "react";

import Comments from "./Comments";

const BottomArea = () => {
  return (
    <div>
      <Card title="Chat about this event">
        <div>
          <Comments />
        </div>
      </Card>
    </div>
  );
};

export default BottomArea;
