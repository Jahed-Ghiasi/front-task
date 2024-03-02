import { ITodo } from "types/dashboard.types";
import "./styles.css";
import Todo from "./Todo";
import AddTodoBtn from "./AddTodoBtn";

interface IProps {
  todos: ITodo[];
}

const TodoList = ({ todos }: IProps) => {
  return (
    <div className="todos">
      <h3>Your to-do list</h3>
      <div className="todos-list">
        {todos.map((todo: ITodo) => {
          return <Todo todo={todo} key={todo.id} />;
        })}
      </div>
      <AddTodoBtn />
    </div>
  );
};

export default TodoList;
