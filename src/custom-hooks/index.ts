import { Dispatch, RefObject, SetStateAction, useEffect, useRef } from 'react';

export function useOutsideAlerter<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  setState: Dispatch<SetStateAction<boolean>>,
  state?: boolean
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {


    //   if (ref.current && (ref.current.role === 'button') ) {
    //     setState(!state);
    //   };
      if (ref.current && !ref.current.contains(event.target as Node) ) {
        setState(!state);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, setState, state]);
}

export function useOutsideAlerterBurger<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  setState: Dispatch<SetStateAction<boolean>>,
  state?: boolean
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {


      if (ref.current && (ref.current.role === 'button') ) {
        setState(!state);
      };
      if (ref.current && !ref.current.contains(event.target as Node) ) {
        setState(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, setState, state]);
}
