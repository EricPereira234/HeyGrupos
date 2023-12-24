import {createBrowserRouter} from "react-router-dom";

import Signin from "./pages/Signin";
import SiginUp from "./pages/SiginUp";
import Messages from "./pages/Messages";
import ChatRoom from "./pages/ChatRoom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ChatRoom/>,
  },
  {
    path: "/messages",
    element: <Messages/>
  },
  {
    path: "/login",
    element: <Signin/>
  },
  {
    path: "/siginup",
    element: <SiginUp/>
  }
]);

export default router;
