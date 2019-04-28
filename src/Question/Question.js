import React from 'react';
import styled from 'styled-components';

const QuestionContainer = styled.div `
    width: 600px;
    height: 600px;
    margin: 0 auto;
    text-align: center;
`

const Answers = styled.li `
  list-style-type: none;
`
const Option = styled.button `
    width: 300px;
    height: 60px;
    margin: 10px;
`

const ShowAnswer = styled.p `
    display: ${props => props.true ? "block" : "none"};
    color: green;
`

const questions = [
    {
        question: "What's the latest version of HTML?",
        options: ["HTML3", "HTML4", "HTML5", "HTML6"],
        answer: "HTML5",
    }
]

class Question extends React.Component {
    constructor() {
        super();
        this.state = {
            questionNumber: 0,
            questionContent: "",
            options: [],
            answer: "",
            hasAnswered: "false",
            correctAnswers: 0
        };
      }

    componentDidMount() {
        this.setState({
            questionContent: questions[this.state.questionNumber].question,
            options: questions[this.state.questionNumber].options,
            answer: questions[this.state.questionNumber].answer,
        })
    }

    answerIsRight = (e) => {
        this.setState({
            hasAnswered: "true"
        })
        const answer = this.state.answer;
        if (answer === e.target.value) {
            alert("true");
            this.setState((state, props) => {
                return {correctAnswers: state.correctAnswers + 1};
              });
        } else alert("false");   
    }
    
    render() {
        return (
        <QuestionContainer id="questions">
            <h2 id="question">{this.state.questionNumber + 1} - {this.state.questionContent}</h2>
            {
            this.state.options.map((option, i) => {
                return <Answers key={i}><Option onClick={this.answerIsRight} value={option}>{option}</Option></Answers>
            })
            }
            <p>Correct answers: {this.state.correctAnswers} / {this.state.questionNumber}</p>
            <br/>
            <ShowAnswer {...this.state.hasAnswered}>The right answer was {this.state.answer}</ShowAnswer>
        </QuestionContainer>
        );
    }
  }
  
  export default Question;
  