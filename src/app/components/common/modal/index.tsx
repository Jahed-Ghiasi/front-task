import { CSSProperties, ReactNode, useEffect } from "react";
import "./styles.css";
import clsx from "clsx";

export interface IModalProps {
  title?: string;
  visible?: boolean;
  onHiding: () => void;
  width?: number;
  height?: number;
  minHeight?: number;
  maxHeight?: number;
  children?: ReactNode;
  overflow?: string;
  backdrop?: boolean;
  className?: string;
  backdropClassName?: CSSProperties;
}

const Modal = ({
  title,
  onHiding,
  backdrop,
  backdropClassName,
  children,
  className,
  height,
  maxHeight,
  minHeight,
  overflow,
  visible,
  width,
}: IModalProps) => {
  useEffect(() => {
    if (visible) {
      document.body.style.overflowY = "hidden";
    } else document.body.style.overflowY = "auto";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [visible]);

  const handleHide = () => {
    if (backdrop) onHiding();
  };

  return visible ? (
    <div className="holder">
      <div
        className={clsx("backdrop", backdropClassName)}
        onClick={handleHide}
      />
      <div
        className={clsx("main", className)}
        style={{
          width: width || 200,
          height: height,
          overflow: overflow || "auto",
          minHeight: minHeight,
          maxHeight: maxHeight,
        }}
      >
        {title && <h3>{title}</h3>}
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal;
