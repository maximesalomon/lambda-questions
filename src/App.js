import React, { useState, useLayoutEffect } from 'react';
import Question from './components/Question';

const App = () => {
  const [tempName, setTempName] = useState("");
  const [name, setName] = useState("");
  const [week, setWeek] = useState(0);

  useLayoutEffect(() => {
    if(localStorage.name !== undefined) {
      setName(localStorage.name);
    } else return
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
            <h1>Lambda Questions</h1>
            <br/>
            <h2>Hello {name}!</h2>
            <br/>
            <p>Select a week to test your skills</p>
            <button onClick={() => setWeek(1)}>Week 1</button>
            <button onClick={() => setWeek(2)}>Week 2</button>
            </>
            : <Question week={week} setWeek={setWeek} />
      }
    </main>
  );
}

export default App;
