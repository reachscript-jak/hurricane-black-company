import React, { useEffect, useState } from 'react';
import { Button, Container, Segment, Tab, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import TabPopular from '../templates/TabPopular';
import TabNew from '../templates/TabNew';
import PostService from '../../repository/post';

const Home = () => {
  const history = useHistory();

  const [count, setCount] = useState(15);
  const [data, setData] = useState();

  useEffect(() => {
    const postFunc = async () => {
      const res = await PostService.getPosts(count, '');
      setData(res.data.posts);
    };
    postFunc();
  }, [count]);

  const panes = [
    {
      menuItem: '　　　人気順　　　',
      render: () => (
        <Tab.Pane key="tabPopular" attached={false} loading={!data}>
          <TabPopular data={data} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: '　　　新着順　　　',
      render: () => (
        <Tab.Pane key="tabNew" attached={false} loading={!data}>
          <TabNew data={data} />
        </Tab.Pane>
      ),
    },
  ];

  const onClickToPost = () => history.push('/post');
  const onClickCountButton = (num: number) => setCount(num);

  return (
    <>
      <SCbodyContainer>
        <Button animated="fade" fluid color="black" onClick={onClickToPost}>
          <Button.Content visible>
            <Icon name="pencil" />
            ブラックストーリーを投稿する
          </Button.Content>
          <Button.Content hidden>(ｏﾟДﾟ)＝◯)`3゜)∵</Button.Content>
        </Button>
        <Segment raised textAlign="center">
          <SCmenuContainer>
            <Tab menu={{ pointing: true, secondary: true, color: 'teal' }} panes={panes} />
          </SCmenuContainer>
          <SCbuttonContainer>
            <Button.Group size="tiny">
              <Button positive={count === 15} onClick={() => onClickCountButton(15)}>
                15件表示
              </Button>
              <Button.Or />
              <Button positive={count === 60} onClick={() => onClickCountButton(60)}>
                60件表示
              </Button>
              <Button.Or />
              <Button positive={count === 100} onClick={() => onClickCountButton(100)}>
                100件表示
              </Button>
            </Button.Group>
          </SCbuttonContainer>
        </Segment>
      </SCbodyContainer>
    </>
  );
};

const SCbodyContainer = styled(Container)`
  margin-top: 16px;
  margin-bottom: 16px;
`;

const SCmenuContainer = styled.div`
  .ui {
    justify-content: center;
    .active {
      background-color: '#00796B' !important;
    }
  }
`;

const SCbuttonContainer = styled.div`
  margin-top: 16px;
`;

export default Home;
