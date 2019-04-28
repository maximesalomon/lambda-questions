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

const Correct = styled.span`
`

const questions = [
    {
        question: "What's the latest version of HTML?",
        options: ["HTML3", "HTML4", "HTML5", "HTML6"],
        answer: "HTML5",
    }
]


class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionNumber: 0,
            questionContent: "",
            options: [],
            answer: "",
            selectedOption: null,
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
    
    render() {
        return (
        <QuestionContainer id="questions">
            <h2 id="question">{this.state.questionContent}</h2>
            {
            this.state.options.map((option, i) => {
                return <Answers key={i}><Option type="checkbox" data-option={option}>{option}</Option></Answers>
            })
            }
            <p>Correct answers: <Correct>0 / 0</Correct></p>
            <br/>
            <p>{this.state.answer}</p>
        </QuestionContainer>
        );
    }
  }
  
  export default Question;
  