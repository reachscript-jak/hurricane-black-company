import React, { ChangeEvent, useState, FormEvent, useContext } from 'react';
import { Container, Segment, Header, Divider, Grid, Form, Button, TextAreaProps } from 'semantic-ui-react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useAlert, types } from 'react-alert';

import { COLOR_THEME } from '../../const';
import PostService from '../../repository/post';
import { LoadingContext } from '../../Router';

const Post = () => {
  const history = useHistory();
  const reactAlert = useAlert();
  const { setLoading } = useContext(LoadingContext);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [name, setName] = useState('');

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
  const onChangeBody = (data: TextAreaProps) => {
    if (!data.value || typeof data.value === 'number') return;
    setBody(data.value);
  };
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);

  const onSubmitPost = async () => {
    setLoading(true);
    const res = await PostService.registPost(title, body, name);
    if (!res.error) {
      reactAlert.show('ブラックストーリーを投稿しました', {
        type: 'success',
      });
      setLoading(false);
      history.push('/');
    } else {
      setLoading(false);
      if (!res.errorMessages) return;
      reactAlert.show(res.errorMessages[0], {
        type: types.ERROR,
      });
    }
  };

  return (
    <SCcontainer>
      <Segment raised textAlign="center">
        <Header as="h2" style={{ color: COLOR_THEME }}>
          ブラックストーリー投稿
        </Header>
        <Divider />
        <Grid centered>
          <Grid.Column mobile={16} tablet={16} computer={12}>
            <Form onSubmit={onSubmitPost}>
              <Form.Input label="タイトル" onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeTitle(e)} />
              <Form.TextArea
                label="本文"
                rows={5}
                onChange={(_e: FormEvent<HTMLTextAreaElement>, data: TextAreaProps) => onChangeBody(data)}
              />
              <Form.Input label="ハンドルネーム" onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeName(e)} />
              <SCpostButtonArea>
                <Button
                  content="投稿する"
                  labelPosition="left"
                  icon="pencil"
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
