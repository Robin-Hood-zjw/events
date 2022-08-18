import React, { useState } from "react";
import { Layout } from "antd";
import { BrowserRouter } from "react-router-dom";

import HeaderArea from "./Header/HeaderArea";
import SliderArea from "./Slider/SliderArea";
import MainAreaRouters from "../MainArea/MainAreaRouters";

const DefaultLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <BrowserRouter>
      <Layout>
        <SliderArea collapse={collapsed} />
        <Layout>
          <HeaderArea
            collapse={collapsed}
            toggle={() => setCollapsed(!collapsed)}
          />
          <MainAreaRouters />
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default DefaultLayout;
