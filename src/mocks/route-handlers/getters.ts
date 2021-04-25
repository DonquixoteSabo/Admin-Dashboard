import { rest } from 'msw';
//data
import { data } from 'mocks/data/index';
import { todaysData } from 'mocks/data/TodaysData';
import { tasks } from 'mocks/data/tasks';
import { cards } from 'mocks/data/cards';
import { tickets } from 'mocks/data/tickets';

export const getters = [
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
  rest.get('/cards', (req, res, ctx) => {
    return res(
      ctx.json({
        cards,
      })
    );
  }),
  rest.get('/tickets', (req, res, ctx) => {
    return res(
      ctx.json({
        tickets,
      })
    );
  }),
];
