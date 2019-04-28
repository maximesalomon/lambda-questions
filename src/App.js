import React from 'react';
import './App.css';

const questions = [
  {
    question: "What's the latest version of HTML?",
    options: ["HTML3", "HTML4", "HTML5", "HTML6"],
    answer: "HTML5"
  }
]

function App() {
  return (
    <main className="App">
      <h1 id="question">{questions[0].question}</h1>
      <li>{
        questions[0].options.forEach(option => {
          return <ul>{option}</ul>;
        })
      }
      </li>
    </main>
  );
}

export default App;
