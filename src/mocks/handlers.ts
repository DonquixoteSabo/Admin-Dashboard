import { rest } from 'msw';

import { data } from './data';
import { todaysData } from './data/TodaysData';
export const handlers = [
  rest.get('/overview', (req, res, ctx) => {
    return res(
      ctx.json({
        data,
        todaysData,
      })
    );
  }),
];
