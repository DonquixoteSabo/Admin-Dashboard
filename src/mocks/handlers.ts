import { rest } from 'msw';
//data
import { data } from './data';
import { todaysData } from './data/TodaysData';
import { tasks } from './data/tasks';
//types
import { Task } from 'types/Task';

export const handlers = [
  rest.get('/data', (req, res, ctx) => {
    return res(
      ctx.json({
        data,
      })
    );
  }),
  rest.get('/todaysData', (req, res, ctx) => {
    return res(
      ctx.json({
        todaysData,
      })
    );
  }),
  rest.get('/tasks', (req, res, ctx) => {
    return res(
      ctx.json({
        tasks,
      })
    );
  }),
  rest.post(
    '/tasks-finished',
    (
      req: { body: { id: string; finished: boolean; currentState: Task[] } },
      res,
      ctx
    ) => {
      const body = req.body;

      const newTasks = body.currentState.map((task: Task) => {
        if (task.id === body.id) {
          // console.log({
          //   ...task,
          //   finished: !body.finished,
          // });

          return {
            ...task,
            finished: !body.finished,
          };
        }
        // console.log(task);
        return task;
      });
      return res(
        ctx.json({
          tasks: newTasks,
        })
      );
    }
  ),
];
