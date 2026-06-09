import { Task } from '../db/models/Task.js';
import createHttpError from 'http-errors';

export const getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

export const getTaskById = async (req, res) => {
  const { taskId } = req.params;
  const task = await Task.findById(taskId);
  if (!task) {
    throw createHttpError(404, 'Task not found!');
  }
  res.json(task);
};

export const addTask = async (req, res) => {
  const body = req.body;
  const newTask = await Task.create(body);
  res.status(201).json(newTask);
};

export const patchTask = async (req, res) => {
  const { taskId } = req.params;
  const body = req.body;
  const updatedTask = await Task.findByIdAndUpdate(taskId, body, {
    returnDocument: 'after',
  });
  if (!updatedTask) {
    throw createHttpError(404, 'Task not found!');
  }
  res.json(updatedTask);
};

export const deleteTask = async (req, res) => {
  const { taskId } = req.params;
  const task = await Task.findByIdAndDelete(taskId);
  if (!task) {
    throw createHttpError(404, 'Task not found!');
  }
  res.json(task);
};
