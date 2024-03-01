import { Field, FormikErrors, FormikTouched } from "formik";
import clsx from "clsx";

interface IProps {
  type?: string;
  label: string;
  required: boolean;
  id: string;
  name: string;
  value: any;
  errors?: FormikErrors<any>;
  touched?: FormikTouched<any>;
  onChange?: (value: any) => void;
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
}: IProps) => {
  return (
    <div>
      <label className={clsx(required && "vital-input")} htmlFor={id}>
        {label}
      </label>
      <Field
        type={type}
        id={id}
        name={name}
        className="formInput"
        value={value}
        onChange={(e: any) => onChange && onChange(e.target.value)}
      />
      {errors?.[name] && touched?.[name] ? (
        <span className="error">{(errors as any)[name]}</span>
      ) : null}
    </div>
  );
};

export default InputField;
