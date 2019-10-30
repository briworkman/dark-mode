import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (key, initialValue) => {
  const [values, setValues] = useLocalStorage(initialValue);

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
