import React, { useEffect, useState } from 'react';
import { List, Icon, Dimmer, Loader } from 'semantic-ui-react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { Post } from '../../types/post';
import PostService from '../../repository/post';

type Props = {
  count: number;
  keyword: string;
};

const TabPopular = (props: Props) => {
  const { count, keyword } = props;
  const history = useHistory();

  const [data, setData] = useState();

  useEffect(() => {
    const postFunc = async () => {
      const res = await PostService.getPosts(count, '', keyword);
      setData(res.data.posts);
    };
    postFunc();
  }, [count, keyword]);

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

export default TabPopular;
