import { useEffect } from "react";
import useFieldValue from "./useFieldValue";

export default ({ name, onChange }) => {
  const [value, prevValue] = useFieldValue(name);

  useEffect(() => {
    if (value !== prevValue) {
      onChange(value, prevValue);
    }
  }, [onChange, value, prevValue]);

  return null;
};
