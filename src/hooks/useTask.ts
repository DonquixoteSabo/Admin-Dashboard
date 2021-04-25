import axios from 'axios';
import { Task } from 'types/Task';

export const useTask = () => {
  const getTasks = async () => {
    try {
      const result = await axios.get('/tasks');
      return result.data.tasks;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const finishedChange = async (
    id: string,
    finished: boolean,
    tasks: Task[]
  ) => {
    const response = await axios.post('/tasks-finished', {
      id,
      finished,
      currentState: tasks,
    });
    return response.data.tasks;
  };

  const addTask = async (tasks: Task[], text: string) => {
    try {
      const result = await axios.post('/task-add', {
        currentState: tasks,
        text,
      });
      return result.data.tasks;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  return {
    getTasks,
    finishedChange,
    addTask,
  };
};
