import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

function Layout() {
  return (
    <>
      <Header />
      <Box mt={2} mb={3}>
        <Outlet />
      </Box>
    </>
  );
}

export default Layout;
