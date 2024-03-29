import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./styles.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import SearchInput from "../SearchInput";
import clsx from "clsx";
import Button from "../button";
import Icon from "../icon";
import Option from "./components/Option";
import SelectedOption from "./components/SelectedOption";

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
  isMultiSelect?: boolean;
  isSearchable?: boolean;
  showSelecteds?: boolean;
}

const SelectField = ({
  onChange,
  onApply,
  options,
  value,
  isMultiSelect,
  label,
  isSearchable,
  showSelecteds,
}: IProps) => {
  const [optionsData, setOptionsData] = useState<ISelectFieldOption[]>(options);
  const [isOptionsOpen, setIsOptionsOpen] = useState<boolean>(false);
  const [selectedIds, setSelectedIds] = useState<number[]>(value);

  const inputRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    onChange && onChange(selectedIds);
  }, [selectedIds]);

  const allSelectedWithDetails: ISelectFieldOption[] = useMemo(() => {
    return options.filter((option: ISelectFieldOption) =>
      selectedIds.includes(option.id)
    );
  }, [selectedIds, options]);

  const handleSelection = useCallback(
    (id: number) => {
      if (isMultiSelect) {
        selectedIds.includes(id)
          ? removeSelected(id)
          : setSelectedIds([...selectedIds, id]);
      } else {
        selectedIds.includes(id) ? clearSelecteds() : setSelectedIds([id]);
      }
    },
    [selectedIds, isMultiSelect]
  );

  const removeSelected = useCallback(
    (id: number) => {
      setSelectedIds(selectedIds.filter((selected: number) => selected !== id));
    },
    [selectedIds]
  );

  const clearSelecteds = useCallback(() => setSelectedIds([]), []);

  const handleOptionsBoxPresence = useCallback(
    () => setIsOptionsOpen(!isOptionsOpen),
    [isOptionsOpen]
  );

  const handleSearch = useCallback(
    (value: string) =>
      setOptionsData(
        options.filter((item: ISelectFieldOption) => {
          if (item.label.toLowerCase().includes(value.toLowerCase())) {
            return item;
          }
        })
      ),
    []
  );

  const clearSearch = useCallback(() => setOptionsData(options), []);

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
              return (
                <SelectedOption
                  key={option.id}
                  option={option}
                  onRemove={removeSelected}
                />
              );
            })}
          </div>
        ) : null}
        <Icon
          className="options-box-toggler"
          isButton
          onClick={handleOptionsBoxPresence}
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
          {isSearchable ? (
            <SearchInput onSearch={handleSearch} onClearSearch={clearSearch} />
          ) : null}
          <div className="options">
            {optionsData.map((option: ISelectFieldOption) => {
              return (
                <Option
                  isSelected={selectedIds.includes(option.id)}
                  key={option.id}
                  option={option}
                  onClick={handleSelection}
                />
              );
            })}
          </div>
          {onApply ? (
            <Button
              buttonType="button"
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
        <div className="back" onClick={handleOptionsBoxPresence} />
      ) : null}
    </div>
  );
};

export default SelectField;
