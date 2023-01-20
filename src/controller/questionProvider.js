// import questions from "./data-access/questions.json";
import { useEffect, useState } from "react";
import { QuestionContext } from "./questionContext";

export const QuestionProvider = (props) => {
  const [questionList, setQuestionList] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    setQuestionList(fetch("./data-access/questions.json")); // to be converted to .json
    setCurrentQuestion(
      updateQuestionContent(questionList[currentQuestionIndex])
    );
  }, []);

  useEffect(() => {
    setCurrentQuestion(
      updateQuestionContent(questionList[currentQuestionIndex])
    );
  }, [currentQuestionIndex, questionList]);

  const isCorrect = (id) => {
    const answer =
      currentQuestion.correct_answer === currentQuestion.choices[id]
        ? true
        : false;
    if (answer) {
      setCorrectAnswers(correctAnswers + 1);
    }
    return answer;
  };

  const changeQuestion = () => {
    questionList.length > currentQuestionIndex &&
      setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const updateQuestionContent = (question) => {
    const updatedQuestion = {
      ...question,
      questionIndex: currentQuestionIndex,
      totalQuestions: questionList.length,
      choices: [...question.incorrect_answers, question.correct_answer],
    };
    return updatedQuestion;
  };

  const { children } = props;
  return (
    <QuestionContext.Provider
      value={{ currentQuestion, correctAnswers, isCorrect, changeQuestion }}
    >
      {children}
    </QuestionContext.Provider>
  );
};
