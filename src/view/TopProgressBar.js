import React from "react";
import { LinearProgress } from "@mui/material";
import Box from "@mui/material/Box";

//const normalise =(value)=>((value-MIN)*100)/(MAX-MIN)};

const TopProgressBar = (props) => {
  // const [progress,setProgress] = useState(70);
  const {currentQuestion}=props;

  return (
    <Box sx={{ border: 1, borderColor: "primary.main", borderRadius: "16px" }}>
      <LinearProgress
        color="secondary"
        variant="determinate"
        sx={{ height: 20, borderRadius: "16px" }}
        //value={normalise(props.value)}
        value={currentQuestion}
      ></LinearProgress>
    </Box>
  );
};

export default TopProgressBar;
