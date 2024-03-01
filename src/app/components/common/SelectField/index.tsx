import { useEffect, useRef, useState } from "react";
import "./styles.css";
import { MdCheckBox } from "react-icons/md";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import SearchInput from "../SearchInput";
import clsx from "clsx";

export interface ISelectFieldOption {
  id: number;
  label: string;
  image?: string;
}

interface IProps {
  label: string;
  options: ISelectFieldOption[];
  onChange?: (value: number[]) => void;
  value: number[];
  multiSelect?: boolean;
  searchable?: boolean;
}

const SelectField = ({
  onChange,
  options,
  value,
  multiSelect,
  label,
  searchable,
}: IProps) => {
  const [optionsData, setOptionsData] = useState<ISelectFieldOption[]>(options);
  const [isOptionsOpen, setIsOptionsOpen] = useState<boolean>(false);
  const [selectedIds, setSelectedIds] = useState<number[]>(value);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const inputRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    onChange && onChange(selectedIds);
  }, [selectedIds]);

  useEffect(() => {
    if (searchable) {
      if (!searchTerm) {
        setOptionsData(options);
        return;
      }
      const timeoutId = setTimeout(() => {
        setOptionsData(
          options.filter((item: ISelectFieldOption) => {
            if (item.label.toLowerCase().includes(searchTerm.toLowerCase())) {
              return item;
            }
          })
        );
      }, 1000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [searchTerm]);

  function handleSelection(id: number) {
    if (multiSelect) {
      selectedIds.includes(id)
        ? removeSelected(id)
        : setSelectedIds([...selectedIds, id]);
    } else {
      selectedIds.includes(id) ? clearSelecteds() : setSelectedIds([id]);
    }
  }

  function removeSelected(id: number) {
    setSelectedIds(selectedIds.filter((item: number) => item !== id));
  }

  function clearSelecteds() {
    setSelectedIds([]);
  }

  return (
    <div className="select">
      <div
        ref={inputRef}
        className="input"
        style={{
          justifyContent: isOptionsOpen
            ? !selectedIds.length
              ? "flex-end"
              : "space-between"
            : "space-between",
        }}
      >
        <span
          className={clsx(
            isOptionsOpen || selectedIds.length ? "select-label" : ""
          )}
        >
          {label}
        </span>
        {selectedIds.length ? (
          <div className="selected-options">
            {options
              .filter((option: ISelectFieldOption) =>
                selectedIds.includes(option.id)
              )
              .map((option: ISelectFieldOption) => {
                const { id, label, image } = option;
                return (
                  <div className="selected-option" key={id}>
                    <img src={image} alt={label} />
                    <span>{label}</span>
                    <span
                      className="remove-btn"
                      onClick={() => removeSelected(id)}
                    >
                      <IoClose />
                    </span>
                  </div>
                );
              })}
          </div>
        ) : null}
        <span
          className="options-box-toggler"
          onClick={() => setIsOptionsOpen(!isOptionsOpen)}
        >
          {isOptionsOpen ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
        </span>
      </div>
      {isOptionsOpen ? (
        <div
          className="options-box"
          style={{
            top: inputRef.current ? inputRef.current.clientHeight + 10 : 0,
          }}
        >
          {searchable ? (
            <SearchInput onChange={(value: string) => setSearchTerm(value)} />
          ) : null}
          <div className="options">
            {optionsData.map((option: ISelectFieldOption) => {
              const { id, label, image } = option;

              return (
                <div
                  key={id}
                  className="option"
                  onClick={() => handleSelection(id)}
                >
                  {selectedIds.includes(id) ? (
                    <span className="checked-icon">
                      <MdCheckBox />
                    </span>
                  ) : (
                    <span className="unchecked-icon">
                      <MdCheckBoxOutlineBlank />
                    </span>
                  )}
                  <img src={image} alt={label} />
                  <span>{label}</span>
                </div>
              );
            })}
          </div>
          <div className="options-bar">
            <span>Selected: {selectedIds.length}</span>
            <span className="clear-btn" onClick={clearSelecteds}>
              Clear selected
            </span>
          </div>
        </div>
      ) : null}
      {isOptionsOpen ? (
        <div
          className="back"
          onClick={(e) => {
            setIsOptionsOpen(false);
          }}
        />
      ) : null}
    </div>
  );
};

export default SelectField;
