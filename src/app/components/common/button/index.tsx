import clsx from "clsx";
import React, { ReactNode } from "react";
import "./styles.css";

interface IProps {
  type?: "contained" | "outlined";
  text?: string;
  children?: ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "reset" | "submit";
  disabled?: boolean;
  title?: string;
}

const Button = ({
  type = "contained",
  text,
  children,
  className,
  onClick,
  btnType = "button",
  disabled,
  title,
}: IProps) => {
  return (
    <button
      className={clsx("btn", type, className)}
      onClick={onClick}
      type={btnType}
      disabled={disabled}
      title={title}
    >
      {text || children}
    </button>
  );
};

export default Button;
