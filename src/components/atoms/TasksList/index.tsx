import { ChangeEvent, useState, useEffect } from 'react';
//components
import { Input } from 'components/atoms/Input';
import { AddButton } from 'components/atoms/AddButton';
import { Status } from 'components/atoms/Status';
//styles
import { List } from './styles';
//hooks
import { useTask } from 'hooks/useTask';
export const TasksList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const { getTasks, finishedChange, addTask } = useTask();

  useEffect(() => {
    let didCancel = false;

    const fetch = async () => {
      try {
        const tasks = await getTasks();
        if (!didCancel) {
          setTasks(tasks);
        }
      } catch (error) {
        if (!didCancel) {
          console.log(error);
          setTasks([]);
        }
      }
    };
    fetch();

    return () => {
      didCancel = true;
    };
  }, []);

  const handleChange = async (id: string, finished: boolean) => {
    const newTasks = await finishedChange(id, finished, tasks);

    setTasks(newTasks);
  };

  const handleButtonClick = async () => {
    if (inputValue) {
      const newTasks = await addTask(tasks, inputValue);
      setTasks(newTasks);
      setInputValue('');
    }
  };

  return (
    <List>
      <li className="input-wrapper">
        <Input
          value={inputValue}
          placeholder="Add new task"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInputValue(e.target.value)
          }
        />
        <AddButton handleClick={handleButtonClick} />
      </li>
      {tasks.length > 0 ? (
        tasks.map(({ text, status, finished, id }) => (
          <li key={id}>
            <div>
              <input
                type="checkbox"
                name="status"
                id="status"
                checked={finished}
                onChange={() => handleChange(id, finished)}
              />
              <p>{text}</p>
            </div>
            <Status status={status}>{status}</Status>
          </li>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </List>
  );
};
