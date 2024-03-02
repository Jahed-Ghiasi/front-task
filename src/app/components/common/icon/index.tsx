import clsx from "clsx";
import "./styles.css";

interface IProps {
  isButton?: boolean;
  onClick?: () => void;
  className?: string;
  children?: JSX.Element;
}

const Icon = ({ onClick, className, isButton, children }: IProps) => {
  return (
    <span
      className={clsx("default-icon", className, isButton && "icon-btn")}
      onClick={onClick && onClick}
    >
      {children}
    </span>
  );
};

export default Icon;
