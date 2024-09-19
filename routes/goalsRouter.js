import express from 'express'
import { getGoals, createGoal, deleteGoal, updateGoal } from '../controllers/goalsControllers.js';

export const router = express.Router();

router.route('/').get(getGoals).post(createGoal)

router.route('/:id').delete(deleteGoal).patch(updateGoal)