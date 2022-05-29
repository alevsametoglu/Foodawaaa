import { useRef, useState } from "react";
import { TagList } from "../..";
import { InputProps } from "./model";

type Props = {} & InputProps;
const TagInput = (props: Props) => {
  const inputRef = useRef<HTMLInputElement | null>();
  const [tags, setTags] = useState<string[]>(props.fieldRenderProps.value || []);

  const handleNewTag = (e: any) => {
    e.preventDefault();
    const tagList = [...tags, e.target.value];
    setTags(tagList);
    props.fieldRenderProps.onChange({ ...e, target: { ...e.target, value: tagList } });
    e.target.value = "";
  };

  const handleTagListChanged = (newTagList: string[]) => {
    setTags(newTagList);
    props.fieldRenderProps.onChange({ target: { value: newTagList } });
  };

  return (
    <div>
      <input
        ref={(r) => (inputRef.current = r)}
        style={{ width: "-webkit-fill-available", ...props.style, marginBottom: 8 }}
        onKeyDown={(e) => e.key === "Enter" && handleNewTag(e)}
        placeholder={props.placeholder}
        type="text"
      />
      <TagList value={tags} onChange={handleTagListChanged} deletable />
    </div>
  );
};

export default TagInput;
