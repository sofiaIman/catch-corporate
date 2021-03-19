
import Dashboard from "components/corporate/Dashboard";
import Activity from "components/corporate/Activity";
import CheckOut from "components/corporate/Payment/CheckOut.js";
import Booking from "components/corporate/Booking/Booking.js";
import UserApps from "components/corporate/user/UserApps";
import DeptApps from "components/corporate/department/DeptApps";
import BudgetApps from "components/corporate/budget/BudgetApps";
import Settings from "components/corporate/settings/Settings";

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
    name: "Employees",
    icon: "nc-icon nc-circle-09",
    component: UserApps,
    layout: "/admin",
  },
  
  {
    path: "/department",
    name: "Departments",
    icon: "nc-icon nc-badge",
    component: DeptApps,
    layout: "/admin",
  },
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
    component: CheckOut,
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
    path: "/setting",
    name: "Settings",
    icon: "nc-icon nc-settings-tool-66",
    component: Settings,
    layout: "/admin",
  },
  
];

export default dashboardRoutes;
