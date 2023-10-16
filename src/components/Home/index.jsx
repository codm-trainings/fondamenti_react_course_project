import React, { useState } from 'react';
import reactLogo from '../../assets/react.svg';
import StudentList from './StudentList';
import './App.css';

const students = [{
  name: 'Cosimo',
  color: 'blue',
},
{
  name: 'Carmine',
  color: 'yellow',
},
{
  name: 'Mattia',
  color: 'green',
},
];

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React? Si</h1>
      <div className="card">
        <button type="button" onClick={() => setCount((oldCounter) => oldCounter + 1)}>
          count is
          {' '}
          {count}
        </button>
        <p>
          Edit
          {' '}
          <code>src/App.jsx</code>
          {' '}
          and save to test HMR
        </p>
      </div>
      <div>
        <StudentList students={students} />
      </div>
    </>
  );
}

export default Home;
