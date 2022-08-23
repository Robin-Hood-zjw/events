import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import { Menu } from "antd";
import { Link } from "react-router-dom";

import styles from "./sider.module.scss";

const NavigationItems = [
  {
    key: "1",
    icon: <UserOutlined />,
    link: <Link to="/">Events</Link>,
  },
  {
    key: "2",
    icon: <VideoCameraOutlined />,
    link: <Link to="/create-events">Create Events</Link>,
  },
  {
    key: "3",
    icon: <UploadOutlined />,
    link: <Link to="/profile">Profile</Link>,
  },
];

const NavigationButtons = () => (
  <>
    <Menu.Item key="1" icon={NavigationItems[0].icon}>
      {NavigationItems[0].link}
    </Menu.Item>
    <Menu.Item key="2" icon={NavigationItems[1].icon}>
      {NavigationItems[1].link}
    </Menu.Item>
    <Menu.Item key="3" icon={NavigationItems[2].icon}>
      {NavigationItems[2].link}
    </Menu.Item>
  </>
);

export default NavigationButtons;
