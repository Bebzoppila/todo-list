import { FC, FormEvent, FormEventHandler, useState } from "react"
import useInput from "../hooks/useInput"
type TodoAddProps = {
  addTodoItem: (text: string) => void
}

const TodoAdd:FC<TodoAddProps> = ({addTodoItem}) => {
    const {state, update} = useInput()

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      if(state.length > 0){
        addTodoItem(state)
        update('')
      }
    }

    return(
        <form onSubmit={onSubmit} className="add">
        <input onInput={update} value={state} type="text" name="add" placeholder="Добавить элемент..." />
        <div className="input-buttons">
          <button  className="input-button">+</button>
        </div>
      </form>
    )
}

export default TodoAdd