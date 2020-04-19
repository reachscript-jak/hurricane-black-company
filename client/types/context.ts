import { Dispatch, SetStateAction } from 'react';

export interface Loading {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export interface SearchKeyword {
  keyword: string;
  setKeyword: Dispatch<SetStateAction<string>>;
}
