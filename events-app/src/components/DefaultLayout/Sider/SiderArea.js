import React from "react";
import { Menu, Slider, Image } from "antd";

import styles from "./package/sider.module.scss";
import NavigationButtons from "./package/NavigationButtons";

const SliderArea = (collapse) => {
  return (
    <Slider trigger={null} collapsible collapsed={collapse}>
      <Image className={styles.logo} src="../../../public/images/logo.png" />
      <Menu theme="dark" mode="inline" items={<NavigationButtons />}>
        <NavigationButtons />
      </Menu>
    </Slider>
  );
};

export default SliderArea;
