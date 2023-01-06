import React from "react";
import TopProgressBar from "./view/TopProgressBar";
import BottomProgressBar from "./view/BottomProgressBar";

import questions from "./data-access/questions.json";
import { Question } from "./view";
import { Container, Stack } from "@mui/material";
const App = () => {
  //==Should be implemented in context and provider===

  const fetchedQuestion = questions[1];
  const question = {
    ...fetchedQuestion,
    currentQuestion: 1,
    totalQuestions: fetchedQuestion.length,
    choices: [
      ...fetchedQuestion.incorrect_answers,
      fetchedQuestion.correct_answer,
    ],
  };
  //==================================================


  return (
    <>
      <TopProgressBar currentQuestion={25} />
      <Container maxWidth={"md"}>
        <Stack
          direction="column"
          justifyContent="space-between"
          minHeight={"95vh"}
        >
          <Question question={question} />
          <BottomProgressBar
            currentScore={50}
            scoreIfWrong={30}
            scoreIfCorrect={80}
          />
        </Stack>
      </Container>
    </>
  );
};

export default App;
