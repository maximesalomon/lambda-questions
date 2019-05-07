import React, { useState, useLayoutEffect } from 'react';
import Question from './components/Question';

const App = () => {
  const [tempName, setTempName] = useState("");
  const [name, setName] = useState("");
  const [week, setWeek] = useState(0);
  const [scoreW1, setScoreW1] = useState("X");
  const [scoreW2, setScoreW2] = useState("X");

  useLayoutEffect(() => {
    if(localStorage.name !== undefined) {
      setName(localStorage.name);
    }
    if(localStorage.scoreW1 !== undefined) {
      setScoreW1(localStorage.scoreW1);
    }
  });

  const changeTempName = (e) => {
    setTempName(e.target.value);
  }

  const addName = () => {
    setName(tempName);
    localStorage.setItem('name', tempName)
  }

  return (
    <main className="App">
      <h1>Lambda Questions</h1>
      {
        name === ""
        ? 
          <>
          <p>What's your first name?</p>
          <div>
            <input onChange={changeTempName} value={tempName} placeholder="Enter your name"/>
            <button onClick={addName}>Continue</button>
          </div>
          </>
        :
          week === 0 ?
            <>
            <br/>
            <h2>Hello {name}!</h2>
            <br/>
            <p>Select a week to test your skills</p>
            <div>
              <p>Score Week 1 = {scoreW1}</p>
              {
                localStorage.scoreW1 !== undefined ? <p/> : <button onClick={() => setWeek(1)}>Week 1</button>
              }
            </div>
            <div>
              <p>Score Week 2 = {scoreW2}</p>
              <button onClick={() => setWeek(2)}>Week 2</button>
            </div>
            </>
            : <Question week={week} setWeek={setWeek} setScoreW1={setScoreW1} />
      }
    </main>
  );
}

export default App;
