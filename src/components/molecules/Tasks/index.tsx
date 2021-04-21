import { useState } from 'react';
import { Link } from 'react-router-dom';
//components
import { Title, InnerWrapper } from 'components/organism/TicketsAndTasks';
//types
import { Task } from 'types/Task';
import { TasksList } from 'components/atoms/TasksList';

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
  const [tasks, setTasks] = useState(mockedData);
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
      <TasksList handleChange={handleChange} tasks={tasks} />
    </InnerWrapper>
  );
};
