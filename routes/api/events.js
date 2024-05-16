import { Router } from 'express';

import isValidId from '../../middlewares/isValidId.js';

import tasksCtrl from '../../controllers/events.js';

import validateBody from '../../middlewares/validateBody.js';
import { createTaskSchema, updateTaskSchema, updateCompletedSchema } from '../../schemas/tasks.js';

const router = Router();

const { getAllTasks, getOneTask, updateParticipant } = tasksCtrl;

router.get('/', getAllTasks);

router.get('/:id', isValidId, getOneTask);

router.patch('/:id/participant', isValidId, validateBody(updateCompletedSchema), updateParticipant);

export default router;
