import React from "react";
import { Typography } from "@mui/material";
import TopProgressBar from "./view/TopProgressBar";
import BottomProgressBar from "./view/BottomProgressBar";
//import Box from "@mui/material/Box";

const App = () => {
  return (
    <div>
      <TopProgressBar />
      <Typography variant="h1">Hello world</Typography>
      <BottomProgressBar />
    </div>
  );
};

export default App;
