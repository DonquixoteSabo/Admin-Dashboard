import { ChangeEvent, useState } from 'react';
//components
import { Input } from 'components/atoms/Input';
import { AddButton } from 'components/atoms/AddButton';
import { Status } from 'components/atoms/Status';
//styles
import { List } from './styles';
//types
import { Task } from 'types/Task';

interface Props {
  tasks: Task[];
  handleChange: (id: string) => void;
}

export const TasksList = ({ tasks, handleChange }: Props) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <List>
      <li className="input-wrapper">
        <Input
          value={inputValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInputValue(e.target.value)
          }
        />
        <AddButton />
      </li>
      {tasks.map(({ text, status, finished, id }) => (
        <li key={id}>
          <div>
            <input
              type="checkbox"
              name="status"
              id="status"
              checked={finished}
              onChange={() => handleChange(id)}
            />
            <p>{text}</p>
          </div>
          <Status status={status}>{status}</Status>
        </li>
      ))}
    </List>
  );
};
