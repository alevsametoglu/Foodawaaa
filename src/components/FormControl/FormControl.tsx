import "./FormControl.scss";
import { CSSProperties } from "react";
import Input from "./components/Input";
import PriceInput from "./components/PriceInput";
import TagInput from "./components/TagInput";
import TextArea from "./components/TextArea";
import { Control, Controller, UseControllerProps } from "react-hook-form";

type InputType = "input" | "price" | "tag" | "text-area";
type Props = {
  control: Control<any>;
  inputType: InputType;
  label?: string;
  name: string;
  placeholder?: string;
  style?: CSSProperties;
  inputStyle?: CSSProperties;
  rules?: UseControllerProps["rules"];
};

const FormControl = ({ inputType, label, name, style, inputStyle, placeholder, control, rules }: Props) => {
  let formInput;

  switch (inputType) {
    case "input":
      formInput = (
        <Controller
          control={control}
          name={name}
          rules={rules}
          render={({ field, fieldState, formState }) => {
            return <Input style={inputStyle} placeholder={placeholder} fieldRenderProps={field} fieldState={fieldState} />;
          }}
        />
      );
      break;

    case "price":
      formInput = (
        <Controller
          control={control}
          name={name}
          rules={rules}
          render={({ field, fieldState }) => (
            <PriceInput style={inputStyle} placeholder={placeholder} fieldRenderProps={field} fieldState={fieldState} />
          )}
        />
      );
      break;

    case "text-area":
      formInput = (
        <Controller
          control={control}
          name={name}
          rules={rules}
          render={({ field, fieldState }) => (
            <TextArea style={inputStyle} placeholder={placeholder} fieldRenderProps={field} fieldState={fieldState} />
          )}
        />
      );
      break;

    case "tag":
      formInput = (
        <Controller
          control={control}
          name={name}
          rules={rules}
          render={({ field, fieldState }) => (
            <TagInput style={inputStyle} placeholder={placeholder} fieldRenderProps={field} fieldState={fieldState} />
          )}
        />
      );
      break;

    default:
      formInput = (
        <Controller
          control={control}
          name={name}
          rules={rules}
          render={({ field, fieldState }) => <Input style={inputStyle} placeholder={placeholder} fieldRenderProps={field} fieldState={fieldState} />}
        />
      );
      break;
  }

  return (
    <div className="form-control" style={{ ...style }}>
      <span className="label">{label || name}</span> {formInput}
    </div>
  );
};

export default FormControl;
