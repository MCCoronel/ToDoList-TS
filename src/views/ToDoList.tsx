import { useState } from 'react'
import Todos from '../components/Todos'
import {Todo} from "../types/types"

const mockTodos = [
    {
      id: '1',
      title: 'todo 1',
      completed: false,
    },
    {
      id: '2',
      title: 'todo 2',
      completed: false,
    },
    {
      id: '3',
      title: 'todo 3',
      completed: false,
    },
  ]

  const TodoList: React.FC = () => {

    const [todos, setTodos] = useState(mockTodos)

    const handleRemove = (id:Todo["id"])=>{
        const newTodos = todos.filter(todo => todo.id !== id)
    }

    return (
        <div className="todoapp">
        <Todos todos={todos} onRemoveTodo={handleRemove}/>
      </div>
    )
}

export default TodoList