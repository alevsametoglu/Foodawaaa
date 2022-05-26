import { ReactNode } from "react";
import "./ActionButton.scss";

type Props = { text: string; icon?: ReactNode; horizontalPadding?: number };

const ActionButton = (props: Props) => {
  return (
    <button className="action-button" style={{ paddingLeft: props.horizontalPadding, paddingRight: props.horizontalPadding }}>
      {props.icon && <span style={{ marginRight: 10 }}> {props.icon} </span>}
      <span>{props.text}</span>
    </button>
  );
};

export default ActionButton;
