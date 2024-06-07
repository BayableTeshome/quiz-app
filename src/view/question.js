import { Star } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";

export const Question = (props) => {
  const {
    category,
    type,
    difficulty,
    question,
    currentQuestion,
    totalQuestions,
    choices,
  } = props.question;

  const stars = Array(5).fill(0);

  const [nextButton, setNextButton] = useState(false);

  return (
    <Box>
      <Typography variant="h4" mt={"40px"} gutterBottom>
        Question {currentQuestion} of {totalQuestions}
      </Typography>
      <Typography color="#757575" gutterBottom>
        {decodeURIComponent(category)}
      </Typography>
      {stars.map((_, index) => {
        if (index === 0) {
          return <Star color="inherit" sx={{ color: "##212121" }} />;
        } else if (difficulty === "medium" && index <= 1) {
          return <Star color="inherit" sx={{ color: "##212121" }} />;
        } else if (difficulty === "hard" && index <= 2) {
          return <Star color="inherit" sx={{ color: "##212121" }} />;
        } else {
          return <Star color="inherit" sx={{ color: "#e0e0e0" }} />;
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
        {type === "multiple" &&
          choices.map((choice, index) => {
            return (
              <Grid item xs={5}>
                <Button
                  disabled={nextButton}
                  variant="outlined"
                  color="inherit"
                  sx={{ backgroundColor: "#e0e0e0", width: "100%" }}
                  onClick={() => setNextButton(true)}
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
            Correct!
          </Typography>
          <Button
            variant="outlined"
            color="inherit"
            sx={{ backgroundColor: "#e0e0e0" }}
            onClick={() => setNextButton(false)}
          >
            Next Question
          </Button>
        </Stack>
      )}
    </Box>
  );
};
