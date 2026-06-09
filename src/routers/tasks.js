import { Router } from 'express';

import {
  addTask,
  deleteTask,
  getTaskById,
  getTasks,
  patchTask,
} from '../controllers/tasks.js';

const tasksRouter = Router();

tasksRouter.get('/tasks', getTasks);

tasksRouter.get('/tasks/:taskId', getTaskById);

tasksRouter.delete('/tasks/:taskId', deleteTask);

tasksRouter.post('/tasks', addTask);

tasksRouter.patch('/tasks/:taskId', patchTask);

export default tasksRouter;
