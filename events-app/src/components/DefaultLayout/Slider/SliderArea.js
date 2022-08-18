import React from "react";
import { Menu, Slider, Image } from "antd";

import NavigationButtons from "./NavigationButtons";

const SliderArea = (collapse) => {
  return (
    <Slider trigger={null} collapsible collapsed={collapse}>
      <Image width={200} src="../../../public/images/logo.png" />
      <Menu theme="dark" mode="inline" items={<NavigationButtons />}>
        <NavigationButtons />
      </Menu>
    </Slider>
  );
};

export default SliderArea;
