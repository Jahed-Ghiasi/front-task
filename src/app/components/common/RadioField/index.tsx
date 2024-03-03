import clsx from "clsx";
import "./styles.css";
import Icon from "../icon";
import { useCallback } from "react";

interface IProps {
  icon?: JSX.Element;
  title: JSX.Element;
  value: any;
  selected: any;
  onChange?: (value: any) => void;
}

const RadioField = ({ icon, title, value, selected, onChange }: IProps) => {
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
