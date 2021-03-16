
import Dashboard from "components/corporate/Dashboard";
import Activity from "components/corporate/Activity";
import Payment from "components/corporate/Payment.js";
import Booking from "components/corporate/Booking.js";
import UserApps from "components/corporate/user/UserApps";
import DeptApps from "components/corporate/department/DeptApps";
import BudgetApps from "components/corporate/budget/BudgetApps";

const dashboardRoutes = [
  
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },

  {
    path: "/activity",
    name: "Activity",
    icon: "nc-icon nc-circle-09",
    component: Activity,
    layout: "/admin",
  },

  {
    path: "/employees",
    name: "Employees",
    icon: "nc-icon nc-notes",
    component: UserApps,
    layout: "/admin",
  },
  
  {
    path: "/department",
    name: "Departments",
    icon: "nc-icon nc-notes",
    component: DeptApps,
    layout: "/admin",
  },
  {
    path: "/budget",
    name: "budget",
    icon: "nc-icon nc-paper-2",
    component: BudgetApps,
    layout: "/admin",
  },
  {
    path: "/payment",
    name: "payment",
    icon: "nc-icon nc-atom",
    component: Payment,
    layout: "/admin",
  },
  {
    path: "/booking",
    name: "visitor booking",
    icon: "nc-icon nc-pin-3",
    component: Booking,
    layout: "/admin",
  },
  
];

export default dashboardRoutes;
