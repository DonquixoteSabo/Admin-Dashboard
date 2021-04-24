// routes that only exports default values;
import { getters } from './route-handlers/getters';
//post routes
import { taskFinished } from './route-handlers/tasks-finished';
import { taskAdd } from './route-handlers/task-add';

export const handlers = [...getters, taskFinished, taskAdd];
