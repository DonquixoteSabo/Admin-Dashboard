import { rest } from 'msw';

import { data } from './data';
import { todaysData } from './data/TodaysData';
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
];
