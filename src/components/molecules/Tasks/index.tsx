import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
//components
import { Title, InnerWrapper } from 'components/organism/TicketsAndTasks';
//styles
import { Input } from 'components/atoms/Input';
import { AddButton } from 'components/atoms/AddButton';
import { Status } from 'components/atoms/Status';
import { List } from './styles';
//types
import { Task } from 'types/Task';

const mockedData: Task[] = [
  {
    text: 'Finish ticket update',
    status: 'urgent',
    finished: false,
    id: '1',
  },
  {
    text: 'Create new ticket example',
    status: 'new',
    finished: false,
    id: '2',
  },
  {
    text: 'Update ticket reporte',
    status: 'default',
    finished: true,
    id: '3',
  },
];

export const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>(mockedData);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (id: string) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          finished: !task.finished,
        };
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <InnerWrapper>
      <Title>Tasks</Title>
      <Link className="link" to="/tasks">
        View All
      </Link>
      <h6>
        <small>Today</small>
      </h6>
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
    </InnerWrapper>
  );
};
