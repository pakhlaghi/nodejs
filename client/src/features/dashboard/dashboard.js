import React from "react";
import { SnackbarProvider } from "notistack";
import DashboardSnackbar from "./DashboardSnackbar";

const Dashboard = props => {
  return (
    <SnackbarProvider maxSnack={3}>
      <DashboardSnackbar {...props} />
    </SnackbarProvider>
  );
};

export default Dashboard;
