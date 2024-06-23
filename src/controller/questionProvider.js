// import questions from "./data-access/questions.json";
import { useEffect, useState } from "react";
import { QuestionContext } from "./questionContext";

import questions from "../data-access/questions.json";

export const QuestionProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [questionList, setQuestionList] = useState(questions);
  const [currentQuestionDetail, setCurrentQuestionDetail] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswersSoFar, setCorrectAnswersSoFar] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [worestScore,setWorestScore] = useState(0);
  const [bestScore,setBestScore] = useState(100);
  const [remaingQestions, setRemainingQuestions] =useState(20);

  //currentQuestionDetail
  useEffect(() => {
    if (questionList.length > 0) {
      setCurrentQuestionDetail(
        updateCurrentQuestionDetail(currentQuestionIndex)
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQuestionIndex, questionList, correctAnswersSoFar]);

  useEffect(() => {
    updateBottomProgressBar();
  }, [correctAnswersSoFar, currentQuestionIndex, questionList]);

  const handleCorrectAnswersSoFar = (id) => {
    const currentAnswer =
      currentQuestionDetail.correct_answer === currentQuestionDetail.choices[id]?true:false;
    if (currentAnswer) {
      setCorrectAnswersSoFar((prev) => prev + 1);
    }
    // updateBottomProgressBar();
    // console.log(currentScore);
    // console.log(worestScore);
    // console.log(bestScore);

    return currentAnswer;
  };


  const handleNextQuestion = () => {
    if (questionList.length > currentQuestionIndex) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
   
  };

  const updateCurrentQuestionDetail = (currentQuestionIndex) => {
    
    const updatedQuestion = {
      ...questionList[currentQuestionIndex],
      questionIndex: currentQuestionIndex,
      totalQuestions: questionList.length,
      correctAnswersSoFar,
      choices: [
        ...questionList[currentQuestionIndex].incorrect_answers,
        questionList[currentQuestionIndex].correct_answer,
      ],
    };

    return updatedQuestion;
  };

  const updateBottomProgressBar = ()=>{

  setRemainingQuestions(questionList.length - (currentQuestionIndex+1));
  setCurrentScore( 100*(correctAnswersSoFar / (currentQuestionIndex+1))); 
  setWorestScore(100*(correctAnswersSoFar / questionList.length));
  setBestScore(100*((correctAnswersSoFar + remaingQestions) / questionList.length));

  console.log(currentQuestionIndex);
  console.log(correctAnswersSoFar);
  console.log(remaingQestions);
  }

  return (
    <QuestionContext.Provider
      value={{
   currentScore ,
   worestScore ,
   bestScore ,

        currentQuestionDetail,
        handleCorrectAnswersSoFar,
        handleNextQuestion,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};
