import { useEffect, useMemo, useRef, useState } from "react";
import "./styles.css";
import { MdCheckBox } from "react-icons/md";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import SearchInput from "../SearchInput";
import clsx from "clsx";
import Button from "../button";
import Icon from "../icon";

export interface ISelectFieldOption {
  id: number;
  label: string;
  image?: string;
}

interface IProps {
  label: string;
  options: ISelectFieldOption[];
  onChange?: (value: number[]) => void;
  onApply?: (value: number[]) => void;
  value: number[];
  multiSelect?: boolean;
  searchable?: boolean;
  showSelecteds?: boolean;
}

const SelectField = ({
  onChange,
  onApply,
  options,
  value,
  multiSelect,
  label,
  searchable,
  showSelecteds,
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

  const allSelectedWithDetails: ISelectFieldOption[] = useMemo(() => {
    return options.filter((option: ISelectFieldOption) =>
      selectedIds.includes(option.id)
    );
  }, [selectedIds]);

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
      <div ref={inputRef} className="input">
        <span
          className={clsx(
            isOptionsOpen || selectedIds.length ? "select-label" : ""
          )}
        >
          {label}
        </span>
        {selectedIds.length && showSelecteds ? (
          <div className="selected-options">
            {allSelectedWithDetails.map((option: ISelectFieldOption) => {
              const { id, label, image } = option;
              return (
                <div className="selected-option" key={id}>
                  {image ? <img src={image} alt={label} /> : null}
                  <span>{label}</span>
                  <Icon
                    isButton
                    className="remove-btn"
                    onClick={() => removeSelected(id)}
                    children={<IoClose />}
                  />
                </div>
              );
            })}
          </div>
        ) : null}
        <Icon
          className="options-box-toggler"
          isButton
          onClick={() => setIsOptionsOpen(!isOptionsOpen)}
          children={isOptionsOpen ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
        />
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
                  <Icon
                    className={clsx(
                      selectedIds.includes(id)
                        ? "checked-icon"
                        : "unchecked-icon"
                    )}
                    children={
                      selectedIds.includes(id) ? (
                        <MdCheckBox />
                      ) : (
                        <MdCheckBoxOutlineBlank />
                      )
                    }
                  />
                  {image ? <img src={image} alt={label} /> : null}
                  <span>{label}</span>
                </div>
              );
            })}
          </div>
          {onApply ? (
            <Button
              btnType="button"
              text="Apply"
              onClick={() => onApply(selectedIds)}
            />
          ) : null}
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
