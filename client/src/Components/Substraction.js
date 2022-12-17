import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import axios from "axios";

const Substraction = () => {
  const [total, settotal] = useState();
  const [countervalue, setcountervalue] = useState();
  const [items, setItems] = useState();

  console.log(items, "item");

  window.addEventListener("storage", () => {
    setItems(JSON.parse(window.localStorage.getItem("key")));
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/counter/${"639d83f4d5746b11af108827"}`)
      .then((res) => res.data)
      .then((data) => data.newvalue)
      .then((data) => {
        settotal(4 - data.value);
        setcountervalue(data.value);
      })

      .catch((err) => {
        console.log(err);
      });
  }, [items]);
  return (
    <>
      <Grid
        item
        width="500px"
        height="100px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"
        border="2px solid black"
      >
        <Box
          position="absolute"
          top={0}
          width="100%"
          height="25%"
          borderBottom="2px solid black"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography fontWeight="bold" p={2}>
            Substraction
          </Typography>
        </Box>
        <Typography color="black">
          {4} <span>-</span> {countervalue}
        </Typography>
        <Box
          position="absolute"
          bottom={0}
          right={0}
          width="30%"
          height="50%"
          borderLeft="2px solid black"
          borderTop="2px solid black"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography>{total}</Typography>
        </Box>
      </Grid>
    </>
  );
};

export default Substraction;
