import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import axios from "axios";

const Devider = () => {
  const [value, setvalue] = useState(1);

  const increasevevale = () => {
    setvalue((value) => value + 1);
  };
  const decreasevevale = () => {
    setvalue((value) => value - 1);
  };

  const updatevalue = (val) => {
    const data = {
      value: val,
    };
    axios
      .put(`http://localhost:5000/counter/${"639d83f4d5746b11af108827"}`, data)
      .then((res) => {
        localStorage.setItem("key", val);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    updatevalue(value);
    localStorage.setItem("key", value);
    window.dispatchEvent(new Event("storage"));
  }, [value]);

  return (
    <>
      <Grid
        item
        width="500px"
        height="150px"
        display="flex"
        flexDirection="column"
        border="2px solid black"
      >
        <Box
          width="100%"
          height="25%"
          borderBottom="2px solid black"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography fontWeight="bold" p={2}>
            Counter
          </Typography>
        </Box>
        <Box
          width="100%"
          height="75%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button
            startIcon={<RemoveIcon />}
            onClick={decreasevevale}
            variant="outlined"
          >
            DeCrease
          </Button>
          <Typography color="black">{value}</Typography>
          <Button
            startIcon={<AddIcon />}
            onClick={increasevevale}
            variant="outlined"
          >
            InCrease
          </Button>
        </Box>
      </Grid>
    </>
  );
};

export default Devider;
