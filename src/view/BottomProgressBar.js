import React from "react";
import { Box } from "@mui/material";
import { Stack } from "@mui/system";

const BottomProgressBar = (props) => {
  const { currentScore, scoreIfWrong, scoreIfCorrect } = props;

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          bottom: "50px",
          width: "98%",
        }}
      >
        <Stack direction="row" justifyContent="space-between">
          <p>{`Score: ${currentScore}%`} </p>
          <p>{`Max Score: ${scoreIfCorrect}%`}</p>
        </Stack>
      </Box>

      <Box
        borderRadius="10px"
        display="flex"
        position="absolute"
        bottom="10px"
        border={1}
        width="98%"
      >
        <Box
          display="flex"
          height="5px"
          width={`${scoreIfWrong}%`}
          bgcolor="#212121"
          p={2}
          sx={{ borderRadius: "10px 0px 0px 10px" }}
        ></Box>

        <Box
          display="flex"
          height="5px"
          left="blk"
          width={`${currentScore - scoreIfWrong}%`}
          bgcolor="#757575"
          p={2}
        ></Box>
        <Box
          display="flex"
          height="5px"
          left="gry"
          width={`${scoreIfCorrect - currentScore}%`}
          bgcolor="#e0e0e0"
          p={2}
        ></Box>
      </Box>
    </>
  );
};

export default BottomProgressBar;
