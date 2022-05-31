import { CSSProperties } from "react";
import { ReactComponent as Add } from "./add.svg";
import { ReactComponent as Edit } from "./edit.svg";
import { ReactComponent as Home } from "./home.svg";

type Props = { style?: CSSProperties; className?: string };
const Close = (props: Props) => <i {...props} className={`fa-solid fa-xmark ${props.className}`}></i>;
const Rotate = (props: Props) => <i {...props} className={`fa-solid fa-arrow-rotate-left ${props.className}`}></i>;
const Spinner = (props: Props) => <i {...props} className={`fas fa-spinner fa-spin ${props.className}`}></i>;

export { Add, Edit, Home, Close, Rotate, Spinner };
