import React from "react";
import "antd/dist/antd.css";
import { Header } from "antd/lib/layout/layout";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

import styles from "./package/header.module.scss";
import LoginButton from "./package/LoginModal/LoginButton";
import SignupButton from "./package/SignupModal/SignupButton";
import setSiderBar from "../../../redux/SiderBar/ActionCreator";

const HeaderArea = (collapse, toggle) => {
  return (
    <Header className={styles.header}>
      <div>
        {React.createElement(collapse ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: `${styles.header_toggle}`,
          onClick: () => toggle,
        })}
      </div>

      <div className={styles.header_buttons}>
        <LoginButton className={styles.button} />
        <SignupButton className={styles.button} />
      </div>
    </Header>
  );
};

export default HeaderArea;
