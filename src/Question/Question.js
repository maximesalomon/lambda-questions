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

const questions = [
    {
        question: "What's the latest version of HTML?",
        options: ["HTML3", "HTML4", "HTML5", "HTML6"],
        answer: "HTML5",
    },
    {
        question: "What does CSS stand for?",
        options: ["Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets", "Cascading Style Sheets"],
        answer: "Cascading Style Sheets",
    },
    {
        question: "How do you insert a comment in a CSS file?",
        options: ["// This is a comment","/* This is a comment */", "// This is a comment //", "`This is a comment`"],
        answer: "/* This is a comment */",
    },
    {
        question: "What is the correct CSS syntax for making all the <p> elements bold?",
        options: ["p {font-weight:bold;}", "p style = font-size:bold", "p {text-size:bold;}", "p {text-weight:bold;}"],
        answer: "p {font-weight:bold;}",
    },
    {
        question: "How do you make each word in a text start with a capital letter?",
        options: ["text-style:captialize", "transform:capitalize", "text-transform:capitalize", "You can't do that with CSS"],
        answer: "text-transform:capitalize",
    },
    {
        question: "What's the name of the distributed version-control system software engineers use?",
        options: ["gps", "npm", "git", "atm"],
        answer: "git",
    },
    {
        question: "How do you enable Flexbox?",
        options: ["flex:display", "flex:start", "flex:block", "display:flex"],
        answer: "display:flex",
    },
    {
        question: "What is not one of the 4 box-model element?",
        options: ["content", "margin", "radius", "border"],
        answer: "git",
    },
    {
        question: "Which property is used to change the font of an element?",
        options: ["font-style", "font-group", "font", "font-family"],
        answer: "font-family",
    },
    {
        question: "How do you remove bullet points from lists?",
        options: ["list-style-type:none;", "list-style-type-bullet:none;", "list-style:no-bullet;", "list-style:none;"],
        answer: "list-style-type:none;",
    },
]

class Question extends React.Component {
    constructor() {
        super();
        this.state = {
            questionNumber: 1,
            questionsAnswered: 0,
            questionContent: "",
            options: [],
            answer: "",
            hasAnswered: false,
            correctAnswers: 0
        };
      }

    componentDidMount() {
        this.setState({
            questionContent: questions[this.state.questionsAnswered].question,
            options: questions[this.state.questionsAnswered].options,
            answer: questions[this.state.questionsAnswered].answer,
        })
    }

    answer = (e) => {
        this.setState({
            hasAnswered: true
        })
        const answer = this.state.answer;
        if (this.state.hasAnswered === false) {
            if (answer === e.target.value) {
                this.setState((state, props) => {
                    return { correctAnswers: state.correctAnswers + 1};
                  });
                this.setState((state, props) => {
                    return { questionsAnswered: state.questionsAnswered + 1};
                });
            } else this.setState((state, props) => {
                    return { questionsAnswered: state.questionsAnswered + 1};
                });
        }
    }
    nextQuestion = () => {
        this.setState({
            questionContent: questions[this.state.questionsAnswered].question,
            options: questions[this.state.questionsAnswered].options,
            answer: questions[this.state.questionsAnswered].answer,
            hasAnswered: false
        })
        this.setState((state, props) => {
            return { questionNumber: state.questionNumber + 1};
        });
    };
    
    render() {
        return (
        <QuestionContainer id="questions">
            <p>Question {this.state.questionNumber} / 10</p>
            <h2 id="question">{this.state.questionContent}</h2>
            {
            this.state.options.map((option, i) => {
                return <Answers key={i}><Option onClick={this.answer} value={option}>{option}</Option></Answers>
            })
            }
            <br/>
            <p>Answer: {this.state.hasAnswered ? this.state.answer : ""}</p>
            <br/>
            <p>Score = {this.state.correctAnswers} / {this.state.questionsAnswered}</p>
            <br/>
            {
                this.state.questionsAnswered === 10
                ? <p>👆This is your final score</p>
                :  this.state.hasAnswered
                    ? <button onClick={this.nextQuestion}>Next question</button>
                    : <p></p>
            }
        </QuestionContainer>
        );
    }
  }
  
  export default Question;
  