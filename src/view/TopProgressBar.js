import React from "react";
import Box from "@mui/material/Box";

import { useContext } from "react";
import { QuestionContext } from "../controller/questionContext";

const TopProgressBar = () => {
  const { currentQuestionDetail } = useContext(QuestionContext);

  const questionsAnsweredSofar =
    ((currentQuestionDetail.questionIndex + 1) * 100) /
    currentQuestionDetail.totalQuestions;

  return (
    <Box
      sx={{
        height: "15px",
        backgroundColor: "#a0a0a0",
        width: `${questionsAnsweredSofar}%`,
      }}
    ></Box>
  );
};

export default TopProgressBar;
