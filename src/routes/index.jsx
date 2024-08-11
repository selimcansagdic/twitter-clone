import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Explore from "../pages/explore";
import Notifications from "../pages/notifications";
import MainLayout from "../layouts/main";
import Messages from "../pages/messages";
import Lists from "../pages/lists";
import Bookmarks from "../pages/bookmarks";
import Premium from "../pages/premium";
import Profile from "../pages/profile";
import More from "../pages/more";
import Send from "../pages/send";

const routes = createBrowserRouter([
  {
		path: '/',
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <Home />
			},
			{
				path: 'explore',
				element: <Explore />
			},
			{
				path: 'notifications',
				element: <Notifications />
			},
			{
				path: 'messages',
				element: <Messages />
			},
			{
				path: "lists",
				element: <Lists />,
			},
			{
				path: "bookmarks",
				element: <Bookmarks />,
			},
			{
				path: "premium",
				element: <Premium />,
			},
			{
				pqth: "profile",
				element: <Profile />,
			},
			{
				path: "more",
				element: <More />,
			},
			{
				path: "send",
				element: <Send />,
			}
      ]
  }            
]);

export default routes;
