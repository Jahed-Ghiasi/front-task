import clsx from "clsx";
import { ISelectFieldOption } from "..";
import Icon from "src/app/components/common/icon";
import { MdCheckBox } from "react-icons/md";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import './optionStyle.css'

interface IProps {
  onClick?: (id: number) => void;
  option: ISelectFieldOption;
  isSelected: boolean
}

const Option = ({ onClick, option, isSelected }: IProps) => {
    const { id, label, image } = option;
    const iconClassNames = clsx(
      isSelected ? "checked-icon" : "unchecked-icon"
    );
    const icon = isSelected ? (
      <MdCheckBox />
    ) : (
      <MdCheckBoxOutlineBlank />
    );

  return (
    <div className="option" onClick={() => onClick && onClick(id)}>
      <Icon className={iconClassNames} children={icon} />
      {image ? <img src={image} alt={label} /> : null}
      <span>{label}</span>
    </div>
  );
};

export default Option;
