import { InputProps } from "./model";

type Props = {} & InputProps;

const TextArea = (props: Props) => {
  return (
    <textarea
      className={!!props.fieldState.error ? "invalid" : ""}
      style={props.style}
      placeholder={props.placeholder}
      {...props.fieldRenderProps}
      rows={4}
    />
  );
};

export default TextArea;
