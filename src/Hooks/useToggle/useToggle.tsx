import { useState, useCallback } from "react";

function useToggle(initialState = false): [boolean, () => void] {
  const [state, setState] = useState(initialState);

  const toggle = useCallback(() => {
    setState((prev) => !prev);
  }, []);

  return [state, toggle];
}

export default useToggle;
