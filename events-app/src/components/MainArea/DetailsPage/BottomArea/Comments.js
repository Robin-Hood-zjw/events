import { List, Comment } from "antd";
import moment from "moment";
import React from "react";

const Comments = ({ data }) => {
  return (
    <div>
      <List
        dataSource={data}
        header={`${5} replies`}
        itemLayout="horizontal"
        renderItem={(item) => {
          <li>
            <Comment
              avatar={item.avatar}
              content={item.content}
              datetime={moment(ite.time).fromNow()}
            />
          </li>;
        }}
      />
    </div>
  );
};

export default Comments;
