import Joi from 'joi';

export const createTaskSchema = Joi.object({
  text: Joi.string().required(),
});

export const updateTaskSchema = Joi.object({
  text: Joi.string().required(),
});

export const updateCompletedSchema = Joi.object({
  completed: Joi.boolean().required(),
});

export const registerSchema = Joi.object({
  name: Joi.string().required().min(1),
  email: Joi.string().pattern(emailRegexp).required().messages({
    'string.pattern.base': 'Email format must be - example@example.com',
  }),
  password: Joi.string().min(8).required(),
});

export const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});
