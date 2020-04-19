import React, { useContext } from 'react';
import { Button, Input, Icon } from 'semantic-ui-react';
import styled from 'styled-components';

import { SearchKeywordContext } from '../../Router';

type Props = {
  count: number;
  orderBy: string;
  onClickSearchButton: (count: number, orderBy: string, keyword: string) => void;
};

const SearchInput = (props: Props) => {
  const { count, orderBy, onClickSearchButton } = props;
  const { keyword, setKeyword } = useContext(SearchKeywordContext);

  return (
    <SCsearchContainer>
      <SCsearchInput
        placeholder="投稿を検索する"
        onChange={(_e: React.ChangeEvent<HTMLInputElement>, data: { value: string }) => setKeyword(data.value)}
        defaultValue={keyword}
      />
      <Button icon color="teal" onClick={() => onClickSearchButton(count, orderBy, keyword)}>
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
