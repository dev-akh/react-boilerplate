import { useState } from 'react';
import reactLogo from '../../assets/react.svg';
import './Start.css'

function Start() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <h1>React Boilerplate</h1> 
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count} 
        </button>
      </div>
      <div className="card">
        <a href='/posts'>
          Posts
        </a>
        <i className="text-danger">Currently online, wouldn't be avaliable!</i>
      </div>
    </div>
  );
}

export default Start;
