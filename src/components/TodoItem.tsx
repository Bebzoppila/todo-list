import { FC } from "react";

type TodoItemPtops = {
  text: string;
  deleteItem: () => void;
  id: number;
  complete: () => void;
  done: boolean;
};

const TodoItem: FC<TodoItemPtops> = ({
  text,
  deleteItem,
  id,
  complete,
  done,
}) => {
  return (
    <li>
      <input
        onClick={() => complete()}
        checked={done}
        type="checkbox"
        id={String(id)}
      />
      <label htmlFor={String(id)}>
        <span className="check"></span>
        {text}
      </label>
      <button onClick={() => deleteItem()} className="btn-del">
        X
      </button>
    </li>
  );
};

export default TodoItem;
