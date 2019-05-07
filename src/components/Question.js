import React, { useState } from "react";
import styled from "styled-components";
import questions from "../data/questions";
import scores from "../data/questions";

const QuestionContainer = styled.div`
  width: 600px;
  height: 600px;
  margin: 0 auto;
  text-align: center;
`;

const Answers = styled.li`
  list-style-type: none;
`;
const Option = styled.button`
  width: 300px;
  height: 60px;
  margin: 10px;
`;

const Question = ({week, setWeek, setScoreW1}) => {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [questionContent, setQuestionContent] = useState(questions[week - 1].question);
  const [options, setOptions] = useState(questions[week - 1].options);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [answer, setAnswer] = useState(questions[week - 1].answer);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const selectedAnswer = e => {
    if (hasAnswered === false) {
      setHasAnswered(true);
      setQuestionsAnswered(questionsAnswered + 1);
      if(answer === e.target.value) {
        setCorrectAnswers(correctAnswers + 1);
      }
    }
  };

  const nextQuestion = () => {
    setQuestionContent(questions[questionsAnswered].question);
    setOptions(questions[questionsAnswered].options);
    setAnswer(questions[questionsAnswered].answer);
    setHasAnswered(false);
    setQuestionNumber(questionNumber + 1)
  };

  return (
    <QuestionContainer id="questions">
      <p>Question {questionNumber} / 10</p>
      <h2 id="question">{questionContent}</h2>
      {options.map((option, i) => {
        return (
          <Answers key={i}>
            <Option onClick={selectedAnswer} value={option}>
              {option}
            </Option>
          </Answers>
        );
      })}
      <br />
      <p>Answer: {hasAnswered ? answer : ""}</p>
      <br />
      <p>
        Score = {correctAnswers} / {questionsAnswered}
      </p>
      <br />
      {
        questionsAnswered === 10 ? (
          <>
          <p>👆This is your final score</p>
          <button onClick={() =>
            {
              setWeek(0);
              setScoreW1(correctAnswers);
              localStorage.setItem('scoreW1', correctAnswers);
              }}>Back to Dasboard</button>
          </>
        ) : hasAnswered ? (
          <button onClick={nextQuestion}>Next question</button>
        ) : (
          <p></p>
        )
      }
    </QuestionContainer>
  );
};

export default Question;
