import clsx from "clsx";
import "./styles.css";
import Icon from "../icon";
import { useCallback } from "react";

interface IProps<T> {
  icon?: JSX.Element;
  title: JSX.Element;
  value: T;
  selected: T;
  onChange?: (value: T) => void;
}

const RadioField = <T,>({
  icon,
  title,
  value,
  selected,
  onChange,
}: IProps<T>) => {
  const handleChange = useCallback(
    () => onChange && onChange(value),
    [onChange]
  );

  return (
    <div className="radio-input" onClick={handleChange}>
      <div className="radio-detail">
        {icon && <Icon className="radio-icon" children={icon} />}
        {title}
      </div>
      <span className={clsx("circle", selected === value && "selected")} />
    </div>
  );
};

export default RadioField;
