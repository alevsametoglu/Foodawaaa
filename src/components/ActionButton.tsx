import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "../icon";
import "./ActionButton.scss";

type Props = {
  type?: "button" | "submit";
  loading?: boolean;
  text: string;
  icon?: ReactNode;
  horizontalPadding?: number;
  onClick?: () => void;
  to?: string;
};

const ActionButton = (props: Props) => {
  const button = props.loading ? (
    <Spinner className="button-spinner" />
  ) : (
    <button
      type={props.type}
      className="action-button"
      onClick={props.onClick}
      style={{ paddingLeft: props.horizontalPadding, paddingRight: props.horizontalPadding }}
    >
      {props.icon && <span style={{ marginRight: 10 }}> {props.icon} </span>}
      <span>{props.text}</span>
    </button>
  );
  return !!props.to ? <Link to={props.to}>{button}</Link> : button;
};

export default ActionButton;
