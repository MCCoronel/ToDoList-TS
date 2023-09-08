import {type Todo as TodoType} from "../types/types"

type Props = TodoType

const Todo: React.FC<Props> = ({ id, title, completed }) => {



  return (
    <div>
      <input type='checkbox' checked={completed} onChange={() => {}} className="toggle" />
      <label style={{ textDecoration: completed ? 'line-through' : 'none' }}>{title}</label>
      <button onClick={() => {}} className="destroy">Delete</button>
    </div>
  );
};

export default Todo;
