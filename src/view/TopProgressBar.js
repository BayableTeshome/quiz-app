import React, { useState } from "react";
import { LinearProgress } from "@mui/material";
import Box from "@mui/material/Box";

//const normalise =(value)=>((value-MIN)*100)/(MAX-MIN)};

const TopProgressBar = () => {
  const [progress] = useState(70);

  return (
    <Box sx={{ border: 1, borderColor: "primary.main", borderRadius: "16px" }}>
      <LinearProgress
        color="secondary"
        variant="determinate"
        sx={{ height: 20, borderRadius: "16px" }}
        //value={normalise(props.value)}
        value={progress}
      ></LinearProgress>
    </Box>
  );
};

export default TopProgressBar;
