import React, { useContext } from 'react';
import { Button, Input, Icon } from 'semantic-ui-react';
import styled from 'styled-components';

import { LoadingContext } from '../../Router';

const SearchInput = () => {
  const { setLoading } = useContext(LoadingContext);
  const onClickSearch = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <SCsearchContainer>
      <SCsearchInput placeholder="投稿を検索する" />
      <Button icon color="teal" onClick={onClickSearch}>
        <Icon name="search" />
      </Button>
    </SCsearchContainer>
  );
};

export default SearchInput;

const SCsearchContainer = styled.div`
  display: flex;
`;

const SCsearchInput = styled(Input)`
  width: 100%;
`;
