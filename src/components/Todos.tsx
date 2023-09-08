import { type ListOfToDo } from '../types/types';
import Todo from './Todo';

interface Props {
  //generico=> indica la forma de recibir las props
  todos: ListOfToDo;
  onRemoveTodo: (id: string) => void;
}

const Todos: React.FC<Props> = ({ todos, onRemoveTodo }) => {
  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        </li>
      ))}
    </ul>
  );
};

export default Todos;
