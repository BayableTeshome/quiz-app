import React from "react";
import { Typography } from "@mui/material";
import TopProgressBar from "./view/TopProgressBar";
import BottomProgressBar from "./view/BottomProgressBar";
//import Box from "@mui/material/Box";

const App = () => {
  return (
    <div>
      <TopProgressBar currentQuestion={25} />
      <Typography variant="h1">Hello world</Typography>
      <BottomProgressBar currentScore={75} />
    </div>
  );
};

export default App;
