import React, { useState, ChangeEvent, FormEvent, useEffect, useContext } from 'react';
import {
  Segment,
  Container,
  Header,
  Icon,
  Divider,
  Grid,
  Comment,
  Form,
  Button,
  Dimmer,
  Loader,
  TextAreaProps,
} from 'semantic-ui-react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import { useAlert, types } from 'react-alert';

import { COLOR_THEME } from '../../const';
import { Comment as CommentType } from '../../types/comment';
import DetailService from '../../repository/detail';
import favorite from '../../repository/favorite';
import Persist from '../../persist';
import { LoadingContext } from '../../Router';

const Detail = () => {
  const reactAlert = useAlert();
  const { setLoading } = useContext(LoadingContext);
  const { id } = useParams();

  const [data, setData] = useState();
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [isPushNonfavo, setIsPushNonfavo] = useState(Persist.get(id ? id : '') !== null);

  useEffect(() => {
    const detailFunc = async () => {
      if (!id) return;
      setLoading(true);
      const res = await DetailService.getDetail(parseInt(id));
      setData(res.data);
      setLoading(false);
    };
    detailFunc();
  }, [id, setLoading]);

  const onClickNonfavo = async () => {
    if (!id) return;
    if (isPushNonfavo) return;
    const res = await favorite.registFavorite(parseInt(id));
    if (!res.error) {
      Persist.set(id?.toString(), !isPushNonfavo);
      const favoriteCount = data.favoriteCount + 1;
      const newData = { ...data, favoriteCount };
      setData(newData);
      setIsPushNonfavo(true);
    } else {
      if (!res.errorMessages) return;
      reactAlert.show(res.errorMessages[0], {
        type: types.ERROR,
      });
    }
  };

  const onChangeComment = (data: TextAreaProps) => {
    if (!data.value || typeof data.value === 'number') return;
    setComment(data.value);
  };
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);

  const onSubmitComment = async () => {
    if (!id) return;
    setLoading(true);
    const res = await DetailService.registComment(parseInt(id), comment, name);
    if (!res.error) {
      window.location.reload();
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
        {data ? (
          <>
            <Header as="h2" style={{ color: COLOR_THEME }}>
              {data.post.title}
            </Header>
            <SCnameArea>
              <div>
                <Icon name="user" color="grey" />
                <SCname>{data.post.name}</SCname>
              </div>
              <p>{dayjs(data.post.created_at).format('YYYY年MM月DD日 HH:mm:ss')}</p>
            </SCnameArea>
            <Divider />
            <SCpostArea>
              <Grid centered container>
                <Grid.Column mobile={16} tablet={16} computer={10}>
                  <SCpostContent>{data.post.body}</SCpostContent>
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
                  <SCfavo>{data.favoriteCount} ヒドイイネ！</SCfavo>
                </SCfavoArea>
              </Header>
            </Divider>

            <SCcommentArea>
              <Grid container>
                <Grid.Column mobile={16} tablet={16} computer={16}>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Comment.Group style={{ width: '100%' }}>
                      <Header as="h3" dividing>
                        コメント一覧
                      </Header>
                      {data.comments.length > 0 ? (
                        data.comments.map((obj: CommentType) => (
                          <Comment key={obj.id}>
                            <Comment.Content>
                              <SCcommentAuthorArea>
                                <Comment.Author>{obj.name}</Comment.Author>
                                <Comment.Metadata>
                                  {dayjs(obj.created_at).format('YYYY年MM月DD日 HH:mm:ss')}
                                </Comment.Metadata>
                              </SCcommentAuthorArea>
                              <Comment.Text>
                                <SCcomment>{obj.body}</SCcomment>
                              </Comment.Text>
                            </Comment.Content>
                          </Comment>
                        ))
                      ) : (
                        <Comment>
                          <Comment.Content>
                            <SCcommentAuthorArea>
                              <Comment.Author>コメントはまだありません</Comment.Author>
                            </SCcommentAuthorArea>
                          </Comment.Content>
                        </Comment>
                      )}
                      <br />
                      <Form onSubmit={onSubmitComment}>
                        <Form.TextArea
                          onChange={(_e: FormEvent<HTMLTextAreaElement>, data: TextAreaProps) => onChangeComment(data)}
                        />
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
                  </div>
                </Grid.Column>
              </Grid>
            </SCcommentArea>
          </>
        ) : (
          <SCdimmerContainer>
            <Dimmer active inverted>
              <Loader inverted></Loader>
            </Dimmer>
          </SCdimmerContainer>
        )}
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

const SCpostContent = styled.p`
  white-space: pre-wrap;
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
  white-space: pre-wrap;
`;

const SCcommentButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SCdimmerContainer = styled.div`
  height: 200px;
`;

export default Detail;
