import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const onClickApi = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/sample`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>はりけ〜んぶらっくかんぱに〜</p>
        <button className="App-link" style={{ width: '200px', height: '80px' }} onClick={onClickApi}>
          <span style={{ fontSize: '1.4rem' }}>API実行</span>
        </button>
        <p style={{ color: 'red' }}>(※)↑押したら「localhost:8080/api/sample」にリクエスト投げるようにしているよ</p>
      </header>
    </div>
  );
};

export default App;
