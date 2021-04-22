
import Dashboard from "components/corporate/Dashboard";
import Activity from "components/corporate/Activity";
import Options from "components/corporate/Payment/Options.js";
import Booking from "components/corporate/Booking/Booking.js";

//import Mains from "components/corporate/Dept/Mains.js";
import Main from "components/corporate/Dep/Main.js";
import approve from "components/corporate/approvers/approve";
import BudgetApps from "components/corporate/budget/BudgetApps";

import Setting from "components/corporate/Setting/Setting";
import HomePage from "components/Login/Login";
import Checkout from "components/corporate/Payment/CheckOut";
import Checkmpesa from "components/corporate/Payment/Mpesa/CheckMpesa";
import SimplePaper from "components/corporate/DepSetting/DeptSetting";

const dashboardRoutes = [
  
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-grid-45",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/activity",
    name: "Activity",
    icon: "nc-icon nc-notes",
    component: Activity,
    layout: "/admin",
  },
  {
    path: "/employees",
    name: "Manage",
    icon: "nc-icon nc-badge",
    component: Main,
    layout: "/admin",
  },
  // {
  //   path: "/department",
  //   name: "Departments",
  //   icon: "nc-icon nc-badge",
  //   component: Mains,
  //   layout: "/admin",
  // },
  {
    path: "/budget",
    name: "Budget",
    icon: "nc-icon nc-paper-2",
    component: BudgetApps,
    layout: "/admin",
  },
  {
    path: "/payment",
    name: "Payment",
    icon: "nc-icon nc-credit-card",
    component: Options,
    layout: "/admin",
  },
  {
    path: "/booking",
    name: "Visitor Booking",
    icon: "nc-icon nc-watch-time",
    component: Booking,
    layout: "/admin",
  },
  {
    path: "/approvers",
    name: "Approvers",
    icon: "nc-icon nc-circle-09",
    component: approve,
    layout: "/admin",
  },
  {
    path: "/departmentSetting",
    name: "Department Setting",
    icon: "nc-icon nc-alien-33",
    component: SimplePaper,
    layout: "/admin",
  },
  {
    path: "/setting",
    name: "Setting",
    icon: "nc-icon nc-settings-tool-66",
    component: Setting,
    layout: "/admin",
  },
  {
    path: "/login",
    component: HomePage,
    
  },
  {
    path: "/CheckOut",
    component: Checkout,
    layout: "/admin",
  },
  {
    path: "/CheckMpesa",
    component: Checkmpesa,
    layout: "/admin",
  },
  
  
];

export default dashboardRoutes;
