import Icon from "src/app/components/common/icon";
import { ISelectFieldOption } from "..";
import { IoClose } from "react-icons/io5";
import "./selectedOption.css";

interface IProps {
  option: ISelectFieldOption;
  onRemove: (id: number) => void;
}

const SelectedOption = ({ option, onRemove }: IProps) => {
  const { id, label, image } = option;

  return (
    <div className="selected-option" key={id}>
      {image ? <img src={image} alt={label} /> : null}
      <span>{label}</span>
      <Icon
        isButton
        className="remove-btn"
        onClick={() => onRemove(id)}
        children={<IoClose />}
      />
    </div>
  );
};

export default SelectedOption;
