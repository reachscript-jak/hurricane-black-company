import React from 'react';
import axios from 'axios';
import { Button } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
  const history = useHistory();

  const onClickApi = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/sample`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };
  const onClickToDetail = () => {
    history.push('/detail');
  };

  return (
    <SCcontainer>
      <p>はりけ〜んぶらっくかんぱに〜〜</p>
      <Button color="green" style={{ width: '200px', height: '80px' }} onClick={onClickApi}>
        <span style={{ fontSize: '1.4rem' }}>API実行</span>
      </Button>
      <p style={{ color: 'red' }}>(※)↑押たらリクエスト投げるようにしているよ</p>
      <Button color="teal" onClick={onClickToDetail}>
        詳細ページへ移動
      </Button>
    </SCcontainer>
  );
};

const SCcontainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Home;
