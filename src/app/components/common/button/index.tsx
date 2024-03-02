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
  fullWidth?: boolean;
  style?: React.CSSProperties;
  width?: string | number;
  height?: string | number;
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
  fullWidth,
  height,
  style,
  width,
}: IProps) => {
  return (
    <button
      className={clsx("btn", type, className)}
      onClick={onClick}
      type={btnType}
      disabled={disabled}
      title={title}
      style={{
        width: fullWidth ? "100%" : width,
        height: height,
        ...style,
      }}
    >
      {text || children}
    </button>
  );
};

export default Button;
