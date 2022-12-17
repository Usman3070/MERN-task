import { Grid } from "@mui/material";
import React from "react";
import Counter from "./Components/Counter";
import Devider from "./Components/Devider";
import Multiplier from "./Components/Multiplier";
import Substraction from "./Components/Substraction";

const Main = () => {
  return (
    <Grid
      container
      xs={12}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100%"
      gap={2}
    >
      <Multiplier />
      <Substraction />
      <Devider />
      <Counter />
    </Grid>
  );
};

export default Main;
