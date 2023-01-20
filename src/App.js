import React, { useContext } from "react";
import TopProgressBar from "./view/TopProgressBar";
import BottomProgressBar from "./view/BottomProgressBar";
import { Question } from "./view";
import { Container, Stack } from "@mui/material";
import { QuestionContext } from "./controller/questionContext";

const App = () => {
  const { currentQuestion, correctAnswers, isCorrect, changeQuestion } =
    useContext(QuestionContext);
  const questionProgress =
    (currentQuestion.questionIndex / currentQuestion.totalQuestions) * 100;
  const currentScore = correctAnswers / currentQuestion.questionIndex;
  const scoreIfWrong = correctAnswers / currentQuestion.totalQuestions;
  const remainingQuestions =
    currentQuestion.totalQuestions - currentQuestion.questionIndex;
  const scoreIfCorrect =
    (correctAnswers + remainingQuestions) / currentQuestion.totalQuestions;

  return (
    <>
      <TopProgressBar currentQuestion={questionProgress} />
      <Container maxWidth={"md"}>
        <Stack
          direction="column"
          justifyContent="space-between"
          minHeight={"95vh"}
        >
          <Question question={currentQuestion} />
          <BottomProgressBar
            currentScore={currentScore}
            scoreIfWrong={scoreIfWrong}
            scoreIfCorrect={scoreIfCorrect}
          />
        </Stack>
      </Container>
    </>
  );
};

export default App;
