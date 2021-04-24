import { rest } from 'msw';
//types
import { Task } from 'types/Task';

export const taskFinished = rest.post(
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
);
