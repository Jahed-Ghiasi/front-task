import Icon from "src/app/components/common/icon";
import { ITodo } from "types/dashboard.types";
import { RiTodoLine } from "react-icons/ri";
import "./todo.css";
import { dateString } from "src/app/utils/index";

interface IProps {
  todo: ITodo;
}

const Todo = ({ todo }: IProps) => {
  const { date, id, title } = todo;

  return (
    <div className="todo-item">
      <Icon children={<RiTodoLine />} />
      <div className="todo-item-des">
        <span className="todo-title">{title}</span>
        <span className="todo-date">{dateString(date)}</span>
      </div>
    </div>
  );
};

export default Todo;
