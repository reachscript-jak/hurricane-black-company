import React from 'react';
import { Icon } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { COLOR_THEME } from '../../const';

const BackButton = () => {
  const history = useHistory();

  const onClickBack = () => history.goBack();

  return (
    <SClinkText onClick={onClickBack}>
      <Icon fitted name="arrow left" />
      戻る
    </SClinkText>
  );
};

const SClinkText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  color: #666;
  &:hover {
    color: ${COLOR_THEME};
  }
`;

export default BackButton;
