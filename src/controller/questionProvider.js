// import questions from "./data-access/questions.json";
import { useEffect, useState } from "react";
import { QuestionContext } from "./questionContext";
import { Category } from "@mui/icons-material";

import questions from "../data-access/questions.json";

export const QuestionProvider = ({children}) => {
  const [questionList, setQuestionList] = useState(questions);
  const [currentQuestionDetail, setCurrentQuestionDetail] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswersSoFar, setCorrectAnswersSoFar] = useState(0);
//currentQuestionIndex
  useEffect(() => {    
setCurrentQuestionDetail(
  updateCurrentQuestionDetail(currentQuestionIndex));
  }, []);

  useEffect(() => {
    if(questionList.length>0){
      setCurrentQuestionDetail(
        updateCurrentQuestionDetail(currentQuestionIndex)
      );
    }
  }, [currentQuestionIndex, questionList]);

  const handleCorrrectAnswersSoFar = (id) => {
    const answer =
      currentQuestionDetail.correct_answer === currentQuestionDetail.choices[id]
        ? true
        : false;
    if (answer) {
      setCorrectAnswersSoFar((prev)=>prev + 1);
    }
    return {correctAnswersSoFar, answer};
  };

const handleNextQuestion = ()=>{
  if (questionList.length > currentQuestionIndex) {
    setCurrentQuestionIndex((prev) => prev + 1);
  }
}
  // ???
  

  const updateCurrentQuestionDetail = (currentQuestionIndex) => {
    console.log(currentQuestionIndex);
    const updatedQuestion = {
      ...questionList[currentQuestionIndex],
      questionIndex: currentQuestionIndex,
      totalQuestions: questionList.length,
      choices: [...questionList[currentQuestionIndex].incorrect_answers, questionList[currentQuestionIndex].correct_answer], // Spread incorrect answers and add correct answer
    };

    return updatedQuestion;
  };

  return (
    <QuestionContext.Provider
      value={{ currentQuestionDetail, handleCorrrectAnswersSoFar,handleNextQuestion }}
    >
      {children}
    </QuestionContext.Provider>
  );
};
