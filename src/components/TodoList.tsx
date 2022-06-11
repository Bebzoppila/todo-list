import { useState } from "react";
import TodoAdd from "./TodoAdd";
import TodoItem from "./TodoItem";

type TodoItemType = {
  id: number;
  text: string;
  done: boolean;
};

const TodoList = () => {
  const [todoItems, setTodoItems] = useState<TodoItemType[]>([]);

  const deleteTodoItem = (id: number) => {
    setTodoItems(todoItems.filter((item) => item.id !== id));
  };

  const addTodoItem = (text: string) => {
    const newId = Date.now();
    setTodoItems([...todoItems, { id: newId, text, done: false }]);
  };

  const completeTask = (id: number) => {

    setTodoItems(
      todoItems.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  return (
    <div className="todoList">
      <div className="content">
        <TodoAdd addTodoItem={addTodoItem}></TodoAdd>
        <ul className="todos align">
          {todoItems.map((item) => (
            <TodoItem
              complete={() => completeTask(item.id)}
              id={item.id}
              deleteItem={() => deleteTodoItem(item.id)}
              text={item.text}
              done={item.done}
            ></TodoItem>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
