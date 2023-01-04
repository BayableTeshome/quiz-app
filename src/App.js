import React from "react";
import { Typography } from "@mui/material";
import TopProgressBar from "./view/TopProgressBar";
import BottomProgressBar from "./view/BottomProgressBar";
//import Box from "@mui/material/Box";

const App = () => {
  return (
    <div>
      <TopProgressBar currentQuestion={50} />
      <Typography variant="h1">Hello world</Typography>
      <BottomProgressBar
        currentScore={57}
        scoreIfWrong={40}
        scoreIfCorrect={90}
      />
    </div>
  );
};

export default App;
