import React from "react";
import Box from "@mui/material/Box";

const TopProgressBar = (props) => {
  const { currentQuestion } = props;

  return (
    <Box
      sx={{
        height: "15px",
        backgroundColor: "#a0a0a0",
        width: `${currentQuestion}%`,
      }}
    >
    </Box>
  );
};

export default TopProgressBar;
