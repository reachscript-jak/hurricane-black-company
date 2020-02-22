import React, { ChangeEvent, useState } from 'react';
import { Container, Segment, Header, Divider, Grid, Form, Button } from 'semantic-ui-react';
import styled from 'styled-components';

import { COLOR_THEME } from '../const';

const Post = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [name, setName] = useState('');

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
  const onChangeBody = (e: any) => setBody(e.target.value);
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);

  return (
    <SCcontainer>
      <Segment raised textAlign="center">
        <Header as="h2" style={{ color: COLOR_THEME }}>
          ブラックストーリー投稿
        </Header>
        <Divider />
        <Grid centered>
          <Grid.Column mobile={16} tablet={16} computer={12}>
            <Form>
              <Form.Input label="タイトル" onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeTitle(e)} />
              <Form.TextArea label="本文" rows={5} onChange={(e: any) => onChangeBody(e)} />
              <Form.Input label="ハンドルネーム" onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeName(e)} />
              <SCpostButtonArea>
                <Button
                  content="コメントする"
                  labelPosition="left"
                  icon="edit"
                  primary
                  disabled={title.length === 0 || body.length === 0 || name.length === 0}
                />
              </SCpostButtonArea>
            </Form>
          </Grid.Column>
        </Grid>
      </Segment>
    </SCcontainer>
  );
};

const SCcontainer = styled(Container)`
  margin-top: 16px;
  margin-bottom: 16px;
`;

const SCpostButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default Post;
