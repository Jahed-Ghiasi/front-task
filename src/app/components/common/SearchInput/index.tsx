import { IoIosSearch } from "react-icons/io";
import "./styles.css";

interface IProps {
  onChange?: (value: string) => void;
}

const SearchInput = ({ onChange }: IProps) => {
  return (
    <div className="searchbar">
      <span>
        <IoIosSearch />
      </span>
      <input
        type="text"
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
