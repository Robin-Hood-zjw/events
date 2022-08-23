import { Layout } from "antd";
import "antd/dist/antd.css";
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import HeaderArea from "./Header/HeaderArea";
import SliderArea from "./Sider/SiderArea";
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
