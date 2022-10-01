import React, { useState } from "react";
import { LinearProgress } from "@mui/material";
import Box from "@mui/material/Box";

const BottomProgressBar = () => {
  const [score] = useState(30);

  return (
    <Box sx={{ border: 1, borderColor: "primary.main", borderRadius: "16px" }}>
      <LinearProgress
        color="success"
        variant="determinate"
        value={score}
        sx={{ height: 20, borderRadius: "16px" }}
      ></LinearProgress>
    </Box>
  );
};

export default BottomProgressBar;
