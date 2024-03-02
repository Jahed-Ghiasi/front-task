import { IoIosSearch } from "react-icons/io";
import "./styles.css";
import Icon from "../icon";

interface IProps {
  onChange?: (value: string) => void;
}

const SearchInput = ({ onChange }: IProps) => {
  return (
    <div className="searchbar">
      <Icon className="search-icon" children={<IoIosSearch />} />
      <input
        type="text"
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
