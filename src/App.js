import React from "react";
import TopProgressBar from "./view/TopProgressBar";
import BottomProgressBar from "./view/BottomProgressBar";

import { Question } from "./view/Question.js";
import { Container, Stack } from "@mui/material";


import { QuestionProvider } from "./controller/questionProvider.js";

const App = () => {

  return (
    <>
      <QuestionProvider>
        <TopProgressBar />
        <Container maxWidth={"md"}>
          <Stack
            direction="column"
            justifyContent="space-between"
            minHeight={"95vh"}
          >
            <Question  />
            
            <BottomProgressBar />
          </Stack>
        </Container>
      </QuestionProvider>
    </>
  );
};

export default App;
