import clsx from "clsx";
import "./styles.css";
import { FormikErrors } from "formik";

interface IProps {
  icon?: JSX.Element;
  title: JSX.Element;
  value: any;
  id: number;
  selected: any;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void | FormikErrors<any>>;
  name: string;
}

const RadioField = ({
  id,
  icon,
  title,
  value,
  selected,
  setFieldValue,
  name,
}: IProps) => {
  return (
    <div
      className="radio-input"
      onClick={() => {
        setFieldValue(name, value);
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
