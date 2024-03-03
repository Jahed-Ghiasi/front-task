import clsx from "clsx";
import React, { ReactNode } from "react";
import "./styles.css";

interface IProps {
  type?: "contained" | "outlined";
  text?: string;
  children?: ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  buttonType?: "button" | "reset" | "submit";
  disabled?: boolean;
  title?: string;
  isFullWidth?: boolean;
  width?: string;
  height?: string;
}

const Button = ({
  type = "contained",
  text,
  children,
  className,
  onClick,
  buttonType = "button",
  disabled,
  title,
  isFullWidth,
  height,
  width,
}: IProps) => {
  return (
    <button
      className={clsx("btn", type, className)}
      onClick={onClick}
      type={buttonType}
      disabled={disabled}
      title={title}
      style={{
        width: isFullWidth ? "100%" : width,
        height: height,
      }}
    >
      {text || children}
    </button>
  );
};

export default Button;
