import React from "react";
import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/material";

const BottomProgressBar = (props) => {
  const { currentScore, scoreIfWrong, scoreIfCorrect } = props;

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between">
        <Typography>{`Score: ${currentScore}%`} </Typography>
        <Typography>{`Max Score: ${scoreIfCorrect}%`}</Typography>
      </Stack>
      <Box
        style={{
          width: "100%",
          height: "30px",
          border: "1px",
          borderRadius: "10px",
          borderStyle: "solid",
          display: "flex",
          overflow: "hidden",
        }}
      >
        <Box
          style={{
            width: `${scoreIfWrong}%`,
            height: "30px",
            backgroundColor: "#212121",
          }}
        ></Box>
        <Box
          style={{
            width: `${currentScore - scoreIfWrong}%`,
            height: "30px",
            backgroundColor: "#757575",
          }}
        ></Box>
        <Box
          style={{
            width: `${scoreIfCorrect - currentScore}%`,
            height: "30px",
            backgroundColor: "#e0e0e0",
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default BottomProgressBar;
