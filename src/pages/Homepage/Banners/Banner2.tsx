import { Box, Fade, Typography, Grid, Grow } from "@mui/material";
import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

const Banner2 = ({ ...props }) => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        position: "relative",
        top: 0,
        display: "flex",
        justifyContent: "center",
        // alignItems: "flex-end",
        padding: 5,
      }}
      component="div"
      maxWidth={"xl"}
      minHeight={"50vh"}
    >
      <Grid
        container
        spacing={2}
        columns={12}
        justifyContent="center"
        alignItems="center"
        maxWidth={"70%"}
      >
        <Grid item md={12} sm={12}>
          <VisibilitySensor
            onChange={(isVisible: boolean) => {
              setActive(isVisible);
            }}
          >
            <Grow timeout={1000} in={active}>
              <div>Who I Am</div>
            </Grow>
          </VisibilitySensor>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner2;
