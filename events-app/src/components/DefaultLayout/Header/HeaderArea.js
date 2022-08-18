import React from "react";
import { Header } from "antd/lib/layout/layout";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

import styles from "./package/header.module.scss";
import LoginButton from "./package/LoginModal/LoginButton";
import SignupButton from "./package/SignupModal/SignupButton";

const HeaderArea = (collapse, toggle) => {
  const headerCollapse = React.createElement(
    collapse ? MenuUnfoldOutlined : MenuFoldOutlined,
    { className: {styles.header_toggle},onClick: () => toggle }
  );

  return (
    <Header className={styles.header}>
      <div>{headerCollapse}</div>
      <div className={styles.header_buttons}>
        <LoginButton className={styles.buttons} />
        <SignupButton className={styles.button} />
      </div>
    </Header>
  );
};

export default HeaderArea;
