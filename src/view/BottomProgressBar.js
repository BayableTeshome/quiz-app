import React from "react";
import { Box, Typography } from "@mui/material";

import { useContext } from "react";
import { QuestionContext } from "../controller/questionContext";

const BottomProgressBar = () => {
  const {questionList} = useContext(QuestionContext);
  const {currentQuestionIndex} = useContext(QuestionContext);
  const {correctAnswersSoFar} = useContext(QuestionContext);

  const remainingQuestions = questionList.length - (currentQuestionIndex+1);

  const currentScore = 100*(correctAnswersSoFar / (currentQuestionIndex+1)); // deno =???
  const worestScore = 100*(correctAnswersSoFar / questionList.length);
  const bestScore = 100*((correctAnswersSoFar + remainingQuestions) / questionList.length);

  return (
    <Box sx={{ width: '100%', mt: 2 }}>
       <Box display="flex" justifyContent="space-between" mb={1}>
        <Typography>{`Score: ${currentScore.toFixed(2)}%`}</Typography>
        <Typography>{`Max Score: ${bestScore.toFixed(2)}%`}</Typography>
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
