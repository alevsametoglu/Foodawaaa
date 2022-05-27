import "./SearchInput.scss";

type Props = {
  onSearch?: (value: string) => void;
  onChange?: (value: string) => void;
  debounce?: number;
};
let debounceTimeout: NodeJS.Timeout;
let lastSearchValue = "";

const SearchInput = ({ onChange, onSearch, debounce }: Props) => {
  const setDebounceTimeout = () => {
    debounceTimeout = setTimeout(() => {
      onChange && onChange(lastSearchValue);
    }, debounce);
  };

  const handleValueChange = (value: string) => {
    if (!debounce || !value) {
      onChange && onChange(value);
      return;
    }

    lastSearchValue = value;
    if (!!debounceTimeout) clearTimeout(debounceTimeout);
    setDebounceTimeout();
  };

  return (
    <div className="search-form">
      <i className="fas fa-search"></i>
      <input
        className="search-input"
        type="search"
        placeholder="Search a Product"
        onChange={(e) => handleValueChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSearch && onSearch(e.currentTarget.value)}
      />
    </div>
  );
};

export default SearchInput;
