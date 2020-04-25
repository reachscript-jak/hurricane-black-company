import React from 'react';
import { Input } from 'semantic-ui-react';
import styled from 'styled-components';

type Props = {
  onChangeSetKeyword: (content: string) => void;
};

const SearchInput = (props: Props) => {
  const { onChangeSetKeyword } = props;

  return (
    <SCsearchContainer>
      <SCsearchInput
        placeholder="投稿を検索する"
        onChange={(_e: React.ChangeEvent<HTMLInputElement>, data: { value: string }) => onChangeSetKeyword(data.value)}
      />
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
