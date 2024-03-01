import clsx from "clsx";
import "./styles.css";

interface IProps {
  icon?: JSX.Element;
  title: JSX.Element;
  value: any;
  selected: any;
  onChange?: (value: any) => void;
}

const RadioField = ({ icon, title, value, selected, onChange }: IProps) => {
  return (
    <div
      className="radio-input"
      onClick={() => {
        onChange && onChange(value);
      }}
    >
      <div className="radio-detail">
        {icon ? <span className="radio-icon">{icon}</span> : null}
        {title}
      </div>
      <span className={clsx("circle", selected === value && "selected")} />
    </div>
  );
};

export default RadioField;
