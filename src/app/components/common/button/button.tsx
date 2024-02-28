import clsx from "clsx";
import React, { ReactNode } from "react";
import "./button.css";

interface IProps {
  text?: string;
  children?: ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "reset" | "submit";
  disabled?: boolean;
  title?: string;
}

const Button = ({
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
      className={clsx("btn", className)}
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
