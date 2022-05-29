import { CSSProperties } from "react";
import { ControllerFieldState, ControllerRenderProps } from "react-hook-form";

export type InputProps = {
  style?: CSSProperties;
  placeholder?: string;
  fieldRenderProps: ControllerRenderProps;
  fieldState: ControllerFieldState;
};
