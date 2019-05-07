import React, { useState} from 'react';
import Question from './components/Question';

const App = () => {
  const [week, setWeek] = useState(0);
  return (
    <main className="App">
      <h1>Lambda Questions</h1>
      {
        week === 0 ?
        <>
        <h2>WeekSelector</h2>
        <button onClick={() => setWeek(1)}>Week 1</button>
        <button onClick={() => setWeek(2)}>Week 2</button>
        </>
        : <Question/>
      }
    </main>
  );
}

export default App;
