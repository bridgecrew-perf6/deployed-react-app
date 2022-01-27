import React, { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import { CssBaseline } from "@mui/material";

const App: FC = ({ ...props }) => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
