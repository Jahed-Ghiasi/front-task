import { Field, FormikErrors, FormikTouched } from "formik";
import clsx from "clsx";
import "./styles.css";

interface IProps {
  type?: string;
  label?: string;
  isMovingLabel?: boolean;
  required?: boolean;
  id: string;
  name: string;
  value: any;
  errors?: FormikErrors<any>;
  touched?: FormikTouched<any>;
  onChange?: (value: any) => void;
  placeholder?: string;
  inputClassName?: string;
}

const InputField = ({
  type = "text",
  label,
  id,
  name,
  required,
  touched,
  errors,
  value,
  onChange,
  placeholder,
  inputClassName,
  isMovingLabel,
}: IProps) => {
  return (
    <div className="input-field">
      {label && !isMovingLabel ? (
        <label
          className={clsx("label", required && "vital-input")}
          htmlFor={id}
        >
          {label}
        </label>
      ) : null}
      <Field
        type={type}
        id={id}
        placeholder={placeholder || label}
        name={name}
        className={inputClassName}
        value={value}
        onChange={(e: any) => onChange && onChange(e.target.value)}
      />
      {isMovingLabel ? (
        <span className="moving-label">{placeholder || label}</span>
      ) : null}
      {errors?.[name] && touched?.[name] ? (
        <span className="error">{(errors as any)[name]}</span>
      ) : null}
    </div>
  );
};

export default InputField;
