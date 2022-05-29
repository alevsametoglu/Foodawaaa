import { InputProps } from "./model";

type Props = {} & InputProps;

const Input = (props: Props) => {
  return (
    <>
      <input
        className={!!props.fieldState.error ? "invalid" : ""}
        style={props.style}
        placeholder={props.placeholder}
        {...props.fieldRenderProps}
        type="text"
      />
      {}
    </>
  );
};

export default Input;
