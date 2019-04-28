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
    }
]

class Question extends React.Component {
    constructor() {
        super();
        this.state = {
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
        alert("Next question")
    };
    
    render() {
        return (
        <QuestionContainer id="questions">
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
                this.state.hasAnswered
                ? <button onClick={this.nextQuestion}>Next question</button>
                : <p></p>
            }
        </QuestionContainer>
        );
    }
  }
  
  export default Question;
  