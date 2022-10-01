import React, { useState } from "react";
import { LinearProgress } from "@mui/material";
import Box from "@mui/material/Box";

const BottomProgressBar = (props) => {
//   const [score] = useState(30);
const {currentScore, scoreIfWrong,scoreIfCorrect}=props;

  return (
    <Box sx={{ border: 1, borderColor: "primary.main", borderRadius: "16px" }}>
      <LinearProgress
        color="success"
        variant="determinate"
        value={currentScore}
        sx={{ height: 20, borderRadius: "16px" }}
      ></LinearProgress>
    </Box>
  );
};

export default BottomProgressBar;
