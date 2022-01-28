import { Box, Grid, Fade } from "@mui/material";
import React, { FC } from "react";
import { BasicCard } from "../Cards/Cards";

const Banner1 = ({ ...props }) => {
  return (
    <Box
      sx={{
        background: "-webkit-linear-gradient(top left, #3335CB, #B1ECB2)",
        position: "relative",
        top: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        padding: 5,
      }}
      component="div"
      maxWidth={"xl"}
      minHeight={"100vh"}
    >
      <Grid
        container
        spacing={2}
        columns={12}
        justifyContent="center"
        alignItems="flex-end"
        maxWidth={"70%"}
      >
        <Grid item md={8} sm={12}>
          <BasicCard />
        </Grid>
        <Grid item md={4} sm={12}>
          <BasicCard />
        </Grid>
        <Grid item md={4} sm={12}>
          <BasicCard />
        </Grid>
        <Grid item md={8} sm={12}>
          <BasicCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner1;
