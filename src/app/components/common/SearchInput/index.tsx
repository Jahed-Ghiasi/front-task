import { IoIosSearch } from "react-icons/io";
import "./styles.css";
import Icon from "../icon";
import { useCallback, useEffect, useState } from "react";

interface IProps {
  onSearch?: (value: string) => void;
  onClearSearch?: () => void;
  searchDelay?: number;
}

const SearchInput = ({
  onSearch,
  searchDelay = 1000,
  onClearSearch,
}: IProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    if (!searchTerm || !onSearch) {
      onClearSearch && onClearSearch();
      return;
    }

    const timeoutId = setTimeout(() => {
      onSearch(searchTerm);
    }, searchDelay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchTerm]);

  const handleSearchInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      onSearch && setSearchTerm(e.target.value),
    [onSearch]
  );

  return (
    <div className="searchbar">
      <Icon className="search-icon" children={<IoIosSearch />} />
      <input type="text" onChange={handleSearchInputChange} />
    </div>
  );
};

export default SearchInput;
