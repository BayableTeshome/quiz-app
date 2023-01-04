import React, { createContext } from "react";

export const QuizContext = createContext();

class QuizContextProvider extends React.Component {
  state = {
    isLoggedIn: false,
  };

  changeQuizSatus = () => {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  };
  render() {
    return (
      <QuizContext.Provider
        value={{ ...this.state, changeQuizSatus: this.changeQuizSatus }}
      >
        {this.props.children}
      </QuizContext.Provider>
    );
  }
}

export default QuizContextProvider;
