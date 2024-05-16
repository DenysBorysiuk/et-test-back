import Joi from 'joi';

export const updateParticipantsSchema = Joi.object({
  name: Joi.string().required().min(1),
  email: Joi.string().required(),
  dateOfBirth: Joi.string().required(),
  about: Joi.string().required(),
});
