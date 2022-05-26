import React from "react";
import { Add, Edit } from "../icon";
import ActionButton from "./ActionButton";

const UpdateButton = () => <ActionButton text="Update" horizontalPadding={40} />;
const EditButton = () => <ActionButton text="Modifier" icon={<Edit />} horizontalPadding={32} />;
const AddButton = () => <ActionButton text="Add a new product" horizontalPadding={40} />;
const HeaderAddButton = () => <ActionButton text="Ajouter un produit" icon={<Add />} horizontalPadding={13.5} />;

export { UpdateButton, EditButton, AddButton, HeaderAddButton };
