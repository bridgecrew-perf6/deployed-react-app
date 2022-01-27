import { Box, Typography } from "@mui/material";
import React, { FC } from "react";

export const Homepage: FC = ({ ...props }) => {
  return (
    <Box
      sx={{
        background: "-webkit-linear-gradient(top left, #3335CB, #B1ECB2)",
        position: "relative",
        top: 0,
      }}
      component="div"
      maxWidth={"xl"}
      minHeight={"100vh"}
    >
      <Typography variant="h2" component="h3">
        Welcome!
      </Typography>
    </Box>
  );
};
