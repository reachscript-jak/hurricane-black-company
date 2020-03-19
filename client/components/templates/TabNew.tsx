import React, { useEffect, useState, useContext } from 'react';
import { List, Icon, Dimmer, Loader } from 'semantic-ui-react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { Post } from '../../types/post';
import PostService from '../../repository/post';
import { LoadingContext } from '../../Router';

type Props = {
  count: number;
};

const TabNew = (props: Props) => {
  const { count } = props;
  const history = useHistory();
  const { setLoading } = useContext(LoadingContext);

  const [data, setData] = useState();

  useEffect(() => {
    const postFunc = async () => {
      setLoading(true);
      const res = await PostService.getPosts(count, 'new');
      setData(res.data.posts);
      setLoading(false);
    };
    postFunc();
  }, [count, setLoading]);

  const onClickToDetail = (id: number) => {
    history.push(`/detail/${id}`);
  };

  return (
    <SCcontainer>
      {data ? (
        <List divided relaxed animated>
          {data.map((obj: Post) => {
            return (
              <List.Item key={obj.id} onClick={() => onClickToDetail(obj.id)}>
                <List.Content>
                  <List.Header as="h3">{obj.title}</List.Header>
                  <List.Description>
                    {obj.body.length > 50 ? `${obj.body.substr(0, 50)}...` : obj.body}
                  </List.Description>
                  <List.Description style={{ marginTop: '2px' }}>
                    <Icon name="thumbs down" color="grey" />
                    ヒドイイネ {obj.favorites_count}　<Icon name="comment" color="grey" />
                    コメント {obj.comments_count}
                  </List.Description>
                </List.Content>
              </List.Item>
            );
          })}
        </List>
      ) : (
        <SCdimmerContainer>
          <Dimmer active inverted>
            <Loader inverted></Loader>
          </Dimmer>
        </SCdimmerContainer>
      )}
    </SCcontainer>
  );
};

const SCcontainer = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const SCdimmerContainer = styled.div`
  height: 200px;
`;

export default TabNew;
