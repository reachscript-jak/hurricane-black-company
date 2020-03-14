import { Dispatch, SetStateAction } from 'react';

export interface Loading {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}
