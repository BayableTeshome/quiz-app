import React from "react";
import { LinearProgress } from "@mui/material";
import Box from "@mui/material/Box";

//const normalise =(value)=>((value-MIN)*100)/(MAX-MIN)};

const TopProgressBar = (props) => {
  const { currentQuestion } = props;

  return (
    <Box>
      <LinearProgress
        color="secondary" //color change
        variant="determinate"
        sx={{
          height: 15,
          borderRadius: "16px",
          bgcolor: "Background",
        }}
        value={currentQuestion}
      ></LinearProgress>
    </Box>
  );
};

export default TopProgressBar;
