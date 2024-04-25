import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Maps from "views/Map.js";
import Notifications from "views/Notifications.js";
import TableList from "views/Tables.js";
import Typography from "views/Typography.js";
import UpgradeToPro from "views/Upgrade.js";
import UserPage from "views/User.js";
import Users from "views/Users";
import UsersDeleted from "views/userDeleted";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/users",
    name: "Users",
    icon: "nc-icon nc-circle-10",
    component: <Users />,
    layout: "/admin",
  },{
    path: "/delete_users",
    name: "Deleted Users",
    icon: "nc-icon nc-circle-10",
    component: <UsersDeleted />,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-diamond",
    component: <Icons />,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "nc-icon nc-pin-3",
    component: <Maps />,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: <Notifications />,
    layout: "/admin",
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "nc-icon nc-single-02",
    component: <UserPage />,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Table List",
    icon: "nc-icon nc-tile-56",
    component: <TableList />,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "nc-icon nc-caps-small",
    component: <Typography />,
    layout: "/admin",
  },
  {
    pro: true,
    path: "/upgrade",
    name: "Upgrade to PRO",
    icon: "nc-icon nc-spaceship",
    component: <UpgradeToPro />,
    layout: "/admin",
  },
];
export default routes;
