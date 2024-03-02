import Icon from "src/app/components/common/icon";
import { CgAddR } from "react-icons/cg";
import "./addTodoBtn.css";
import { useAppContext } from "src/app/utils/context";

const AddTodoBtn = () => {
  const { setIsAddTodoModal } = useAppContext();

  return (
    <div className="add-todo-btn" onClick={() => setIsAddTodoModal(true)}>
      <Icon className="add-todo-icon" children={<CgAddR />} />
      Add To Do
    </div>
  );
};

export default AddTodoBtn;
