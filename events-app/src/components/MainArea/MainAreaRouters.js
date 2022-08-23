import { Route, Routes } from "react-router-dom";
import { Content } from "antd/lib/layout/layout";

import DefaultLayout from "../DefaultLayout/DefaultLayout";
import EventPage from "./EventPage/EventPage";
import CreateEventsPage from "./CreateEventsPage/CreateEventsPage";
import ProfilePage from "./ProfilePage/ProfilePage";

const MainAreaRouters = () => {
  return (
    <Content>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<EventPage />} />
          <Route path="create-events" element={<CreateEventsPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </Content>
  );
};

export default MainAreaRouters;
