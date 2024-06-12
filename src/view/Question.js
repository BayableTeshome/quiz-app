import { Star } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";

import { useContext } from "react";

import { QuestionContext } from "../controller/questionContext.js";

export const Question = () => {
  const {
    currentQuestionDetail,
    handleCorrectAnswersSoFar,
    handleNextQuestion,
  } = useContext(QuestionContext);
  const {
    category,
    type,
    difficulty,
    question,
    questionIndex,
    totalQuestions,
    choices,
    correctAnswersSoFar,
  } = currentQuestionDetail;

  const [currentAnswer, setCurrentAnswer] = useState(null);

  const stars = Array(5).fill(0);

  const [nextButton, setNextButton] = useState(false);

  return (
    <Box>
      <Typography variant="h4" mt={"40px"} gutterBottom>
        Question {questionIndex + 1} of {totalQuestions}
      </Typography>
      <Typography color="#757575" gutterBottom>
        {decodeURIComponent(category)}
      </Typography>
      {stars.map((_, index) => {
        if (index === 0) {
          return (
            <Star key={index} color="inherit" sx={{ color: "##212121" }} />
          );
        } else if (difficulty === "medium" && index <= 1) {
          return (
            <Star key={index} color="inherit" sx={{ color: "##212121" }} />
          );
        } else if (difficulty === "hard" && index <= 2) {
          return (
            <Star key={index} color="inherit" sx={{ color: "##212121" }} />
          );
        } else {
          return <Star key={index} color="inherit" sx={{ color: "#e0e0e0" }} />;
        }
      })}
      <Typography variant="body1" mt={"40px"} gutterBottom>
        {decodeURIComponent(question)}
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        gap={4}
        mt={"40px"}
      >
        {(type === "multiple" || type === "boolean") &&
          choices.map((choice, index) => {
            return (
              <Grid item xs={5} key={index}>
                <Button
                  disabled={nextButton}
                  variant="outlined"
                  color="inherit"
                  sx={{ backgroundColor: "#e0e0e0", width: "100%" }}
                  onClick={() => {
                    setCurrentAnswer(handleCorrectAnswersSoFar(index));
                    setNextButton(true);
                  }}
                >
                  {decodeURIComponent(choice)}
                </Button>
              </Grid>
            );
          })}
      </Grid>
      {nextButton && (
        <Stack alignItems={"center"}>
          <Typography variant="h4" mt={"40px"} mb={"30px"}>
            {currentAnswer ? "Correct!" : "Sorry!"}
          </Typography>
          {questionIndex + 1 === totalQuestions ? (
            <Typography variant="h4" mt={"40px"} mb={"30px"}>
              {`Your result is ${correctAnswersSoFar} out of ${totalQuestions}`}
            </Typography>
          ) : (
            <Button
              variant="outlined"
              color="inherit"
              sx={{ backgroundColor: "#e0e0e0" }}
              onClick={() => {
                setNextButton(false);
                handleNextQuestion();
              }}
            >
              Next Question
            </Button>
          )}
        </Stack>
      )}
    </Box>
  );
};
