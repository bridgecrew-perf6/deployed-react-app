import { Box, Typography } from "@mui/material";
import React, { FC } from "react";

export const Homepage: FC = ({ ...props }) => {
  return (
    <Box
      sx={{
        background: "-webkit-linear-gradient(top left, #D1DABE, #C128FE)",
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
