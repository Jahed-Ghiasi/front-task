import { Field, FormikErrors, FormikTouched } from "formik";
import clsx from "clsx";
import "./styles.css";
import { useCallback } from "react";

interface IProps<T> {
  type?: string;
  label?: string;
  isMovingLabel?: boolean;
  required?: boolean;
  id: string;
  name: string;
  value: T;
  errors?: FormikErrors<any>;
  touched?: FormikTouched<any>;
  onChange?: (value: T) => void;
  placeholder?: string;
  inputClassName?: string;
}

const InputField = <T,>({
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
}: IProps<T>) => {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      onChange && onChange(e.target.value as T),
    [onChange]
  );

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
        onChange={handleChange}
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
