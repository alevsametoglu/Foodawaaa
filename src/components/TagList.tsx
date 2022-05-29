import { Close } from "../icon";
import "./TagList.scss";
type Props = { value: string[]; onChange?: (value: string[]) => void; deletable?: boolean };

const hslColorCodes = [164, 226, 400, 200, 342, 540];

const TagList = (props: Props) => {
  const handleTagRemove = (tag: string) => {
    const newTagList = props.value.filter((x) => x !== tag);
    props.onChange && props.onChange(newTagList);
  };

  return (
    <div className="tag-list">
      {props.value.map((tag, i) => (
        <div
          key={i}
          className="tag"
          style={{
            color: `hsla(${hslColorCodes[i % hslColorCodes.length]}, 79%, 55%, 1)`,
            backgroundColor: `hsla(${hslColorCodes[i % hslColorCodes.length]}, 100%, 95%, 1)`,
          }}
        >
          <span>{tag.charAt(0).toUpperCase() + tag.slice(1)}</span>{" "}
          {props.deletable && (
            <span style={{ cursor: "pointer" }} onClick={() => handleTagRemove(tag)}>
              <Close />
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default TagList;
