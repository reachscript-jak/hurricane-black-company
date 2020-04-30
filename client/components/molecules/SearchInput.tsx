import React, { useState } from 'react';
import { Button, Input, Icon } from 'semantic-ui-react';
import styled from 'styled-components';

type Props = {
  onClickSetKeyword: (content: string) => void;
};

const SearchInput = (props: Props) => {
  const { onClickSetKeyword } = props;

  const [keyword, setKeyword] = useState('');

  return (
    <SCsearchContainer>
      <SCsearchInput
        placeholder="投稿を検索する"
        onChange={(_e: React.ChangeEvent<HTMLInputElement>, data: { value: string }) => setKeyword(data.value)}
      />
      <Button icon color="teal" onClick={() => onClickSetKeyword(keyword)}>
        <Icon name="search" />
      </Button>
    </SCsearchContainer>
  );
};

const SCsearchContainer = styled.div`
  display: flex;
`;

const SCsearchInput = styled(Input)`
  width: 100%;
`;

export default SearchInput;
