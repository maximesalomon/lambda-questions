import React, { useState, useLayoutEffect } from 'react';
import Question from './components/Question';
import Name from './components/Name';
import SelectWeek from './components/SelectWeek';

import scores from "./data/scores";

const App = () => {
  const [name, setName] = useState("");
  const [week, setWeek] = useState(0);
  const [scoreW1, setScoreW1] = useState(scores.scoreW1);
  const [scoreW2, setScoreW2] = useState(scores.scoreW2);

  useLayoutEffect(() => {
    if(localStorage.name !== undefined) {
      setName(localStorage.name);
    }
    if(localStorage.scoreW1 !== undefined) {
      setScoreW1(localStorage.scoreW1);
    }
  });

  return (
    <main className="App">
      <h1>Lambda Questions</h1>
      {
        name === ""
        ? 
          <Name setName={setName}/>
        :
          week === 0
          ? <SelectWeek name={name} setWeek={setWeek} scoreW1={scoreW1} scoreW2={scoreW2}/>
          : <Question week={week} setWeek={setWeek} setScoreW1={setScoreW1} />
      }
    </main>
  );
}

export default App;
