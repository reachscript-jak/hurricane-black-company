import React from 'react';
import { List, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { Post } from '../../types/post';

type Props = {
  data: Array<Post>;
};

const TabPopular = (props: Props) => {
  const { data } = props;
  const history = useHistory();

  const onClickToDetail = () => {
    history.push('/detail');
  };

  return (
    <SCcontainer>
      {data ? (
        <List divided relaxed animated>
          {data.map((obj: Post) => {
            return (
              <List.Item key={obj.id} onClick={onClickToDetail}>
                <List.Content>
                  <List.Header as="h3">{obj.title}</List.Header>
                  <List.Description>
                    {obj.body.length > 50 ? `${obj.body.substr(0, 50)}...` : obj.body}
                  </List.Description>
                  <List.Description style={{ marginTop: '2px' }}>
                    <Icon name="thumbs down" color="grey" />
                    ヒドイイネ {obj.favorite_count}　<Icon name="comment" color="grey" />
                    コメント {obj.comment_count}
                  </List.Description>
                </List.Content>
              </List.Item>
            );
          })}
        </List>
      ) : null}
    </SCcontainer>
  );
};

const SCcontainer = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export default TabPopular;
