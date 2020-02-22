import React from 'react';
import axios from 'axios';

const App = () => {
  const onClickApi = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/sample`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };
  return (
    <div>
      <p>はりけ〜んぶらっくかんぱに〜〜</p>
      <button style={{ width: '200px', height: '80px' }} onClick={onClickApi}>
        <span style={{ fontSize: '1.4rem' }}>API実行</span>
      </button>
      <p style={{ color: 'red' }}>(※)↑押したらリクエスト投げるようにしているよ</p>
    </div>
  );
};

export default App;
