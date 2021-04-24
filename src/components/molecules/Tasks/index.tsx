import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//components
import {
  Title,
  InnerWrapper,
} from 'components/organism/TicketsAndTasks/styles';
import { TasksList } from 'components/atoms/TasksList';

export const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get('/tasks');
      const { tasks } = response.data;
      setTasks(tasks);
    };
    fetch();
  }, []);

  const handleChange = async (id: string, finished: boolean) => {
    const response = await axios.post('/tasks-finished', {
      id,
      finished,
      currentState: tasks,
    });
    const newTasks = response.data.tasks;

    setTasks(newTasks);
  };

  const handleAddTask = async (text: string) => {
    const response = await axios.post('/task-add', {
      currentState: tasks,
      text,
    });
    const newTasks = response.data.tasks;
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
      {tasks.length > 0 ? (
        <TasksList
          handleChange={handleChange}
          tasks={tasks}
          handleAddTask={handleAddTask}
        />
      ) : (
        <h1>Loading...</h1>
      )}
    </InnerWrapper>
  );
};
