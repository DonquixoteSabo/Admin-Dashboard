import { rest } from 'msw';
import { nanoid } from 'nanoid';
//types
import { Task } from 'types/Task';

export const taskAdd = rest.post(
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
);
