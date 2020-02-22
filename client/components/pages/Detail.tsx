import React, { useState, ChangeEvent } from 'react';
import { Segment, Container, Header, Icon, Divider, Grid, Comment, Form, Button } from 'semantic-ui-react';
import styled from 'styled-components';

import { COLOR_THEME } from '../../const';

const Detail = () => {
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [isPushNonfavo, setIsPushNonfavo] = useState(false);

  const onClickNonfavo = () => {
    setIsPushNonfavo(true);
  };

  const onChangeComment = (e: any) => setComment(e.target.value);
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);

  return (
    <SCcontainer>
      <Segment raised textAlign="center">
        <Header as="h2" style={{ color: COLOR_THEME }}>
          ブラックストーリータイトル
        </Header>
        <SCnameArea>
          <div>
            <Icon name="user" color="grey" />
            <SCname>会社潰すマン</SCname>
          </div>
          <p>2020年2月22日 23:37</p>
        </SCnameArea>
        <Divider />
        <SCpostArea>
          <Grid centered>
            <Grid.Column mobile={16} tablet={16} computer={12}>
              <p>
                こんなことがありました！
                <br />
                <br />
                電車が止まっているので出社できないと伝えたら「タクシーを使ってきてくれ」と言われたああああああああああああああああああああああああああああ
              </p>
            </Grid.Column>
          </Grid>
        </SCpostArea>
        <Divider horizontal>
          <Header as="h4">
            <SCfavoArea>
              <SCicon>
                <Icon
                  name="thumbs down"
                  size="large"
                  circular
                  style={{ color: isPushNonfavo ? COLOR_THEME : 'grey' }}
                  onClick={onClickNonfavo}
                />
              </SCicon>
              <SCfavo>1000 ヒドイイネ！</SCfavo>
            </SCfavoArea>
          </Header>
        </Divider>

        <SCcommentArea>
          <Grid centered>
            <Grid.Column mobile={16} tablet={16} computer={16}>
              <Comment.Group>
                <Header as="h3" dividing>
                  コメント一覧
                </Header>
                <Comment>
                  <Comment.Content>
                    <SCcommentAuthorArea>
                      <Comment.Author>山田太郎ちゃん</Comment.Author>
                      <Comment.Metadata>2020年2月13日 18:28</Comment.Metadata>
                    </SCcommentAuthorArea>
                    <Comment.Text>
                      <SCcomment>すっごいひどいね！</SCcomment>
                    </Comment.Text>
                  </Comment.Content>
                </Comment>
                <Comment>
                  <Comment.Content>
                    <SCcommentAuthorArea>
                      <Comment.Author>小泉しんいちろう</Comment.Author>
                      <Comment.Metadata>2020年2月19日 1:27</Comment.Metadata>
                    </SCcommentAuthorArea>
                    <Comment.Text>
                      <SCcomment>
                        反省しているということは反省しているということです。。。。。。。。。。。。。。。。。。。。
                      </SCcomment>
                    </Comment.Text>
                  </Comment.Content>
                </Comment>
                <Comment>
                  <Comment.Content>
                    <SCcommentAuthorArea>
                      <Comment.Author>IKKO</Comment.Author>
                      <Comment.Metadata>2020年2月24日 14:55</Comment.Metadata>
                    </SCcommentAuthorArea>
                    <Comment.Text>
                      <SCcomment>まぼろし〜〜〜〜〜〜！！！</SCcomment>
                    </Comment.Text>
                  </Comment.Content>
                </Comment>
                <Comment>
                  <Comment.Content>
                    <SCcommentAuthorArea>
                      <Comment.Author>犬好き子</Comment.Author>
                      <Comment.Metadata>2020年2月29日 11:11</Comment.Metadata>
                    </SCcommentAuthorArea>
                    <Comment.Text>
                      <SCcomment>チワワよりダックスフンドよりアイリッシュセターだよね♡</SCcomment>
                    </Comment.Text>
                  </Comment.Content>
                </Comment>
                <br />
                <Form reply>
                  <Form.TextArea onChange={(e: any) => onChangeComment(e)} />
                  <Form.Field>
                    <input
                      placeholder="ハンドルネーム"
                      onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeName(e)}
                    />
                  </Form.Field>
                  <SCcommentButtonArea>
                    <Button
                      content="コメントする"
                      labelPosition="left"
                      icon="edit"
                      primary
                      disabled={comment.length === 0 || name.length === 0}
                    />
                  </SCcommentButtonArea>
                </Form>
              </Comment.Group>
            </Grid.Column>
          </Grid>
        </SCcommentArea>
      </Segment>
    </SCcontainer>
  );
};

const SCcontainer = styled(Container)`
  margin-top: 16px;
  margin-bottom: 16px;
`;

const SCnameArea = styled.div`
  display: flex;
  justify-content: center;
`;

const SCname = styled.span`
  margin-right: 28px;
  font-size: 14px;
`;

const SCpostArea = styled.div`
  display: flex;
  justify-content: center;
  text-align: left;
  padding-top: 16px;
  padding-bottom: 30px;
`;

const SCfavoArea = styled.div`
  display: flex;
  align-items: center;
`;

const SCicon = styled.span`
  &:hover {
    cursor: pointer;
  }
`;

const SCfavo = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #00796b;
  margin-left: 4px;
`;

const SCcommentArea = styled.div`
  display: flex;
  justify-content: center;
  text-align: left;
  padding-top: 24px;
`;

const SCcommentAuthorArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SCcomment = styled.span`
  color: #777;
`;

const SCcommentButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default Detail;
