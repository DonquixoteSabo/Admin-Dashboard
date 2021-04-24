import { rest } from 'msw';
import { nanoid } from 'nanoid';
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
          return {
            ...task,
            finished: !body.finished,
          };
        }
        return task;
      });
      return res(
        ctx.json({
          tasks: newTasks,
        })
      );
    }
  ),
  rest.post(
    '/task-add',
    (req: { body: { currentState: Task[]; text: string } }, res, ctx) => {
      const body = req.body;
      const newTask: Task = {
        text: body.text,
        id: nanoid(),
        finished: false,
        status: 'new',
      };
      return res(
        ctx.json({
          tasks: [...body.currentState, newTask],
        })
      );
    }
  ),
];
