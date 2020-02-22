import React from 'react';
import { List } from 'semantic-ui-react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const TabPopular = () => {
  const history = useHistory();

  const onClickToDetail = () => {
    history.push('/detail');
  };

  return (
    <SCcontainer>
      <List divided relaxed animated>
        <List.Item onClick={onClickToDetail}>
          <List.Content>
            <List.Header>ブラックストーリタイトル</List.Header>
            <List.Description>ヒドイイネ　999　コメント　8888</List.Description>
          </List.Content>
        </List.Item>
        <List.Item onClick={onClickToDetail}>
          <List.Content>
            <List.Header>ブラックストーリタイトル</List.Header>
            <List.Description>ヒドイイネ　999　コメント　8888</List.Description>
          </List.Content>
        </List.Item>
        <List.Item onClick={onClickToDetail}>
          <List.Content>
            <List.Header>ブラックストーリタイトル</List.Header>
            <List.Description>ヒドイイネ　999　コメント　8888</List.Description>
          </List.Content>
        </List.Item>
        <List.Item onClick={onClickToDetail}>
          <List.Content>
            <List.Header>ブラックストーリタイトル</List.Header>
            <List.Description>ヒドイイネ　999　コメント　8888</List.Description>
          </List.Content>
        </List.Item>
        <List.Item onClick={onClickToDetail}>
          <List.Content>
            <List.Header>ブラックストーリタイトル</List.Header>
            <List.Description>ヒドイイネ　999　コメント　8888</List.Description>
          </List.Content>
        </List.Item>
        <List.Item onClick={onClickToDetail}>
          <List.Content>
            <List.Header>ブラックストーリタイトル</List.Header>
            <List.Description>ヒドイイネ　999　コメント　8888</List.Description>
          </List.Content>
        </List.Item>
        <List.Item onClick={onClickToDetail}>
          <List.Content>
            <List.Header>ブラックストーリタイトル</List.Header>
            <List.Description>ヒドイイネ　999　コメント　8888</List.Description>
          </List.Content>
        </List.Item>
        <List.Item onClick={onClickToDetail}>
          <List.Content>
            <List.Header>ブラックストーリタイトル</List.Header>
            <List.Description>ヒドイイネ　999　コメント　8888</List.Description>
          </List.Content>
        </List.Item>
      </List>
    </SCcontainer>
  );
};

const SCcontainer = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export default TabPopular;
