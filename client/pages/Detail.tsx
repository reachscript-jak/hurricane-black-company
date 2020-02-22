import React from 'react';
import styled from 'styled-components';

const Detail = () => {
  return (
    <SCcontainer>
      <p>詳細ページです</p>
    </SCcontainer>
  );
};

const SCcontainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Detail;
