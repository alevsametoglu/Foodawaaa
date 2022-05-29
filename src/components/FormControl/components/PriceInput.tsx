import { useState } from "react";
import { InputProps } from "./model";

type Props = {} & InputProps;
const PriceInput = (props: Props) => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState(props.fieldRenderProps.value || "");

  const handleOnBlur = (e: any) => {
    setFocused(false);
    props.fieldRenderProps.onBlur();
  };

  const handleOnChange = (e: any) => {
    const newValue = e.target.value === "" ? "" : Number(e.target.value);
    setValue(newValue);
    props.fieldRenderProps.onChange(newValue);
  };

  return (
    <input
      className={!!props.fieldState.error ? "invalid" : ""}
      style={props.style}
      placeholder={props.placeholder}
      onFocus={() => setFocused(true)}
      onBlur={handleOnBlur}
      value={focused ? value : (value || 0)?.toFixed(2)?.replace(".", ",") + ` €`}
      onChange={handleOnChange}
      name={props.fieldRenderProps.name}
      ref={props.fieldRenderProps.ref}
      type={focused ? "number" : "text"}
    />
  );
};

export default PriceInput;
