import { Router } from 'express';

import isValidId from '../../middlewares/isValidId.js';

import eventsCtrl from '../../controllers/events.js';

import validateBody from '../../middlewares/validateBody.js';

import { updateParticipantsSchema } from '../../schemas/events.js';

const router = Router();

const { getAllEvents, getOneEvent, updateParticipants } = eventsCtrl;

router.get('/', getAllEvents);

router.get('/:id', isValidId, getOneEvent);

router.patch(
  '/:id/participants',
  isValidId,
  validateBody(updateParticipantsSchema),
  updateParticipants
);

export default router;
