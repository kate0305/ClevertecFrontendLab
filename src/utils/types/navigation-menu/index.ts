import { Dispatch, SetStateAction } from 'react';

export type NavMenuProps = {
  setView: (view: string) => void;
};

export interface SearchInputProps {
  handleClick: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
};

export interface FilterInputProps {
  isHidden: boolean;
};
