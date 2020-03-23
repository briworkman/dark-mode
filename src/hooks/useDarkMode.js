import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = (key, initialValue) => {
  const [values, setValues] = useLocalStorage(key, initialValue);

  const onChange = newValue => {
    setValues(newValue);
  };

  useEffect(() => {
    const body = window.document.body;
    return values
      ? body.classList.add("dark-mode")
      : body.classList.remove("dark-mode");
  }, [values]);

  return [values, setValues, onChange];
};
