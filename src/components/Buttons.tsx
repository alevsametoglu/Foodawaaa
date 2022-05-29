import { Add, Edit } from "../icon";
import ActionButton from "./ActionButton";

type Props = { type?: "button" | "submit"; onClick?: () => void; onSubmit?: () => void; to?: string };

const UpdateButton = (props: Props) => <ActionButton text="Update" horizontalPadding={40} {...props} />;
const EditButton = (props: Props) => <ActionButton text="Modifier" icon={<Edit />} horizontalPadding={32} {...props} />;
const AddButton = (props: Props) => <ActionButton text="Add a new product" horizontalPadding={40} {...props} />;
const HeaderAddButton = (props: Props) => <ActionButton text="Ajouter un produit" icon={<Add />} horizontalPadding={13.5} {...props} />;

export { UpdateButton, EditButton, AddButton, HeaderAddButton };
