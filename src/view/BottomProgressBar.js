import React from "react";
import { Box, Typography } from "@mui/material";

import { useContext } from "react";
import { QuestionContext } from "../controller/questionContext";

const BottomProgressBar = () => {
  const {currentScore ,   worestScore ,  bestScore } = useContext(QuestionContext);

  return (
    <Box sx={{ width: '100%', mt: 2 }}>
       <Box display="flex" justifyContent="space-between" mb={1}>
        <Typography>{`Score: ${currentScore.toFixed(0)}%`}</Typography>
        <Typography>{`Max Score: ${bestScore.toFixed(0)}%`}</Typography>
      </Box>
     
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
            width: `${worestScore}%`,
            height: "30px",
            backgroundColor: "#212121",
          }}
        ></Box>
        <Box
          style={{
            width: `${currentScore - worestScore}%`,
            height: "30px",
            backgroundColor: "#757575",
          }}
        ></Box>
        <Box
          style={{
            width: `${bestScore - currentScore}%`,
            height: "30px",
            backgroundColor: "#e0e0e0",
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default BottomProgressBar;
