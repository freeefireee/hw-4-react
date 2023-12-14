
import React, { useState, useRef } from 'react';
import './style.css';

const App = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [results, setResults] = useState([]);
  const intervalRef = useRef();

  const startTimer = () => {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 100); 
    }, 100);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
  };

  const saveResult = () => {
    setResults((prevResults) => [...prevResults, time]);
  };

  return (
    <div className='App'>
      <div className='app'>
     <h1>Stopwatch</h1>
     <br />
      <div className='timer'><h3>{(time / 1000).toFixed(2)} seconds</h3></div>
      <br />
      <div className='buttons'>
        <button className="button-33" role="button" onClick={isRunning ? stopTimer : startTimer}>
          {isRunning ? 'Stop' : 'start'}
        </button>
        <button className="button-78" role="button" onClick={resetTimer}>Recovery</button>
        <button className="button-86" role="button" onClick={saveResult}>Save the result</button>
      </div>
      </div>
      <div className='results'>
        <h2>Results</h2>
      
          {results.map((result, index) => (
            <li key={index}>{(result / 1000).toFixed(2)} seconds</li>
          ))
}
        
      </div>
      </div>
  );
};

export default App;


