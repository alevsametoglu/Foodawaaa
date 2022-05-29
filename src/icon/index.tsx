import { CSSProperties } from "react";
import { ReactComponent as Add } from "./add.svg";
import { ReactComponent as Edit } from "./edit.svg";
import { ReactComponent as Home } from "./home.svg";

type Props = { style?: CSSProperties };
const Close = ({ style }: Props) => <i style={style} className="fa-solid fa-xmark"></i>;

export { Add, Edit, Home, Close };
