import { Route, Routes } from "react-router-dom";
import { Content } from "antd/lib/layout/layout";

import EventPage from "./EventPage/EventPage";
import CreateEventsPage from "./CreateEventsPage/CreateEventsPage";
import ProfilePage from "./ProfilePage/ProfilePage";

const MainAreaRouters = () => {
  return (
    <Content>
      <Routes>
        <Route path="/">
          <EventPage />
        </Route>
        <Route path="/create-events">
          <CreateEventsPage />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
      </Routes>
    </Content>
  );
};

export default MainAreaRouters;
