import { CSSProperties, ReactNode, useEffect } from "react";
import "./styles.css";

export interface IModalProps {
  visible?: boolean;
  onHiding: () => void;
  width?: string | number;
  height?: string | number;
  min_height?: string | number;
  max_height?: string | number;
  children?: ReactNode;
  hideCloseBtn?: boolean;
  overflow?: string;
  backdrop?: boolean;
  showLogo?: boolean;
  className?: string;
  backdropStyles?: CSSProperties;
}

const Modal = ({
  onHiding,
  backdrop,
  backdropStyles,
  children,
  className,
  height,
  hideCloseBtn,
  max_height,
  min_height,
  overflow,
  showLogo,
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

  const hideHandler = () => {
    if (backdrop) onHiding();
  };

  return visible ? (
    <div className="holder">
      <div className="backdrop" onClick={hideHandler} style={backdropStyles} />
      <div
        className={`main ${className}`}
        style={{
          width: width || 200,
          height: height,
          overflow: overflow || "auto",
          minHeight: min_height,
          maxHeight: max_height,
        }}
      >
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal;
