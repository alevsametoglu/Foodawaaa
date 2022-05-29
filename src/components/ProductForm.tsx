import "./ProductForm.scss";
import { useForm } from "react-hook-form";
import { AddButton, FormControl, UpdateButton } from ".";
import { Product } from "../models";
import { Add, Edit } from "../icon";

type Props = { product?: Product; onSubmit: (data: ProductFormType) => void };
export type ProductFormType = {
  name: string;
  price: number;
  image: string;
  description: string;
  tags: string[];
};

const ProductForm = ({ product, onSubmit }: Props) => {
  const { handleSubmit, control } = useForm<ProductFormType>({
    defaultValues: {
      description: product?.description,
      image: product?.image,
      name: product?.name,
      price: product?.price,
      tags: product?.tags,
    },
  });

  const formType = !!product ? "update" : "create";
  const button = formType === "create" ? <AddButton type="submit" /> : <UpdateButton type="submit" />;
  const title = formType === "create" ? "Add a new product" : "Edit product information";
  const icon = formType === "create" ? <Add style={{ width: 20, height: 20 }} /> : <Edit style={{ width: 20, height: 20 }} />;

  return (
    <div className="product-form">
      <div className="header">
        <span className="icon">{icon}</span>
        <div style={{ display: "inline-flex", flexDirection: "column", gap: 4 }}>
          <div className="title">{title}</div>
          <div>Lorem Ipsum.</div>
        </div>
      </div>
      <form style={{ display: "flex", flexDirection: "column", gap: 20 }} onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: "inline-flex", flexDirection: "row", gap: 20 }}>
          <FormControl
            control={control}
            name="name"
            inputType="input"
            label="Nom du produit"
            placeholder="Nom du produit"
            rules={{ required: true }}
            style={{ width: "66%" }}
          />
          <FormControl
            control={control}
            name="price"
            inputType="price"
            label="Prix"
            placeholder="0,00€"
            rules={{ required: true }}
            style={{ width: "33%" }}
          />
        </div>
        <FormControl
          control={control}
          name="description"
          inputType="text-area"
          placeholder="Enter the description of your product here."
          label="Description"
          rules={{ required: true }}
        />
        <FormControl control={control} name="image" inputType="input" placeholder="Paste URL" rules={{ required: true }} label="Image" />
        <FormControl control={control} name="tags" inputType="tag" placeholder="Write a tag and hit enter to add it." label="Tags" />
        <div className="footer">{button}</div>
      </form>
    </div>
  );
};

export default ProductForm;
