import { rest } from 'msw';

import { data } from './data';

export const handlers = [
  rest.get('/overview', (req, res, ctx) => {
    return res(
      ctx.json({
        data,
      })
    );
  }),
];
