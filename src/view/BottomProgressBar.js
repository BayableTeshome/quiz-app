import React from "react";
import { Box } from "@mui/material";

import { useContext } from "react";
import { QuestionContext } from "../controller/questionContext";

const BottomProgressBar = () => {
  const { currentQuestionDetail, handleCorrrectAnswersSoFar } =
    useContext(QuestionContext);
  const { questionIndex, totalQuestions } = currentQuestionDetail;
  const { correctAnswersSoFar } = handleCorrrectAnswersSoFar;

  const remainingQuestions = totalQuestions - questionIndex;

  const currentScore = correctAnswersSoFar / questionIndex; // deno =???
  const worestScore = correctAnswersSoFar / totalQuestions;
  const bestScore = (correctAnswersSoFar + remainingQuestions) / totalQuestions;

  return (
    <Box>
      {/* <Stack direction="row" justifyContent="space-between">
        <Typography>{`Score: ${currentScore}%`} </Typography>
        <Typography>{`Max Score: ${worestScore}%`}</Typography>
      </Stack> */}
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
