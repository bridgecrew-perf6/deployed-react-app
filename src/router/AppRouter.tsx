import React, { FC } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Homepage } from "../pages/Homepage/HomePage";
import NavBar from "../components/NavBar/index";
import { Box } from "@mui/material";

export const AppRouter: FC = ({ ...props }) => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  );
};
